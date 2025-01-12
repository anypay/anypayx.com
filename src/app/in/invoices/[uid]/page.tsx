'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { CubeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface Invoice {
  uid: string
  amount: number
  currency: string
  chain: string
  coin: string
  status: string
  createdAt: string
  metadata: any
  app: {
    id: number
    name: string
    icon_url: string | null
  }
}

interface Payment {
  id: number
  amount: number
  currency: string
  status: string
  createdAt: string
  txid: string
  address: string
}

interface Event {
  id: number
  type: string
  createdAt: string
  data: any
}

export default function InvoicePage() {
  const params = useParams()
  const [invoice, setInvoice] = useState<Invoice | null>(null)
  const [payment, setPayment] = useState<Payment | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { account } = useSupabaseAuth()

  useEffect(() => {
    const fetchData = async () => {
      if (!account?.id) return
      
      try {
        const supabase = createClient()

        // Fetch invoice with app details
        const { data: invoiceData, error: invoiceError } = await supabase
          .from('invoices')
          .select(`
            *
          `)
          .eq('uid', params.uid)
          .eq('account_id', account.id)
          .single()

        if (invoiceError) throw invoiceError
        setInvoice(invoiceData)

        // Fetch payment
        const { data: paymentData, error: paymentError } = await supabase
          .from('payments')
          .select('*')
          .eq('invoice_uid', params.uid)
          .single()

        if (!paymentError) {
          setPayment(paymentData)
        }

        // Fetch events
        const { data: eventData, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('invoice_uid', params.uid)
          .order('createdAt', { ascending: true })

        if (eventError) throw eventError
        setEvents(eventData || [])

      } catch (err: any) {
        console.error('Error fetching invoice data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [account?.id, params.uid])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111] flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
      </div>
    )
  }

  if (error || !invoice) {
    return (
      <div className="min-h-screen bg-[#111] p-4">
        <div className="text-red-400">Error: {error || 'Invoice not found'}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111] text-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/in/invoices"
            className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-4"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to All Invoices
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#222] border border-gray-800">
              {invoice.app?.icon_url ? (
                <Image
                  src={invoice.app.icon_url}
                  alt={invoice.app.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <CubeIcon className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold">Invoice {invoice.uid}</h1>
              <p className="text-gray-400">
                {invoice.app?.name} • Created {new Date(invoice.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Invoice Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#222] rounded-lg p-6 border border-gray-800"
          >
            <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-gray-400">Amount</dt>
                <dd className="text-xl font-semibold">
                  {invoice.amount} {invoice.currency}
                </dd>
              </div>
              {invoice.status !== 'unpaid' && (
            <div>
                <dt className="text-gray-400">Payment Method</dt>
                <dd>{invoice.coin} on {invoice.chain}</dd>
            </div>
              )}
  
              <div>
                <dt className="text-gray-400">Status</dt>
                <dd>
                  <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                    invoice.status === 'confirmed' 
                      ? 'bg-green-900 text-green-300'
                      : 'bg-purple-900 text-purple-300'
                  }`}>
                    {invoice.status}
                  </span>
                </dd>
              </div>
              {invoice.metadata && (
                <div>
                  <dt className="text-gray-400">Metadata</dt>
                  <dd className="font-mono text-sm bg-[#111] p-3 rounded border border-gray-800 overflow-x-auto">
                    <pre>{JSON.stringify(invoice.metadata, null, 2)}</pre>
                  </dd>
                </div>
              )}
            </dl>
          </motion.div>

          {/* Payment Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#222] rounded-lg p-6 border border-gray-800"
          >
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            {payment ? (
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-400">Amount Received</dt>
                  <dd className="text-xl font-semibold">
                    {payment.amount} {payment.currency}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-400">Status</dt>
                  <dd>
                    <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                      payment.status === 'confirmed' 
                        ? 'bg-green-900 text-green-300'
                        : 'bg-purple-900 text-purple-300'
                    }`}>
                      {payment.status}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-400">Transaction ID</dt>
                  <dd className="font-mono text-sm break-all">{payment.txid}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Receiving Address</dt>
                  <dd className="font-mono text-sm break-all">{payment.address}</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Date</dt>
                  <dd>{new Date(payment.createdAt).toLocaleString()}</dd>
                </div>
              </dl>
            ) : (
              <p className="text-gray-400">No payment received yet</p>
            )}
          </motion.div>
        </div>

        {/* Event Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-[#222] rounded-lg p-6 border border-gray-800"
        >
          <h2 className="text-xl font-semibold mb-4">Event Log</h2>
          {events.length > 0 ? (
            <div className="space-y-4">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="bg-[#111] p-4 rounded border border-gray-800"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-2 py-1 rounded-full text-sm bg-[#333] text-gray-300">
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(event.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <pre className="font-mono text-sm overflow-x-auto">
                    {JSON.stringify(event.data, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No events recorded</p>
          )}
        </motion.div>
      </div>
    </div>
  )
} 