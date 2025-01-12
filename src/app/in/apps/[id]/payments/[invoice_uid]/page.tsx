'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { motion } from 'framer-motion'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import Image from 'next/image'
import {  ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { ExternalLinkIcon } from 'lucide-react'

interface Invoice {
  uid: string
  quote_amount: number
  currency: string
  chain: string
  coin: string
  status: 'paid' | 'confirmed'
  created_at: string
  confirmed_at: string | null
  tx_hash: string | null
  payer_address: string
  payment_amount: string
  app_id: string
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
  // Add more coins as needed
}

const CHAIN_EXPLORERS: { [key: string]: string } = {
  'ethereum': 'https://etherscan.io',
  'polygon': 'https://polygonscan.com',
  // Add more chains as needed
}

export default function PaymentDetailPage() {
  const params = useParams()
  const { account } = useSupabaseAuth()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [invoice, setInvoice] = useState<Invoice | null>(null)
  const [app, setApp] = useState<{ name: string } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id || !params.invoice_uid || !account?.id) return

      try {
        const supabase = createClient()
        
        // Fetch invoice details
        const { data: invoiceData, error: invoiceError } = await supabase
          .from('invoices')
          .select('*')
          .eq('uid', params.invoice_uid)
          .eq('app_id', params.id)
          .single()

        if (invoiceError) throw invoiceError
        setInvoice(invoiceData)

        // Fetch app details
        const { data: appData, error: appError } = await supabase
          .from('Apps')
          .select('name')
          .eq('id', params.id)
          .single()

        if (appError) throw appError
        setApp(appData)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.id, params.invoice_uid, account?.id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    )
  }

  if (error || !invoice) {
    return (
      <div className="min-h-screen bg-gray-900 text-red-400 p-8">
        <p>{error || 'Invoice not found'}</p>
      </div>
    )
  }

  const explorerUrl = CHAIN_EXPLORERS[invoice.chain.toLowerCase()]
  const txUrl = explorerUrl ? `${explorerUrl}/tx/${invoice.tx_hash}` : null
  const addressUrl = explorerUrl ? `${explorerUrl}/address/${invoice.payer_address}` : null

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href={`/in/apps/${params.id}/payments`}
            className="text-blue-400 hover:text-blue-300 mb-4 inline-block"
          >
            ← Back to Payments
          </Link>
          <h1 className="text-4xl font-bold text-blue-400">
            Payment Details
          </h1>
          <p className="text-gray-400 mt-2">{app?.name}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-6 space-y-6"
        >
          {/* Payment Status */}
          <div className="flex items-center space-x-2">
            {invoice.status === 'confirmed' ? (
              <CheckCircleIcon className="w-6 h-6 text-green-400" />
            ) : (
              <ClockIcon className="w-6 h-6 text-blue-400" />
            )}
            <span className={`text-lg font-semibold ${
              invoice.status === 'confirmed' ? 'text-green-400' : 'text-blue-400'
            }`}>
              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
            </span>
          </div>

          {/* Payment Amount */}
          <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
            {COINS[invoice.coin] && (
              <div className="w-12 h-12 relative">
                <Image
                  src={COINS[invoice.coin].icon}
                  alt={invoice.coin}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <p className="text-2xl font-bold">
                {invoice.quote_amount} {invoice.currency}
              </p>
              <p className="text-gray-400">
                Paid {invoice.payment_amount} {invoice.coin} on {invoice.chain}
              </p>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-300">Transaction Details</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between bg-gray-700 p-3 rounded">
                <span className="text-gray-400">Transaction Hash</span>
                {txUrl ? (
                  <a 
                    href={txUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                  >
                    <span className="font-mono">{invoice.tx_hash?.slice(0, 6)}...{invoice.tx_hash?.slice(-4)}</span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="font-mono">{invoice.tx_hash}</span>
                )}
              </div>

              <div className="flex justify-between bg-gray-700 p-3 rounded">
                <span className="text-gray-400">Payer Address</span>
                {addressUrl ? (
                  <a 
                    href={addressUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                  >
                    <span className="font-mono">{invoice.payer_address.slice(0, 6)}...{invoice.payer_address.slice(-4)}</span>
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="font-mono">{invoice.payer_address}</span>
                )}
              </div>

              <div className="flex justify-between bg-gray-700 p-3 rounded">
                <span className="text-gray-400">Created At</span>
                <span>{new Date(invoice.created_at).toLocaleString()}</span>
              </div>

              {invoice.confirmed_at && (
                <div className="flex justify-between bg-gray-700 p-3 rounded">
                  <span className="text-gray-400">Confirmed At</span>
                  <span>{new Date(invoice.confirmed_at).toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 