'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import PricesDisplay from './components/PricesDisplay'
import DeveloperSection from './components/DeveloperSection'

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-[#111]">
      <PriceTicker />
      
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link href="/prices" className="text-gray-300 hover:text-white transition-colors">
                Prices
              </Link>
              <Link href="/walletbot" className="text-gray-300 hover:text-white transition-colors">
                WalletBot
              </Link>
              {/* @ts-ignore */}
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                Docs
              </Link>
              <Link
                href="/auth/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>

          <PricesDisplay />
    <DeveloperSection />
 
    </div>
  )
} 