'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import AdminSidebar from './components/AdminSidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const checkAdminAccess = async () => {
      const supabase = createClient()      
      
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error || !user) {
        router.push('/auth/login')
        return
      }

      console.log({user})

      // Check if user has admin role
      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single()

      console.log({roles, rolesError})

      if (rolesError || !roles || roles.role !== 'anypay_admin') {
        //router.push('/in')
      }
    }

    checkAdminAccess()
  }, [])

  return (
    <div className="min-h-screen bg-[#111] flex">
      <AdminSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
} 