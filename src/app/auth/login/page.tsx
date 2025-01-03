'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'
// hooks
import useAuth from '@/hooks/useAuth'
import useIsMountedRef from '@/hooks/useIsMountedRef'

export default function Login() {
  const { login } = useAuth()
  const isMountedRef = useIsMountedRef()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await login(email, password)
      
      if (isMountedRef.current) {
        router.push('/dashboard')
      }
    } catch (error: any) {
      if (isMountedRef.current) {
        // Handle different error types like in LoginForm
        if (error.error) {
          setError(error.error)
        } else if (error.statusCode === 401) {
          setError('Invalid email address or password')
        } else if (error.statusCode === 500) {
          setError(error.message)
        } else {
          setError('An unexpected error occurred')
        }
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGitHubLogin = async () => {
    setError(null)
    try {
      // Use the auth service's OAuth method when implemented
      // await login.signInWithGithub()
      router.push('/auth/callback')
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#111] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-gray-500 hover:text-gray-300">
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  //@ts-ignore
                  href="/auth/forgot-password"
                  className="text-gray-500 hover:text-gray-300"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}
