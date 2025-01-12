'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import Image from 'next/image'
import { CubeIcon } from '@heroicons/react/24/outline'
import RequestPaymentButton from '@/components/RequestPaymentButton'

interface Invoice {
  uid: string
  amount: number
  currency: string
  chain: string
  coin: string
  status: 'paid' | 'confirmed'
  createdAt: string
  app: {
    id: number
    name: string
    icon_url: string | null
  }
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
  // ... add other coins as needed
}

export default function AllPaymentsPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { account } = useSupabaseAuth()

  useEffect(() => {
    const fetchInvoices = async () => {
      if (!account?.id) return

      try {
        const supabase = createClient()
        
        const { data, error } = await supabase
          .from('invoices')
          .select('*')
          .eq('account_id', account.id)
          .in('status', ['paid', 'confirming', 'confirmed'])
          .order('createdAt', { ascending: false })

        if (error) throw error

        setInvoices(data || [])
      } catch (err: any) {
        console.error('Error fetching invoices:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchInvoices()
  }, [account?.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111] flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#111] p-4">
        <div className="text-red-400">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111] text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold">All Payments</h1>
            <p className="text-gray-400 mt-2">
              View all payments across your apps
            </p>
          </div>
          <RequestPaymentButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {invoices.length === 0 ? (
            <div className="bg-[#222] rounded-lg p-6 text-center text-gray-400 border border-gray-800">
              No payments found
            </div>
          ) : (
            <div className="grid gap-4">
              {invoices.map((invoice) => (
                <Link
                  key={invoice.uid}
                  href={`/in/invoices/${invoice.uid}`}
                  className="block bg-[#222] rounded-lg p-4 hover:bg-[#333] transition-colors border border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* App Icon */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#111] border border-gray-800">
                        {invoice.app?.icon_url ? (
                          <Image
                            src={invoice.app.icon_url}
                            alt={invoice.app.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#111]">
                            <CubeIcon className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                      </div>

                      {/* Payment Details */}
                      <div className="flex items-center space-x-4">
                        {COINS[invoice.coin] && (
                          <div className="relative w-6 h-6">
                            <Image
                              src={COINS[invoice.coin].icon}
                              alt={invoice.coin}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold">
                            {invoice.amount} {invoice.currency}
                          </p>
                          {/* <p className="text-sm text-gray-400">
                            {invoice.coin} on {invoice.chain}
                          </p> */}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      {/* App Name */}
                      <span className="text-gray-400">
                        {invoice.app?.name}
                      </span>

                      {/* Status and Date */}
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          invoice.status === 'confirmed' 
                            ? 'bg-green-900 text-green-300'
                            : 'bg-purple-900 text-purple-300'
                        }`}>
                          {invoice.status}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {new Date(invoice.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
} 