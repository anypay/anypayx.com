'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import Footer from '@/components/Footer'
import { useNintondo } from 'nintondo-sdk/react'

export default function NintondoDemo() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState<number | null>(null)
  const { nintondo, isConnected} = useNintondo()

  async function connectWallet() {
    try {

      if (isConnected) {
        const accounts = await nintondo!.provider.getAccount()
        setAddress(accounts[0])
        setConnected(true)
        
        // Get initial balance
        const balance = await nintondo!.provider.getBalance()
        if (balance) {
          setBalance(balance)
        }
      } else {
        window.open('https://nintondo.io/download', '_blank')
      }
    } catch (error) {
      console.error('Nintondo connection error:', error)
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
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Nintondo Wallet Integration
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  The next-generation Bitcoin wallet for BEL and inscriptions. Connect your Nintondo wallet to access the full suite of features.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://nintondo.io/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Install Nintondo
                  </a>
                  <a 
                    href="https://docs.nintondo.io"
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
                  src="https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/wallets/nintondo_logo.jpg"
                  alt="Nintondo Logo"
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
                <h3 className="text-xl font-semibold mb-4">BEL Support</h3>
                <p className="text-gray-300">
                  Full support for BEL transactions with real-time price feeds and advanced UTXO management.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Inscription Tools</h3>
                <p className="text-gray-300">
                  Comprehensive inscription tools with support for creation, viewing, and transfer capabilities.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Token Management</h3>
                <p className="text-gray-300">
                  Advanced token management features with support for multiple token standards.
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
            {/* Methods Column */}
            <div className="space-y-8">
              <div className="bg-black/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Wallet Connection</h2>
                {!connected ? (
                  <button
                    onClick={connectWallet}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Connect Nintondo
                  </button>
                ) : (
                  <div className="space-y-4">
                    <p>Connected Address: {address}</p>
                    {balance !== null && <p>Balance: {balance} BEL</p>}
                    <button
                      onClick={() => {
                        setConnected(false)
                        setAddress('')
                        setBalance(null)
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
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
                        if (nintondo && address) {
                          //@ts-ignore
                          const stats = await nintondo!.provider.getAccountStats(address)
                          alert(`Account Stats: ${JSON.stringify(stats, null, 2)}`)
                        }
                      } catch (error) {
                        console.error('Error getting stats:', error)
                      }
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    disabled={!connected}
                  >
                    Get Stats
                  </button>
                  <button 
                    onClick={async () => {
                      try {
                        if (nintondo && address) {
                          //@ts-ignore
                          const tokens = await nintondo!.provider.getTokens(address)
                          alert(`Tokens: ${JSON.stringify(tokens, null, 2)}`)
                        }
                      } catch (error) {
                        console.error('Error getting tokens:', error)
                      }
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    disabled={!connected}
                  >
                    Get Tokens
                  </button>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-black/50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
              <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                <code className="text-sm text-gray-300">
{`import { initNintondo } from "nintondo-sdk";

// Initialize Nintondo
const nintondo = initNintondo();

if (nintondo) {
  // Connect to wallet
  const accounts = await nintondo.requestAccounts();
  
  // Get account stats
  const stats = await nintondo.getAccountStats(accounts[0]);
  
  // Get tokens
  const tokens = await nintondo.getTokens(accounts[0]);
  
  // Get transactions
  const txs = await nintondo.getTransactions(accounts[0]);
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