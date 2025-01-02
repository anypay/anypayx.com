'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [user, setUser] = useState<any>(null)
  const [authEnabled, setAuthEnabled] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const checkSupabaseConfig = async () => {
      try {
        const supabase = createClientComponentClient()
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
          setUser(session?.user ?? null)
        })

        return () => {
          authListener.subscription.unsubscribe()
        }
      } catch (error) {
        console.error('Supabase configuration error:', error)
        setAuthEnabled(false)
      }
    }

    checkSupabaseConfig()
  }, [])

  const isAuthPage = pathname?.startsWith('/auth')

  if (isAuthPage) return null

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <Link href="/" className="text-white text-xl font-bold">Anypay</Link>
      <div>
        {authEnabled ? (
          user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-white mr-2">Dashboard</Button>
              </Link>
              <Link href="/auth-new/logout">
                <Button variant="outline" className="text-white">Logout</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth-new/login">
                <Button variant="ghost" className="text-white mr-2">Login</Button>
              </Link>
              <Link href="/auth-new/signup">
                <Button variant="outline" className="text-white">Sign Up</Button>
              </Link>
            </>
          )
        ) : (
          <>
            <Link href="/about">
              <Button variant="ghost" className="text-white mr-2">About</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white">Contact</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

