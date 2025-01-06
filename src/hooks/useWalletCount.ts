import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

export function useWalletCount() {
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) throw new Error('Not authenticated')

        const { data: account } = await supabase
          .from('accounts')
          .select('id')
          .eq('user_id', user.id)
          .single()

        if (!account) throw new Error('No account found')

        const { count, error } = await supabase
          .from('addresses')
          .select('*', { count: 'exact', head: true })
          .eq('account_id', account.id)

        if (error) throw error
        setCount(count || 0)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCount()
  }, [])

  return { count, loading, error }
} 