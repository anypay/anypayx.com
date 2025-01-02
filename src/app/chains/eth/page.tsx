'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import { useState } from 'react'

function CodeExample() {
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Quick Integration</h3>
      <p className="text-gray-400 mb-6">
        Accept ETH and ERC-20 payments with just a few lines of code.
      </p>
      
      <div className="space-y-6">
        <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 overflow-x-auto">
          <code>
{`import { AnypayClient } from '@anypay/sdk'

// Create an ETH payment request
async function createEthPayment() {
  const anypay = new AnypayClient()
  
  const invoice = await anypay.createInvoice({
    outputs: [{
      to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      amount: "0.1",
      currency: "ETH"
    }],
    metadata: {
      orderId: "123",
      productName: "Premium Package"
    }
  })
  
  return invoice
}`}</code>
        </pre>

        <div className="bg-gray-800 p-4 rounded">
          <p className="text-sm text-gray-400 mb-4">Test the integration:</p>
          <button
            onClick={async () => {
              setLoading(true)
              try {
                await new Promise(r => setTimeout(r, 1000))
                alert('This would create an ETH payment request!')
              } catch (err) {
                console.error(err)
              } finally {
                setLoading(false)
              }
            }}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Create ETH Payment'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function EthereumPage() {
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
              <Link 
                href="/prices" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Prices
              </Link>
              <Link 
                //@ts-ignore
                href="/docs" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/auth-new/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/auth-new/signup"
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img
                src="/chains/eth.svg"
                alt="Ethereum"
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ethereum Payments <br />
              <span className="text-blue-400">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Accept ETH and any ERC-20 token payments with our simple API. 
              Real-time notifications, automatic conversions, and instant settlements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/auth-new/signup"
                className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Start Integration
              </Link>
              <Link
                href="/docs/eth"
                className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Anypay for Ethereum?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">ERC-20 Support</h3>
              <p className="text-gray-400">
                Accept any ERC-20 token payment with automatic price conversion and 
                settlement in your preferred currency.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Gas Optimization</h3>
              <p className="text-gray-400">
                Smart transaction batching and gas price monitoring to minimize fees 
                and maximize efficiency.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Contracts</h3>
              <p className="text-gray-400">
                Interact with any smart contract through our API. Support for custom 
                contract calls and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Example */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Simple Integration
              </h2>
              <p className="text-gray-400 mb-6">
                Start accepting ETH payments in minutes with our straightforward API.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time payment notifications
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Automatic gas price adjustments
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multiple settlement options
                </li>
              </ul>
            </div>
            <CodeExample />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accept ETH Payments?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of businesses already using Anypay for crypto payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/auth-new/signup"
              className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="/contact"
              className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 