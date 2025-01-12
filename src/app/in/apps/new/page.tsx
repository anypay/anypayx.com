'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import { motion } from 'framer-motion'

export default function NewAppPage() {
  const router = useRouter()
  const { account } = useSupabaseAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    webhook_url: '',
    icon_url: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // prevent apps from staring with "@"
    if (formData.name.startsWith("@")) {
      setError("App name cannot start with '@'")
      setLoading(false)
      return
    }

    // Set default icon URL for @wallet-bot if no icon provided
    let finalIconUrl = formData.icon_url;
    if (formData.name === "@wallet-bot" && !formData.icon_url) {
      finalIconUrl = "https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/apps/walletbot_banner.png";
    }

    try {
      const supabase = createClient()
      
      // Generate keys
      const publicKey = crypto.randomUUID()
      const privateKey = crypto.randomUUID()

      const { data, error } = await supabase
        .from('Apps')
        .insert([{
          ...formData,
          account_id: account?.id,
          public_key: publicKey,
          private_key: privateKey
        }])
        .select()
        .single()

      if (error) throw error

      router.push(`/in/apps/${data.uid}`)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
            href="/in/apps" 
            className="text-gray-300 hover:text-gray-200 mb-4 inline-block"
          >
            ← Back to Apps
          </Link>
          <h1 className="text-4xl font-bold text-gray-300">Create New App</h1>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#222] rounded-lg p-6 max-w-2xl border border-gray-800"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-400 mb-2">App Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Webhook URL</label>
            <input
              type="url"
              name="webhook_url"
              value={formData.webhook_url}
              onChange={handleChange}
              placeholder="https://"
              className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Icon URL</label>
            <input
              type="url"
              name="icon_url"
              value={formData.icon_url}
              onChange={handleChange}
              placeholder="https://"
              className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-end space-x-4 mt-4">
            <Link
              href="/in/apps"
              className="px-6 py-2 rounded-lg bg-[#111] hover:bg-[#222] transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded-lg bg-[#222] hover:bg-[#333] transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Creating...
                </span>
              ) : (
                'Create App'
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
} 