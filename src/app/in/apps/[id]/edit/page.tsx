'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

interface AppFormValues {
  name: string
  description: string
  webhook_url: string
  icon_url: string
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('App name is required')
    .min(2, 'App name must be at least 2 characters')
    .max(50, 'App name must be less than 50 characters'),
  description: Yup.string()
    .max(500, 'Description must be less than 500 characters'),
  webhook_url: Yup.string()
    .url('Must be a valid URL')
    .nullable(),
  icon_url: Yup.string()
    .url('Must be a valid URL')
    .nullable()
})

export default function EditAppPage() {
  const router = useRouter()
  const params = useParams()
  const { account } = useSupabaseAuth()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [initialValues, setInitialValues] = useState<AppFormValues>({
    name: '',
    description: '',
    webhook_url: '',
    icon_url: ''
  })

  useEffect(() => {
    const fetchApp = async () => {
      if (!params.id || !account?.id) return

      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('Apps')
          .select('*')
          .eq('account_id', account.id)
          .eq('uid', params.id)
          .single()

        if (error) throw error

        setInitialValues({
          name: data.name,
          description: data.description || '',
          webhook_url: data.webhook_url || '',
          icon_url: data.icon_url || ''
        })
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApp()
  }, [params.id, account?.id])

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-[#111]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
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
            href={`/in/apps/${params.id}`}
            className="text-gray-400 hover:text-gray-300 mb-4 inline-block"
          >
            ← Back to App
          </Link>
          <h1 className="text-4xl font-bold text-gray-400">Edit App</h1>
        </motion.div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={async (values, { setSubmitting, setStatus, setFieldValue }) => {
            try {
              const supabase = createClient()
              
              const { error } = await supabase
                .from('Apps')
                .update({
                  name: values.name,
                  description: values.description || null,
                  webhook_url: values.webhook_url || null,
                  icon_url: values.icon_url || null
                })
                .eq('uid', params.id)

              if (error) throw error

              setStatus({ success: true, message: 'Changes saved successfully!' })
              
              // Hide success message after 3 seconds
              setTimeout(() => {
                setStatus(null)
              }, 3000)
            } catch (err: any) {
              setStatus({ success: false, message: err.message })
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting, status }) => (
            <Form>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#222] rounded-lg p-6 space-y-6 max-w-2xl border border-gray-800"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">App Name *</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="description" className="block text-gray-400 mb-2">Description</label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    rows={3}
                    className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
                  />
                  <ErrorMessage name="description" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="webhook_url" className="block text-gray-400 mb-2">Webhook URL</label>
                  <Field
                    type="url"
                    id="webhook_url"
                    name="webhook_url"
                    placeholder="https://"
                    className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
                  />
                  <ErrorMessage name="webhook_url" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="icon_url" className="block text-gray-400 mb-2">Icon URL</label>
                  <Field
                    type="url"
                    id="icon_url"
                    name="icon_url"
                    placeholder="https://"
                    className="w-full bg-[#111] rounded p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
                  />
                  <ErrorMessage name="icon_url" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 text-sm ${
                      status.success ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {status.success && (
                      <CheckCircleIcon className="w-5 h-5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <div className="flex justify-end space-x-4">
                  <Link
                    href={`/in/apps/${params.id}`}
                    className="px-6 py-2 rounded-lg bg-[#111] hover:bg-gray-900 transition-colors border border-gray-800"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400 mr-2" />
                        Saving...
                      </span>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </motion.div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
} 