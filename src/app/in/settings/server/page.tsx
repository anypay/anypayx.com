'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ArrowPathIcon, PencilIcon } from '@heroicons/react/24/outline'

const validationSchema = Yup.object({
  apiUrl: Yup.string()
    .url('Must be a valid URL')
    .required('API URL is required'),
  wsUrl: Yup.string()
    .url('Must be a valid URL')
    .required('WebSocket URL is required')
})

interface ServerConfig {
  apiUrl: string
  wsUrl: string
}

const LOCAL_STORAGE_KEY = 'server_config'

export default function ServerSettingsPage() {
  const [defaultConfig, setDefaultConfig] = useState<ServerConfig>({
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.anypayx.com',
    wsUrl: process.env.NEXT_PUBLIC_WS_URL || 'wss://ws.anypayx.com'
  })
  const [restored, setRestored] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Try to load saved config from localStorage
    const savedConfig = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig)
        setDefaultConfig(parsed)
      } catch (err) {
        console.error('Failed to parse saved server config:', err)
      }
    }
    setRestored(true)
  }, [])

  const handleSubmit = async (values: ServerConfig, { setStatus }: any) => {
    try {
      // Save to localStorage
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values))
      setStatus({ success: 'Server configuration saved successfully!' })

      // Optional: Trigger a page reload to apply new settings
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } catch (err: any) {
      setStatus({ error: 'Failed to save server configuration' })
    }
  }

  const handleReset = () => {
    // Clear localStorage and reset to env defaults
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    setDefaultConfig({
      apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.anypayx.com',
      wsUrl: process.env.NEXT_PUBLIC_WS_URL || 'wss://ws.anypayx.com'
    })
  }

  if (!restored) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#111]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#111]">

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-300">Server Settings</h1>
            <p className="text-gray-400 mt-2">
              Configure API and WebSocket server URLs. Changes will take effect after page reload.
            </p>
          </motion.div>

          {!isEditing ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111] rounded-lg p-6 space-y-6 max-w-2xl border border-gray-800"
            >
              <div>
                <label className="block text-gray-400 mb-2">API Server URL</label>
                <div className="font-mono bg-[#111] p-2 rounded border border-gray-800 text-gray-300">
                  {defaultConfig.apiUrl}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">WebSocket Server URL</label>
                <div className="font-mono bg-[#111] p-2 rounded border border-gray-800 text-gray-300">
                  {defaultConfig.wsUrl}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-gray-400 hover:bg-gray-300 transition-colors"
                >
                  <PencilIcon className="w-4 h-4" />
                  <span>Edit Settings</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <Formik
              initialValues={defaultConfig}
              validationSchema={validationSchema}
              onSubmit={async (values, { setStatus }) => {
                await handleSubmit(values, { setStatus })
                setIsEditing(false)
              }}
              enableReinitialize
            >
              {({ isSubmitting, status }) => (
                <Form>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#111] rounded-lg p-6 space-y-6 max-w-2xl border border-gray-800"
                  >
                    <div>
                      <label htmlFor="apiUrl" className="block text-gray-400 mb-2">API Server URL</label>
                      <Field
                        type="url"
                        id="apiUrl"
                        name="apiUrl"
                        placeholder="https://api.example.com"
                        className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-800"
                      />
                      <ErrorMessage name="apiUrl" component="div" className="text-red-400 text-sm mt-1" />
                    </div>

                    <div>
                      <label htmlFor="wsUrl" className="block text-gray-400 mb-2">WebSocket Server URL</label>
                      <Field
                        type="url"
                        id="wsUrl"
                        name="wsUrl"
                        placeholder="wss://ws.example.com"
                        className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 border border-gray-800"
                      />
                      <ErrorMessage name="wsUrl" component="div" className="text-red-400 text-sm mt-1" />
                    </div>

                    {status?.success && (
                      <div className="text-green-400 text-sm">
                        {status.success}
                      </div>
                    )}

                    {status?.error && (
                      <div className="text-red-400 text-sm">
                        {status.error}
                      </div>
                    )}

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-[#111] hover:bg-gray-900 transition-colors border border-gray-800 text-gray-300"
                      >
                        <ArrowPathIcon className="w-4 h-4" />
                        <span>Reset to Defaults</span>
                      </button>

                      <div className="space-x-4">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-6 py-2 rounded-lg bg-[#111] hover:bg-gray-900 transition-colors border border-gray-800 text-gray-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-6 py-2 rounded-lg bg-gray-400 hover:bg-gray-300 transition-colors ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Saving...
                            </span>
                          ) : (
                            'Save Changes'
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </main>

    </div>
  )
} 