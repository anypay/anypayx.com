'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { motion } from 'framer-motion'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import Image from 'next/image'

interface Invoice {
  id: string
  uid: string
  quote_amount: number
  currency: string
  chain: string
  coin: string
  status: 'paid' | 'confirmed'
  created_at: string
}

interface CoinInfo {
  [key: string]: {
    icon: string
    name: string
  }
}

const COINS: CoinInfo = {
  'ETH': {
    icon: '/icons/coins/eth.svg',
    name: 'Ethereum'
  },
  'USDC': {
    icon: '/icons/coins/usdc.svg',
    name: 'USD Coin'
  },
  // Add more coins as needed
}

export default function PaymentsPage() {
  const params = useParams()
  const { account } = useSupabaseAuth()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [app, setApp] = useState<{ name: string } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id || !account?.id) return

      try {
        const supabase = createClient()
        
        // Fetch app details
        const { data: appData, error: appError } = await supabase
          .from('Apps')
          .select('name, id')
          .eq('account_id', account.id)
          .eq('uid', params.id)
          .single()

        if (appError) throw appError
        setApp(appData)

        // Fetch invoices
        const { data: invoicesData, error: invoicesError } = await supabase
          .from('invoices')
          .select('*')
          .eq('app_id', appData.id)
          .in('status', ['paid', 'confirmed'])
          .order('createdAt', { ascending: false })

        if (invoicesError) throw invoicesError
        setInvoices(invoicesData)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.id, account?.id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-red-400 p-8">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href={`/in/apps/${params.id}`}
            className="text-blue-400 hover:text-blue-300 mb-4 inline-block"
          >
            ← Back to App
          </Link>
          <h1 className="text-4xl font-bold text-blue-400">
            {app?.name} - Payments
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {invoices.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-6 text-center text-gray-400">
              No payments found
            </div>
          ) : (
            <div className="grid gap-4">
              {invoices.map((invoice, index) => (
                <motion.div
                  key={invoice.uid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/in/apps/${params.id}/payments/${invoice.uid}`}
                    className="block bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {COINS[invoice.coin] && (
                          <div className="w-8 h-8 relative">
                            <Image
                              src={COINS[invoice.coin].icon}
                              alt={invoice.coin}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-lg font-semibold">
                            {invoice.quote_amount} {invoice.currency}
                          </p>
                          <p className="text-sm text-gray-400">
                            {invoice.coin} on {invoice.chain}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          invoice.status === 'confirmed' 
                            ? 'bg-green-900 text-green-300'
                            : 'bg-blue-900 text-blue-300'
                        }`}>
                          {invoice.status}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {new Date(invoice.created_at).toLocaleDateString()}
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