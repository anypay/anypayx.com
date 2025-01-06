'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import LogoSquare from '@/components/LogoSquare'
import * as Icons from '@heroicons/react/24/outline'
import PriceTicker from '@/components/PriceTicker'
import { SupabaseAuthProvider } from '@/contexts/SupabaseAuthContext'


interface NavItem {
  name: string
  href: string
  icon: keyof typeof Icons
}

const navigation: { [key: string]: NavItem[] } = {
  main: [
    { name: 'Dashboard', href: '/in', icon: 'ChartBarIcon' },
    { name: 'Payments', href: '/in/payments', icon: 'CreditCardIcon' },
    { name: 'Wallets', href: '/in/wallets', icon: 'WalletIcon' },
    { name: 'WalletBot', href: '/in/walletbot', icon: 'WalletIcon' },
  ],
  developer: [
    { name: 'API Keys', href: '/in/api-keys', icon: 'KeyIcon' },
    { name: 'WebSockets', href: '/in/websockets', icon: 'BoltIcon' },
    { name: 'API Docs', href: '/in/docs/api', icon: 'DocumentTextIcon' },
    { name: 'Webhooks', href: '/in', icon: 'QrCodeIcon' },
  ],
  account: [
    { name: 'Settings', href: '/in/account/settings', icon: 'CogIcon' },
    { name: 'Notifications', href: '/in/notifications', icon: 'BellIcon' },
  ]
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const NavSection = ({ title, items }: { title: string, items: NavItem[] }) => (
    <div className="space-y-1">
      {!collapsed && (
        <h3 className="px-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
          {title}
        </h3>
      )}
      {items.map((item) => {
        const isActive = pathname === item.href
        const Icon = Icons[item.icon]
        return (
          <Link
            key={item.name}
            //@ts-ignore
            href={item.href}
            className={`
              flex items-center px-3 py-2 text-sm font-medium rounded-md
              ${isActive 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }
              ${collapsed ? 'justify-center' : 'space-x-3'}
            `}
          >
            <Icon 
              className={`${collapsed ? 'w-6 h-6' : 'w-5 h-5'}`} 
              aria-hidden="true" 
            />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        )
      })}
    </div>
  )

  return (
    <>
          <PriceTicker />
    <div className="min-h-screen bg-[#111] flex">

      {/* Sidebar */}
      <div 
        className={`
          flex flex-col border-r border-gray-800 bg-[#111] transition-all duration-300
          ${collapsed ? 'w-16' : 'w-64'}
        `}
      >
        {/* Logo section */}
        <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-gray-800 h-20">
          <div className={collapsed ? 'mx-auto' : ''}>
            {collapsed ? <LogoSquare /> : <Logo />}
          </div>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-6">
            <NavSection title="Overview" items={navigation.main} />
            <NavSection title="Developer" items={navigation.developer} />
            <NavSection title="Account" items={navigation.account} />
          </nav>
        </div>

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-3 flex items-center justify-center border-t border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800"
        >
          {collapsed ? (
            <Icons.ChevronRightIcon className="w-5 h-5" />
          ) : (
            <Icons.ChevronLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-gray-800 bg-[#111]">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Icons.BellIcon className="w-7 h-7" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Icons.CogIcon className="w-7 h-7" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#111]">
          <SupabaseAuthProvider>
            {children}
          </SupabaseAuthProvider>
        </main>
      </div>
    </div>
    </>
  )
} 