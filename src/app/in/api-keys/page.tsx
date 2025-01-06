'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'
import { createClient } from '@/utils/supabase/client'
import uuidv4 from '@/utils/uuidv4'

interface AccessToken {
  id: string
  uid: string
  createdAt: string
  last_used_at: string | null
  active: boolean
}

export default function ApiKeys() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [apiKey, setApiKey] = useState<AccessToken | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function getApiKey() {
      try {
        // Get the current user
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        
        if (userError || !user) {
          router.push('/auth/login?redirect=/in/api-keys')
          return
        }

        // Get the account for this user
        var { data: account, error: accountError } = await supabase
          .from('accounts')
          .select('id')
          .eq('user_id', user.id)
          .single()

          console.log("accounts", account)

        /*if (accountError || !account) {
          console.error('Error fetching account:', accountError)
          return
        }*/

        if (!account) {
            // create an account
            const { data: newAccount, error: newAccountError } = await supabase
                .from('accounts')            
                .insert({ user_id: user.id, createdAt: new Date().toISOString() })
                .select()
                .single()

            if (newAccountError) {
                console.error('Error creating account:', newAccountError)
                return
            }

            account = newAccount
        }   

        if (!account) {
            console.error('Error fetching account:', accountError)

            throw new Error('Error fetching account')
        }

        // Get the access token for this account
        var { data: tokens, error: tokenError } = await supabase
          .from('access_tokens')
          .select('*')
          .eq('account_id', account!.id)
          //.eq('active', true)
          .order('createdAt', { ascending: false })
          .limit(1)          

        if (tokens?.length == 0) {
            // create an access token
            const { data: newToken, error: newTokenError } = await supabase
                .from('access_tokens')
                .insert({ account_id: account!.id, createdAt: new Date().toISOString(), uid: uuidv4(), updatedAt: new Date().toISOString() })
                .select()
                .single()

            if (newTokenError) {
                console.error('Error creating access token:', newTokenError)
                return
            }

            tokens = [newToken]
        }

        if (tokens?.length == 0) {
            console.error('Error fetching tokens:', tokenError)
            throw new Error('Error fetching tokens')
        }

        if (tokenError) {
          console.error('Error fetching token:', tokenError)
          return
        }

        console.log("tokens", tokens)
        console.log("SET API KEY", tokens![0].uid)

        setApiKey(tokens![0])
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    getApiKey()
  }, [])

  const copyToClipboard = async () => {
    if (apiKey?.uid) {
      await navigator.clipboard.writeText(apiKey.uid)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="bg-[#111] min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="bg-[#111] min-h-screen text-white">

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">API Keys</h1>
          
          {apiKey ? (
            <div className="bg-black/30 rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Your API Key</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Use this key to authenticate your API requests
                </p>
                <div className="flex items-center gap-4">
                  <code className="flex-1 p-3 bg-black/50 rounded font-mono text-sm break-all">
                    {apiKey.uid}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <h3 className="text-lg font-semibold mb-4">Key Details</h3>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-gray-400">Created</dt>
                    <dd>{new Date(apiKey.createdAt).toLocaleDateString()}</dd>
                  </div>
                  {apiKey.last_used_at && (
                    <div>
                      <dt className="text-gray-400">Last Used</dt>
                      <dd>{new Date(apiKey.last_used_at).toLocaleDateString()}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-400">Status</dt>
                    <dd>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        apiKey.active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {apiKey.active ? 'Active' : 'Inactive'}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          ) : (
            <div className="bg-black/30 rounded-lg p-6 text-center">
              <p className="text-gray-400">No API key found for your account.</p>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Using Your API Key</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                Your API key should be included in the header of all API requests:
              </p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`Authorization: Bearer ${apiKey?.uid || 'your-api-key'}`}
                </code>
              </pre>
              <p className="mt-4">
                For WebSocket connections, include your API key in the initial authentication message:
              </p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code>
{`{
  "type": "auth",
  "apiKey": "${apiKey?.uid || 'your-api-key'}"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 