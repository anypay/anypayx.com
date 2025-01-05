'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'

interface Stats {
  totalCoins: number
  activeCoins: number
  totalUsers: number
  totalPayments: number
}

const adminSections = [
  {
    title: 'Coins Management',
    description: 'Manage cryptocurrency listings and their statuses',
    href: '/admin/coins',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'bg-blue-500'
  },
  {
    title: 'User Management',
    description: 'Manage user accounts and permissions',
    href: '/admin/users',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    color: 'bg-green-500'
  },
  {
    title: 'Payments',
    description: 'View and manage payment transactions',
    href: '/admin/payments',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    color: 'bg-purple-500'
  },
  {
    title: 'System Settings',
    description: 'Configure system-wide settings',
    href: '/admin/settings',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    color: 'bg-yellow-500'
  }
]

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalCoins: 0,
    activeCoins: 0,
    totalUsers: 0,
    totalPayments: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    const supabase = createClient()

    // Fetch coins stats
    const { data: coins } = await supabase
      .from('coins')
      .select('status')
    
    const { data: users } = await supabase
      .from('users')
      .select('id')

    const { data: payments } = await supabase
      .from('payments')
      .select('id')

    setStats({
      totalCoins: coins?.length || 0,
      activeCoins: coins?.filter(c => c.status === 'active').length || 0,
      totalUsers: users?.length || 0,
      totalPayments: payments?.length || 0
    })

    setLoading(false)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Total Coins</div>
          <div className="mt-2 text-3xl font-bold text-white">{stats.totalCoins}</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Active Coins</div>
          <div className="mt-2 text-3xl font-bold text-white">{stats.activeCoins}</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Total Users</div>
          <div className="mt-2 text-3xl font-bold text-white">{stats.totalUsers}</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-sm font-medium text-gray-400">Total Payments</div>
          <div className="mt-2 text-3xl font-bold text-white">{stats.totalPayments}</div>
        </div>
      </div>

      {/* Admin Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminSections.map((section) => (
          <Link 
            key={section.title}
            //@ts-ignore
            href={section.href}
            className="block bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
          >
            <div className="p-6">
              <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-4`}>
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={section.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{section.title}</h3>
              <p className="text-gray-400 text-sm">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 