'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import Footer from '@/components/Footer'

export default function XverseDemo() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')

  async function connectWallet() {
    try {
      // @ts-ignore
      if (typeof window.BitcoinProvider !== 'undefined') {
        // @ts-ignore
        const accounts = await window.BitcoinProvider.connect()
        setAddress(accounts[0])
        setConnected(true)
      } else {
        window.open('https://www.xverse.app/', '_blank')
      }
    } catch (error) {
      console.error('Xverse connection error:', error)
    }
  }

  return (
    <div className="bg-[#111] min-h-screen">
      <PriceTicker />
      
      <header className="border-b border-gray-800 bg-[#111] text-white">
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
              <Link href="https://api.anypayx.com/api" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                Docs
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors">
                Sign in
              </Link>
              <Link href="/auth/signup" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="bg-[#111] text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                  Xverse Wallet Integration
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  The premier Bitcoin and Ordinals wallet for the Stacks ecosystem. Connect your Xverse wallet to access BTC, STX, and Ordinals.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.xverse.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Install Xverse
                  </a>
                  <a 
                    href="https://docs.xverse.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/50 hover:bg-black/70 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    View Docs
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <img 
                  src="https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/wallets/xverse_logo.jpg"
                  alt="Xverse Logo"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-black/50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Bitcoin & Stacks</h3>
                <p className="text-gray-300">
                  Manage your BTC and STX assets in one secure wallet with full support for both networks.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Ordinals Support</h3>
                <p className="text-gray-300">
                  View and transfer your Bitcoin Ordinals with built-in inscription support.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">BRC-20 Tokens</h3>
                <p className="text-gray-300">
                  Full support for BRC-20 tokens with easy transfer and management features.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Interactive Demo</h2>
          
          {/* Two-column layout for Methods and Event Log */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Connection Column */}
            <div className="space-y-8">
              <div className="bg-black/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Wallet Connection</h2>
                {!connected ? (
                  <button
                    onClick={connectWallet}
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
                  >
                    Connect Xverse
                  </button>
                ) : (
                  <div>
                    <p className="mb-4">Connected Address: {address}</p>
                    <button
                      onClick={() => {
                        setConnected(false)
                        setAddress('')
                      }}
                      className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-black/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
              <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                <code className="text-sm text-gray-300">
{`// Check if Xverse is installed
if (typeof window.BitcoinProvider !== 'undefined') {
  // Connect to Xverse
  const accounts = await window.BitcoinProvider.connect();
  
  // Get address
  const address = accounts[0];
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 