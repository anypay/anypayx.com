'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import { motion } from 'framer-motion'
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function DeleteAppPage() {
  const router = useRouter()
  const params = useParams()
  const { account } = useSupabaseAuth()
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [app, setApp] = useState<{ name: string } | null>(null)
  const [confirmation, setConfirmation] = useState('')

  useEffect(() => {
    const fetchApp = async () => {
      if (!params.id || !account?.id) return

      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('Apps')
          .select('name')
          .eq('account_id', account.id)
          .eq('uid', params.id)
          .single()

        if (error) throw error
        setApp(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApp()
  }, [params.id, account?.id])

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!app || confirmation !== app.name) return

    setDeleting(true)
    setError(null)

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('Apps')
        .delete()
        .eq('uid', params.id)

      if (error) throw error

      router.push('/in/apps')
    } catch (err: any) {
      setError(err.message)
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#111]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500" />
      </div>
    )
  }

  if (!app) {
    return (
      <div className="min-h-screen bg-[#111] text-gray-100 p-8">
        <p>App not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111] text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href={`/in/apps/${params.id}`}
            className="text-gray-400 hover:text-gray-300 mb-4 inline-block"
          >
            ← Back to App
          </Link>
          <h1 className="text-4xl font-bold text-red-400">Delete App</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#222] rounded-lg p-6 max-w-2xl border border-gray-800"
        >
          <div className="flex items-center space-x-3 text-red-400 mb-6">
            <ExclamationTriangleIcon className="w-6 h-6" />
            <h2 className="text-xl font-semibold">This action cannot be undone</h2>
          </div>

          <p className="text-gray-300 mb-6">
            This will permanently delete the app <strong>{app.name}</strong> and all of its associated data.
            Please type <strong>{app.name}</strong> to confirm.
          </p>

          <form onSubmit={handleDelete} className="space-y-6">
            <div>
              <input
                type="text"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                className="w-full bg-gray-700 rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Type app name to confirm"
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-end space-x-4">
              <Link
                href={`/in/apps/${params.id}`}
                className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={deleting || confirmation !== app.name}
                className={`px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors flex items-center space-x-2 ${
                  (deleting || confirmation !== app.name) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {deleting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <TrashIcon className="w-5 h-5" />
                    <span>Delete App</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 