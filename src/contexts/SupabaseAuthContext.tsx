'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import uuidv4 from '@/utils/uuidv4'
import { User } from '@supabase/supabase-js'
import { setSession } from '@/utils/jwt'

interface Account {
  id: string
  user_id: string
  createdAt: string
}

interface AccessToken {
  id: string
  account_id: string
  uid: string
  createdAt: string
  last_used_at: string | null
  active: boolean
  updatedAt: string
}

interface SupabaseAuthContextType {
  user: User | null
  account: Account | null
  accessToken: AccessToken | null
  apiKey: string | null
  loading: boolean
  error: Error | null
  signOut: () => Promise<void>
}

const SupabaseAuthContext = createContext<SupabaseAuthContextType | undefined>(undefined)

export function SupabaseAuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [account, setAccount] = useState<Account | null>(null)
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [accessToken, setAccessToken] = useState<AccessToken | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {        
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchUserData(session!.user)
      }
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      //setUser(session?.user ?? null)
      
      if (session?.user) {
        //await fetchUserData(session.user)
      } else {
        //setAccount(null)
//        setApiKey(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const fetchUserData = async (user: User) => {
    try {
      //setLoading(true)
      setError(null)

      var { data: account, error: accountError } = await supabase
        .from('accounts')
        .select('id')
        .eq('user_id', user.id)
        .single()

      if (!account) {
        // Create an account
        const { data: newAccount, error: newAccountError } = await supabase
          .from('accounts')
          .insert({ 
            user_id: user.id, 
            createdAt: new Date().toISOString() 
          })
          .select()
          .single()

        if (newAccountError) {
          throw newAccountError
        }

        account = newAccount
      }

      if (!account) {
        throw new Error('Error fetching account')
      }

      setAccount(account as Account)

      // Get or create access token
      var { data: tokens, error: tokenError } = await supabase
        .from('access_tokens')
        .select('*')
        .eq('account_id', account.id)
        .order('createdAt', { ascending: false })
        .limit(1)

      if (!tokens || tokens.length === 0) {
        // Create an access token
        const { data: newToken, error: newTokenError } = await supabase
          .from('access_tokens')
          .insert({ 
            account_id: account.id, 
            createdAt: new Date().toISOString(),
            uid: uuidv4(),
            updatedAt: new Date().toISOString(),
            active: true
          })
          .select()
          .single()

        if (newTokenError) {
          throw newTokenError
        }

        tokens = [newToken]
      }

      if (!tokens || tokens.length === 0) {
        throw new Error('Error fetching tokens')
      }

      setSession(tokens[0].uid)
      setApiKey(tokens[0].uid)
      setAccessToken(tokens[0])
    } catch (err) {
      console.log("ERROR", err)
      setError(err as Error)
      console.error('Error fetching user data:', err)
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setAccount(null)
    setApiKey(null)
  }

  return (
    <SupabaseAuthContext.Provider
      value={{
        user,
        account,
        accessToken,
        apiKey,
        loading,
        error,
        signOut
      }}
    >
      {children}
    </SupabaseAuthContext.Provider>
  )
}

export function useSupabaseAuth() {
  const context = useContext(SupabaseAuthContext)
  if (context === undefined) {
    throw new Error('useSupabaseAuth must be used within a SupabaseAuthProvider')
  }
  return context
} 