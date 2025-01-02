'use client'

import Logo from '@/components/Logo'
import Link from 'next/link'

export default function VerifyEmail() {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Check your email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          We sent you an email with a link to verify your account.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Click the link in your email to verify your account.
            </p>
            <Link
              href="/auth-new/login"
              className="text-primary hover:text-primary-dark"
            >
              Return to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 