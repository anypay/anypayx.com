'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import { getServerConfig } from '@/utils/server-config'
import Image from 'next/image'
import { 
  CubeIcon, 
  XMarkIcon, 
  EyeIcon, 
  EyeSlashIcon,
  FunnelIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

interface Invoice {
  uid: string
  amount: number
  currency: string
  status: string
  createdAt: string
  app: {
    id: number
    name: string
    icon_url: string | null
  }
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showCancelled, setShowCancelled] = useState(false)
  const [cancellingId, setCancellingId] = useState<string | null>(null)
  const { account, accessToken } = useSupabaseAuth()

  const fetchInvoices = async () => {
    if (!account?.id) return

    try {
      const supabase = createClient()
      
      let query = supabase
        .from('invoices')
        .select(`
          *
        `)
        .eq('account_id', account.id)
        .order('createdAt', { ascending: false })

      if (!showCancelled) {
        query = query.neq('status', 'cancelled')
      }

      const { data, error: fetchError } = await query

      if (fetchError) throw fetchError
      setInvoices(data || [])
    } catch (err: any) {
      console.error('Error fetching invoices:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInvoices()
  }, [account?.id, showCancelled])

  const handleCancelInvoice = async (e: React.MouseEvent, uid: string) => {
    e.preventDefault() // Prevent navigation
    if (!confirm('Are you sure you want to cancel this invoice?')) return

    try {
      setCancellingId(uid)
      const { apiUrl } = getServerConfig()
      const basicAuth = btoa(`${accessToken?.uid}:`)
      
      const response = await fetch(`${apiUrl}/api/v1/invoices/${uid}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to cancel invoice')
      }

      await fetchInvoices()
    } catch (err: any) {
      console.error('Error cancelling invoice:', err)
      setError(err.message)
    } finally {
      setCancellingId(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
      case 'confirmed':
        return 'bg-green-900 text-green-300'
      case 'cancelled':
        return 'bg-gray-800 text-gray-400'
      case 'unpaid':
      case 'pending':
        return 'bg-purple-900 text-purple-300'
      default:
        return 'bg-gray-800 text-gray-400'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111] flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111] text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Invoices</h1>
            <p className="text-gray-400 mt-2">
              Manage all your payment requests
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCancelled(!showCancelled)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222] hover:bg-[#333] text-gray-300 border border-gray-800"
            >
              {showCancelled ? (
                <>
                  <EyeSlashIcon className="w-5 h-5" />
                  Hide Cancelled
                </>
              ) : (
                <>
                  <EyeIcon className="w-5 h-5" />
                  Show Cancelled
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded bg-rose-900/20 border border-rose-900/50 text-rose-300">
            {error}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {invoices.length === 0 ? (
            <div className="bg-[#222] rounded-lg p-6 text-center text-gray-400 border border-gray-800">
              No invoices found
            </div>
          ) : (
            <div className="grid gap-4">
              {invoices.map((invoice) => (
                <Link
                  key={invoice.uid}
                  href={`/in/invoices/${invoice.uid}`}
                  className="block bg-[#222] rounded-lg p-4 hover:bg-[#333] transition-colors border border-gray-800 relative group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#111] border border-gray-800">
                        {invoice.app?.icon_url ? (
                          <Image
                            src={invoice.app?.icon_url}
                            alt={invoice.app?.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <CubeIcon className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="font-semibold">
                          {invoice.amount} {invoice.currency}
                        </div>
                        <div className="text-sm text-gray-400">
                          {invoice.app?.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {new Date(invoice.createdAt).toLocaleDateString()}
                      </span>
                      
                      {invoice.status !== 'cancelled' && invoice.status !== 'confirmed' && (
                        <button
                          onClick={(e) => handleCancelInvoice(e, invoice.uid)}
                          disabled={cancellingId === invoice.uid}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-[#444] rounded"
                        >
                          {cancellingId === invoice.uid ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                          ) : (
                            <XMarkIcon className="w-5 h-5 text-gray-400 hover:text-gray-300" />
                          )}
                        </button>
                      )}
                      
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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

