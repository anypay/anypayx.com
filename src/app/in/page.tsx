'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import * as Icons from '@heroicons/react/24/outline'

interface Stats {
  totalPayments: number
  totalVolume: number
  activeWallets: number
  successRate: number
}

const quickActions = [
  {
    name: 'Create Payment',
    description: 'Generate a new payment request',
    href: '/in/payments/new',
    icon: 'PlusIcon',
    color: 'bg-blue-500'
  },
  {
    name: 'Connect Wallet',
    description: 'Add a new wallet connection',
    href: '/in/wallets/connect',
    icon: 'WalletIcon',
    color: 'bg-purple-500'
  },
  {
    name: 'View API Keys',
    description: 'Manage your API credentials',
    href: '/in/api-keys',
    icon: 'KeyIcon',
    color: 'bg-green-500'
  },
  {
    name: 'Setup Webhooks',
    description: 'Configure payment notifications',
    href: '/in/webhooks',
    icon: 'CodeBracketIcon',
    color: 'bg-orange-500'
  }
]

const features = [
  {
    name: 'WalletBot',
    description: 'Automated payment processing',
    href: '/in/walletbot',
    icon: 'CommandLineIcon',
    status: 'Active'
  },
  {
    name: 'Price Feeds',
    description: 'Real-time crypto prices',
    href: '/in/prices',
    icon: 'ChartBarIcon',
    status: 'Active'
  },
  {
    name: 'WebSockets',
    description: 'Live payment updates',
    href: '/in/websockets',
    icon: 'BoltIcon',
    status: 'Active'
  }
]

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    totalPayments: 0,
    totalVolume: 0,
    activeWallets: 0,
    successRate: 0
  })

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    const supabase = createClient()
    // Fetch your stats here
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Total Payments</div>
          <div className="mt-2 text-3xl font-bold text-white">{stats.totalPayments}</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Total Volume</div>
          <div className="mt-2 text-3xl font-bold text-white">${stats.totalVolume.toLocaleString()}</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Active Wallets</div>
          <div className="mt-2 text-3xl font-bold text-white">{stats.activeWallets}</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Success Rate</div>
          <div className="mt-2 text-3xl font-bold text-white">{stats.successRate}%</div>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {quickActions.map((action) => {
          const Icon = Icons[action.icon as keyof typeof Icons]
          return (
            <Link
              key={action.name}
              //@ts-ignore
              href={action.href}
              className="block bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{action.name}</h3>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </div>
            </Link>
          )}
        )}
      </div>

      {/* Features Section */}
      <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => {
          const Icon = Icons[feature.icon as keyof typeof Icons]
          return (
            <Link
              key={feature.name}
              //@ts-ignore
              href={feature.href}
              className="block bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-6 h-6 text-gray-400" />
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{feature.name}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </Link>
          )}
        )}
      </div>

      {/* Tips & Documentation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Quick Tips</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Icons.LightBulbIcon className="w-5 h-5 text-yellow-500 mt-0.5 mr-2" />
              <span className="text-gray-400">Use webhooks to automate your payment processing</span>
            </li>
            <li className="flex items-start">
              <Icons.LightBulbIcon className="w-5 h-5 text-yellow-500 mt-0.5 mr-2" />
              <span className="text-gray-400">Enable 2FA for enhanced security</span>
            </li>
            <li className="flex items-start">
              <Icons.LightBulbIcon className="w-5 h-5 text-yellow-500 mt-0.5 mr-2" />
              <span className="text-gray-400">Test payments in sandbox mode before going live</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Documentation</h3>
          <div className="space-y-4">
            <Link href="/docs/getting-started" className="block">
              <div className="group flex items-center text-gray-400 hover:text-white">
                <Icons.BookOpenIcon className="w-5 h-5 mr-2" />
                <span>Getting Started Guide</span>
                <Icons.ArrowRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link href="/docs/api" className="block">
              <div className="group flex items-center text-gray-400 hover:text-white">
                <Icons.CodeBracketIcon className="w-5 h-5 mr-2" />
                <span>API Reference</span>
                <Icons.ArrowRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link href="/docs/sdks" className="block">
              <div className="group flex items-center text-gray-400 hover:text-white">
                <Icons.CubeIcon className="w-5 h-5 mr-2" />
                <span>SDKs & Libraries</span>
                <Icons.ArrowRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}