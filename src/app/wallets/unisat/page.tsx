'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import Footer from '@/components/Footer'

export default function UnisatDemo() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [network, setNetwork] = useState('')

  async function connectWallet() {
    try {
      // @ts-ignore
      if (typeof window.unisat !== 'undefined') {
        // @ts-ignore
        const accounts = await window.unisat.requestAccounts()
        // @ts-ignore
        const network = await window.unisat.getNetwork()
        setAddress(accounts[0])
        setNetwork(network)
        setConnected(true)
      } else {
        window.open('https://unisat.io/download', '_blank')
      }
    } catch (error) {
      console.error('Unisat connection error:', error)
    }
  }

  // Listen for network changes
  useEffect(() => {
    // @ts-ignore
    if (window.unisat) {
      // @ts-ignore
      window.unisat.on('networkChanged', (network: string) => {
        setNetwork(network)
      })

      // @ts-ignore
      window.unisat.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
        } else {
          setAddress('')
          setConnected(false)
        }
      })
    }

    return () => {
      // @ts-ignore
      if (window.unisat) {
        // @ts-ignore
        window.unisat.removeListener('networkChanged', () => {})
        // @ts-ignore
        window.unisat.removeListener('accountsChanged', () => {})
      }
    }
  }, [])

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
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  Unisat Wallet Integration
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  The leading Bitcoin Ordinals wallet. Connect your Unisat wallet to access BTC, Ordinals, and BRC-20 tokens with seamless integration.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://unisat.io/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Install Unisat
                  </a>
                  <a 
                    href="https://docs.unisat.io/"
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
                  src="https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/wallets/unisat_icon.png"
                  alt="Unisat Logo"
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
                <h3 className="text-xl font-semibold mb-4">Bitcoin Native</h3>
                <p className="text-gray-300">
                  Built specifically for Bitcoin with full support for native BTC transactions and UTXO management.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Ordinals Support</h3>
                <p className="text-gray-300">
                  First-class support for Bitcoin Ordinals with built-in inscription viewer and transfer capabilities.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">BRC-20 Integration</h3>
                <p className="text-gray-300">
                  Complete BRC-20 token support with transfer, minting, and balance management features.
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
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                  >
                    Connect Unisat
                  </button>
                ) : (
                  <div className="space-y-4">
                    <p>Connected Address: {address}</p>
                    <p>Network: {network}</p>
                    <button
                      onClick={() => {
                        setConnected(false)
                        setAddress('')
                        setNetwork('')
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </div>

              {/* Additional Methods */}
              <div className="bg-black/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Wallet Methods</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={async () => {
                      try {
                        // @ts-ignore
                        const balance = await window.unisat.getBalance()
                        alert(`Balance: ${balance.confirmed} sats`)
                      } catch (error) {
                        console.error('Error getting balance:', error)
                      }
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    disabled={!connected}
                  >
                    Get Balance
                  </button>
                  <button 
                    onClick={async () => {
                      try {
                        // @ts-ignore
                        const publicKey = await window.unisat.getPublicKey()
                        alert(`Public Key: ${publicKey}`)
                      } catch (error) {
                        console.error('Error getting public key:', error)
                      }
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    disabled={!connected}
                  >
                    Get Public Key
                  </button>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-black/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
              <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                <code className="text-sm text-gray-300">
{`// Check if Unisat is installed
if (typeof window.unisat !== 'undefined') {
  // Connect to wallet
  const accounts = await window.unisat.requestAccounts();
  
  // Get the network
  const network = await window.unisat.getNetwork();
  
  // Get the balance
  const balance = await window.unisat.getBalance();
  
  // Get the public key
  const publicKey = await window.unisat.getPublicKey();
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