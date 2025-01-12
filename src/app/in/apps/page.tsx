'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PlusIcon, CommandLineIcon, BuildingStorefrontIcon, ChartBarIcon, CubeIcon } from '@heroicons/react/24/outline'
import { createClient } from '@/utils/supabase/client'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import Image from 'next/image'

export default function AppsPage() {
  const [apps, setApps] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { account } = useSupabaseAuth()

  const maskUID = (uid: string) => {
    if (!uid) return '';
    return `${uid.slice(0, 4)}${'*'.repeat(8)}${uid.slice(-4)}`;
  }

  useEffect(() => {
    console.log('ACCOUNT ID', account?.id)

    const fetchApps = async () => {
      try {
        const supabase = createClient()
        
        // First fetch apps
        const { data: appsData, error: appsError } = await supabase
          .from('Apps')
          .select('*')
          .eq('account_id', account?.id)
          .order('createdAt', { ascending: false })

        if (appsError) throw appsError

        // Then fetch corresponding access tokens
        if (appsData && appsData.length > 0) {
          const appIds = appsData.map(app => app.id)
          const { data: tokensData, error: tokensError } = await supabase
            .from('access_tokens')
            .select('*')
            .in('app_id', appIds)

          if (tokensError) throw tokensError

          // Create tokens for apps that don't have one
          const appsWithoutTokens = appsData.filter(app => 
            !tokensData.some(token => token.app_id === app.id)
          )

          if (appsWithoutTokens.length > 0) {
            const newTokens = appsWithoutTokens.map(app => ({
              app_id: app.id,
              account_id: account?.id,
              uid: crypto.randomUUID()
            }))

            const { data: createdTokens, error: createError } = await supabase
              .from('access_tokens')
              .insert(newTokens)
              .select()

            if (createError) throw createError

            // Combine existing and new tokens
            tokensData.push(...(createdTokens || []))
          }

          // Merge tokens with their corresponding apps
          const appsWithTokens = appsData.map(app => ({
            ...app,
            access_tokens: tokensData.filter(token => token.app_id === app.id)
          }))

          setApps(appsWithTokens)
        } else {
          setApps(appsData || [])
        }
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchApps()
  }, [account])

  useEffect(() => {
    console.log('APPS', apps)
  }, [apps])

  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-[#111] text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 space-y-6"
          >
            <h1 className="text-4xl font-bold">Apps</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                Apps are isolated environments for creating and managing payment requests. Each app provides its own namespace, 
                allowing you to organize payments for different purposes, track revenue streams separately, and customize the 
                payment experience for different use cases.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid gap-8 mb-12"
          >
            <div className="bg-[#222] rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CommandLineIcon className="w-6 h-6 text-gray-400" />
                <span>Developer Integration</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Each app comes with its own API key and webhook configuration. Use these to create payment requests 
                programmatically and receive real-time updates when payments are received.
              </p>
              <div className="bg-[#333] rounded p-3 font-mono text-sm text-gray-300">
                <code>
                  POST /api/v1/invoices<br/>
                  Authorization: Bearer YOUR_APP_KEY
                </code>
              </div>
            </div>

            <div className="bg-[#222] rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BuildingStorefrontIcon className="w-6 h-6 text-gray-400" />
                <span>Business Organization</span>
              </h2>
              <p className="text-gray-300">
                Create separate apps for different business units, products, or services. Each app maintains its own 
                payment history and analytics, making it easy to track revenue and reconcile payments for different 
                parts of your business.
              </p>
            </div>

            <div className="bg-[#222] rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ChartBarIcon className="w-6 h-6 text-gray-400" />
                <span>Payment Analytics</span>
              </h2>
              <p className="text-gray-300">
                Get detailed insights into payment flows for each app. Track success rates, popular payment methods, 
                and transaction volumes to optimize your payment experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Your Apps</h2>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
              </div>
            ) : (
              <div className="grid gap-4">
                <Link
                  href="/in/apps/new"
                  className="flex items-center justify-center p-4 bg-[#222] rounded-lg border border-gray-800 hover:bg-[#333] transition-colors"
                >
                  <PlusIcon className="w-5 h-5 text-gray-400 mr-2" />
                  <span>Create New App</span>
                </Link>

                {apps.map((app) => (
                  <Link
                    key={app.uid}
                    href={`/in/apps/${app.uid}`}
                    className="block bg-[#222] p-4 rounded-lg hover:bg-[#333] transition-colors border border-gray-800"
                  >
                    <div className="flex items-center gap-4">
                      {app.icon_url ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#111] border border-gray-800">
                          <Image
                            src={app.icon_url}
                            alt={app.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg flex-shrink-0 bg-[#111] border border-gray-800 flex items-center justify-center">
                          <CubeIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-100">{app.name}</h3>
                        {app.description && (
                          <p className="text-gray-400 text-sm mt-1">{app.description}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 