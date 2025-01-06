'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function AuthCallback() {
  const router = useRouter()
  
  useEffect(() => {
    const handleCallback = async () => {
      const supabase = createClient()
      
      try {
        // Get the hash from the URL
        const hash = window.location.hash
        if (!hash) return
        
        // Remove the '#' from the hash
        const hashParams = new URLSearchParams(hash.substring(1))
        const access_token = hashParams.get('access_token')
        const refresh_token = hashParams.get('refresh_token')
        const type = hashParams.get('type')
        
        if (access_token && refresh_token) {
          const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          })
          
          if (error) throw error
          
          // Handle different auth types
          if (type === 'signup') {
            router.push('/in?welcome=true')
          } else if (type === 'recovery') {
            router.push('/auth/forgot-password')
          } else {
            router.push('/in')
          }
        }
      } catch (error) {
        console.error('Error during auth callback:', error)
        router.push('/auth/login?error=callback_error')
      }
    }

    handleCallback()
  }, [router])

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="text-white mt-4">Completing authentication...</p>
      </div>
    </div>
  )
} 