'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import Footer from '@/components/Footer'

export default function PhantomDemo() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')

  async function connectWallet() {
    try {
      // @ts-ignore
      const provider = window.phantom?.solana
      if (provider?.isPhantom) {
        const response = await provider.connect()
        setAddress(response.publicKey.toString())
        setConnected(true)
      } else {
        window.open('https://phantom.app/', '_blank')
      }
    } catch (error) {
      console.error('Phantom connection error:', error)
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
              {/* image: https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/wallets/phantom_wallet_logo.png */}
              <img src="https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/wallets/phantom_wallet_logo.png" alt="Phantom Wallet Logo" className="w-8 h-8" />
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
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Phantom Wallet Integration
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  The most popular Solana wallet, now integrated with our platform. Connect your Phantom wallet to access the Solana ecosystem.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://phantom.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Install Phantom
                  </a>
                  <a 
                    href="https://docs.phantom.app/"
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
                  src="https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/wallets/Phantom-Wallet.png"
                  alt="Phantom Logo"
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
                <h3 className="text-xl font-semibold mb-4">Solana Integration</h3>
                <p className="text-gray-300">
                  Access the Solana ecosystem with full support for SOL and SPL tokens.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">NFT Support</h3>
                <p className="text-gray-300">
                  View and manage your Solana NFT collection directly in the wallet.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">DApp Browser</h3>
                <p className="text-gray-300">
                  Browse and interact with Solana dApps seamlessly through Phantom.
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
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
                  >
                    Connect Phantom
                  </button>
                ) : (
                  <div>
                    <p className="mb-4">Connected Address: {address}</p>
                    <button
                      onClick={() => {
                        setConnected(false)
                        setAddress('')
                      }}
                      className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
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
{`// Check if Phantom is installed
const provider = window.phantom?.solana;

if (provider?.isPhantom) {
  // Connect to Phantom
  const response = await provider.connect();
  
  // Get public key
  const publicKey = response.publicKey.toString();
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