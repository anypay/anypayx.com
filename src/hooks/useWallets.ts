import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

export interface Wallet {
  id: string
  createdAt: string
  value: string
  chain: string
  currency: string
  note?: string
  account_id: string
}

export interface Coin {
  id: string
  chain: string
  currency: string
  name: string
  enabled: boolean
  code: string
  logo_url?: string
}

export function useWallets() {
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  const fetchWallets = async () => {
    try {
      setLoading(true)
      
      // First get the account_id for the current user
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const { data: account, error: accountError } = await supabase
        .from('accounts')
        .select('id')
        .eq('user_id', user.id)
        .single()

      if (accountError) throw accountError
      if (!account) throw new Error('No account found')

      // Then get all addresses for this account
      const { data, error } = await supabase
        .from('addresses')
        .select('*')
        .eq('account_id', account.id)
        .order('createdAt', { ascending: false })

      if (error) throw error
      setWallets(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchCoins = async () => {
    try {
      console.log('FETCHING COINS')
      const { data, error } = await supabase
        .from('coins')
        .select('*')
        .eq('supported', true)
        .eq('unavailable', false)
        .order('name')

      if (error) {
        console.error('Error fetching coins:', error)
        throw error
      }
      console.log('FETCHED COINS', data)
      setCoins(data || [])
    } catch (err: any) {
      console.error('Error in fetchCoins:', err)
    }
  }

  const addWallet = async (wallet: Omit<Wallet, 'id' | 'createdAt' | 'account_id'>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const { data: account } = await supabase
        .from('accounts')
        .select('id')
        .eq('user_id', user.id)
        .single()

      if (!account) throw new Error('No account found')

      const { data, error } = await supabase
        .from('addresses')
        .insert([{ ...wallet, account_id: account.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }])
        .select()
        .single()

      if (error) throw error
      
      setWallets(prev => [data, ...prev])
      return data
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  const updateWallet = async (id: string, updates: Partial<Wallet>) => {
    try {
      const { data, error } = await supabase
        .from('addresses')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      
      setWallets(prev => prev.map(w => w.id === id ? data : w))
      return data
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  const deleteWallet = async (id: string) => {
    try {
      const { error } = await supabase
        .from('addresses')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setWallets(prev => prev.filter(w => w.id !== id))
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  useEffect(() => {
    Promise.all([fetchWallets(), fetchCoins()])
      .finally(() => setLoading(false))
  }, [])

  return {
    wallets,
    coins,
    loading,
    error,
    addWallet,
    updateWallet,
    deleteWallet,
    refresh: fetchWallets
  }
} 