'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import Footer from '@/components/Footer'
import { ethers } from 'ethers'

export default function MetamaskDemo() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [chainId, setChainId] = useState('')

  async function connectWallet() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        // Request account access
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        })
        
        // Get the current chain ID
        const chainId = await window.ethereum.request({ 
          method: 'eth_chainId' 
        })
        
        setAddress(accounts[0])
        setChainId(chainId)
        setConnected(true)
      } else {
        window.open('https://metamask.io/download/', '_blank')
      }
    } catch (error) {
      console.error('Metamask connection error:', error)
    }
  }

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
        } else {
          setAddress('')
          setConnected(false)
        }
      })

      window.ethereum.on('chainChanged', (chainId: string) => {
        setChainId(chainId)
      })
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {})
        window.ethereum.removeListener('chainChanged', () => {})
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
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                  MetaMask Integration
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  The world's leading Web3 wallet with support for Ethereum, Layer 2s, and multiple EVM chains. Connect your MetaMask to access the entire Ethereum ecosystem.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://metamask.io/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F6851B] hover:bg-[#E2761B] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Install MetaMask
                  </a>
                  <a 
                    href="https://docs.metamask.io/"
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
                  src="https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/wallets/metamask_logo.png"
                  alt="MetaMask Fox Logo"
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
                <h3 className="text-xl font-semibold mb-4">Multi-Chain Support</h3>
                <p className="text-gray-300">
                  Connect to Ethereum, Polygon, Arbitrum, Optimism, and other EVM-compatible networks.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Token Management</h3>
                <p className="text-gray-300">
                  Manage ETH, ERC-20 tokens, and NFTs with comprehensive asset support.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">dApp Integration</h3>
                <p className="text-gray-300">
                  Seamlessly interact with thousands of decentralized applications and DeFi protocols.
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
                    className="bg-[#F6851B] hover:bg-[#E2761B] text-white px-4 py-2 rounded"
                  >
                    Connect MetaMask
                  </button>
                ) : (
                  <div className="space-y-4">
                    <p>Connected Address: {address}</p>
                    <p>Chain ID: {chainId}</p>
                    <button
                      onClick={() => {
                        setConnected(false)
                        setAddress('')
                        setChainId('')
                      }}
                      className="bg-[#F6851B] hover:bg-[#E2761B] text-white px-4 py-2 rounded"
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
{`// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
  // Request account access
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts'
  });
  
  // Get the current chain ID
  const chainId = await window.ethereum.request({
    method: 'eth_chainId'
  });
  
  // Get the first account
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