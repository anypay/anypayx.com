'use client'

import { useState, useEffect } from 'react'
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from 'lucide-react'


export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        // Password reset email link clicked
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase.auth])

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    try {
      const { error } = await supabase.auth.updateUser({ password })

      if (error) throw error

      setSuccess(true)
      setTimeout(() => {
        router.push('/auth/login')
      }, 2000)
    } catch (error) {
      setError('Failed to reset password. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#1E272E] text-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/anypay-logo.png"
              alt="Anypay Logo"
              width={64}
              height={64}
              className="mx-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Reset Password
          </h1>
        </div>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle>Set a new password</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your new password below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert variant="default" className="border-green-500 bg-green-500/10 text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>Password reset successfully. Redirecting to login...</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full bg-[#26DE81] hover:bg-[#26DE81]/90 text-black">
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

