'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import { getServerConfig } from '@/utils/server-config'

interface RequestPaymentFormData {
  amount: string
  currency: string
  app_id?: string
}

export default function RequestPaymentButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [apps, setApps] = useState<any[]>([])
  const { account, apiKey } = useSupabaseAuth()
  const [formData, setFormData] = useState<RequestPaymentFormData>({
    amount: '',
    currency: 'USD',
    //app_id: ''
  })

  const fetchApps = async () => {
    if (!account?.id) return
    const supabase = createClient()
    const { data } = await supabase
      .from('Apps')
      .select('id, name')
      .eq('account_id', account.id)
    if (data) setApps(data)
  }

  const handleOpen = async () => {
    await fetchApps()
    setIsOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { apiUrl } = getServerConfig()
      
      // Create Basic auth header
      const basicAuth = btoa(`${apiKey}:`)

      const response = await fetch(`${apiUrl}/api/v1/invoices`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: parseFloat(formData.amount),
          currency: formData.currency,
          //app_id: formData.app_id
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to create payment')
      }

      const data = await response.json()

      // Redirect to the new payment page
      window.open(`https://checkout.anypayx.com/i/${data.uid}`, '_blank')
    } catch (err: any) {
      console.error('Error creating payment:', err)
      setError(err.message || 'Failed to create payment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center px-4 py-2 rounded-lg bg-[#222] hover:bg-[#333] text-gray-100 border border-gray-800 transition-colors"
      >
        <PlusIcon className="w-5 h-5 mr-2" />
        Request Payment
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#222] rounded-lg shadow-xl max-w-md w-full border border-gray-800"
              >
                <Dialog.Panel>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <Dialog.Title className="text-xl font-semibold text-gray-100">
                        Request Payment
                      </Dialog.Title>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-gray-300"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>

                    {error && (
                      <div className="mb-4 p-3 rounded bg-rose-900/20 border border-rose-900/50 text-rose-300">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-400 mb-2">
                          Amount
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          required
                          value={formData.amount}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            amount: e.target.value
                          }))}
                          className="w-full bg-[#111] rounded p-2 text-gray-100 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-2">
                          Currency
                        </label>
                        <select
                          required
                          value={formData.currency}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            currency: e.target.value
                          }))}
                          className="w-full bg-[#111] rounded p-2 text-gray-100 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-400 mb-2">
                          App
                        </label>
                        <select
                          required
                          value={formData.app_id}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            app_id: e.target.value
                          }))}
                          className="w-full bg-[#111] rounded p-2 text-gray-100 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        >
                          <option value="">Select an app</option>
                          {apps.map(app => (
                            <option key={app.id} value={app.id}>
                              {app.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-end gap-4 mt-6">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 rounded-lg bg-[#111] text-gray-300 hover:bg-[#333] border border-gray-800"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="px-4 py-2 rounded-lg bg-[#333] text-gray-100 hover:bg-[#444] border border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? 'Creating...' : 'Create Payment'}
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
} 