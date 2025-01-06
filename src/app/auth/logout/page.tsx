'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function LogoutPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut()
      router.push('/auth/login')
    }

    logout()
  }, [router, supabase.auth])

  return (
    <div className="min-h-screen bg-[#1E272E] text-white flex items-center justify-center">
      <p className="text-xl">Logging out...</p>
    </div>
  )
}

