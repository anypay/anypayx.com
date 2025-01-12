'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon, TrashIcon, ArrowRightIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import Image from 'next/image'

interface App {
  id: number
  name: string
  public_key: string
  private_key: string
  webhook_url: string
  icon_url: string
  description: string
  access_tokens: { uid: string }[]
}

interface Invoice {
  uid: string
  quote_amount: number
  currency: string
  chain: string
  coin: string
  status: 'paid' | 'confirmed'
  created_at: string
}

const COINS: { [key: string]: { icon: string; name: string } } = {
  'ETH': {
    icon: '/icons/coins/eth.svg',
    name: 'Ethereum'
  },
  'USDC': {
    icon: '/icons/coins/usdc.svg',
    name: 'USD Coin'
  },
}

export default function AppDetailPage() {
  const params = useParams()
  const id = params.id
  const [app, setApp] = useState<App | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [showApiSecret, setShowApiSecret] = useState(false)
  const { account } = useSupabaseAuth()
  const [recentPayments, setRecentPayments] = useState<Invoice[]>([])
  const [paymentsLoading, setPaymentsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id || !account?.id) return

      try {
        const supabase = createClient()
        
        // Fetch app data
        const { data: appData, error: appError } = await supabase
          .from('Apps')
          .select('*')
          .eq('uid', params.id)
          .single()

        if (appError) throw appError
        setApp(appData)

        // Fetch recent payments
        const { data: paymentsData, error: paymentsError } = await supabase
          .from('invoices')
          .select('*')
          .eq('app_id', appData.id)
          .in('status', ['paid', 'confirmed'])
          .order('createdAt', { ascending: false })
          .limit(5)

        if (paymentsError) throw paymentsError
        setRecentPayments(paymentsData || [])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
        setPaymentsLoading(false)
      }
    }

    fetchData()
  }, [params.id, account?.id])

  useEffect(() => {
    if (!app) return

    const fetchOrCreateAccessToken = async () => {
      try {
        const supabase = createClient()
        
        // First try to fetch existing token
        const { data: tokenData, error: tokenError } = await supabase
          .from('access_tokens')
          .select('*')
          .eq('app_id', app.id)
          .single()

          console.log({tokenData, tokenError})

        
        if (tokenData) {
          setApiKey(tokenData.uid)
          return
        }
                /*


        // If no token exists, create one
        const { data: newToken, error: createError } = await supabase
          .from('access_tokens')
          .insert([
            { app_id: app.id, uid: crypto.randomUUID() }
          ])
          .select()
          .single()

        if (createError) throw createError
        setApiKey(newToken.uid)
        */
        
      } catch (err: any) {
        console.error('Error fetching/creating access token:', err)
        setError(err.message)
      }
    }

    fetchOrCreateAccessToken()
  }, [app])

  const maskApiSecret = (secret: string) => {
    if (!secret) return ''
    if (showApiSecret) return secret
    return `${'x'.repeat(secret.length - 4)}${secret.slice(-4)}`
  }

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-[#000]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
    </div>
  )
  
  if (error) return (
    <div className="min-h-screen bg-gray-900 text-red-400 p-8">
      <p>{error}</p>
    </div>
  )
  
  if (!app) return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <p>App not found</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#111] text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/in/apps" 
            className="text-gray-300 hover:text-gray-200 mb-4 inline-block"
          >
            ← Back to Apps
          </Link>
          <div className="flex items-center space-x-4">
            {app.icon_url ? (
              <img src={app.icon_url} alt={app.name} className="w-16 h-16 rounded-full" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-[#222] flex items-center justify-center">
                <span className="text-2xl font-bold">{app.name[0]}</span>
              </div>
            )}
            <h1 className="text-4xl font-bold text-gray-300">{app.name}</h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#222] rounded-lg p-6 space-y-4 border border-gray-800"
        >

          
          {apiKey && (
            <div>
              <label className="text-gray-400 flex items-center justify-between">
                <span>API Key Secret</span>
                <button
                  onClick={() => setShowApiSecret(!showApiSecret)}
                  className="text-gray-300 hover:text-gray-200 flex items-center space-x-1"
                >
                  {showApiSecret ? (
                    <><EyeSlashIcon className="w-4 h-4" /> <span>Hide</span></>
                  ) : (
                    <><EyeIcon className="w-4 h-4" /> <span>Show</span></>
                  )}
                </button>
              </label>
              <p className="font-mono bg-[#111] p-2 rounded flex items-center justify-between border border-gray-800">
                <span>{maskApiSecret(apiKey)}</span>
              </p>
            </div>
          )}
          
          <div>
            <label className="text-gray-400">Webhook URL</label>
            <p className="font-mono bg-[#111] p-2 rounded">{app.webhook_url}</p>
          </div>
          
          <div>
            <label className="text-gray-400">Description</label>
            <p className="bg-[#111] p-2 rounded">{app.description}</p>
          </div>
        </motion.div>

        <div className="mt-8 space-y-4">
          <Link 
            href={`/in/apps/${params.id}/edit`}
            className="bg-[#222] hover:bg-[#333] transition-colors text-gray-300 px-6 py-3 rounded-lg inline-block mr-4"
          >
            Edit App
          </Link>
          
          <Link
            href={`/in/apps/${params.id}/delete`}
            className="bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2"
          >
            <TrashIcon className="w-5 h-5" />
            <span>Delete App</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-[#222] rounded-lg p-6 border border-gray-800"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-300">Recent Payments</h2>
            <Link
              href={`/in/apps/${params.id}/payments`}
              className="text-gray-300 hover:text-gray-200 flex items-center space-x-2"
            >
              <span>View all</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {paymentsLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500" />
            </div>
          ) : recentPayments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="flex justify-center">
                <PlusCircleIcon className="w-16 h-16 text-gray-600" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">No payments yet</p>
                <p className="text-sm text-gray-500">
                  To create your first payment, integrate the{' '}
                  <code className="bg-[#111] px-2 py-1 rounded text-gray-300">
                    createInvoice   
                  </code>{' '}
                  endpoint in your application.
                </p>
                <a 
                  href="https://docs.example.com/payments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-200 inline-flex items-center space-x-1"
                >
                  <span>View documentation</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {recentPayments.map((payment, index) => (
                <motion.div
                  key={payment.uid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/in/apps/${params.id}/payments/${payment.uid}`}
                    className="block bg-[#111] rounded-lg p-4 hover:bg-gray-900 transition-colors border border-gray-800"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {COINS[payment.coin] && (
                          <div className="w-8 h-8 relative">
                            <Image
                              src={COINS[payment.coin].icon}
                              alt={payment.coin}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold">
                            {payment.quote_amount} {payment.currency}
                          </p>
                          <p className="text-sm text-gray-400">
                            {payment.coin} on {payment.chain}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          payment.status === 'confirmed' 
                            ? 'bg-green-900 text-green-300'
                            : 'bg-blue-900 text-blue-300'
                        }`}>
                          {payment.status}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {new Date(payment.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
} 