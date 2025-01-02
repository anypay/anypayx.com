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
        Accept BSV payments with native Yours wallet support.
      </p>
      
      <div className="space-y-6">
        <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 overflow-x-auto">
          <code>
{`import { AnypayClient } from '@anypay/sdk'
import { useYoursWallet } from 'yours-wallet-provider'

// Create and pay a BSV invoice
async function createBsvPayment() {
  const anypay = new AnypayClient()
  const wallet = useYoursWallet()
  
  // Create invoice
  const invoice = await anypay.createInvoice({
    outputs: [{
      amount: 50000,  // 50k sats
      currency: "BSV"
    }],
    metadata: {
      orderId: "123"
    }
  })
  
  // Pay with Yours wallet
  const txid = await wallet.send({
    to: invoice.address,
    amount: invoice.amount,
    currency: "BSV"
  })
  
  return { txid, invoice }
}`}</code>
        </pre>

        <div className="bg-gray-800 p-4 rounded">
          <p className="text-sm text-gray-400 mb-4">Test the integration:</p>
          <button
            onClick={async () => {
              setLoading(true)
              try {
                await new Promise(r => setTimeout(r, 1000))
                alert('This would create and pay a BSV invoice!')
              } catch (err) {
                console.error(err)
              } finally {
                setLoading(false)
              }
            }}
            disabled={loading}
            className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Create BSV Payment'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function BitcoinSVPage() {
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
                src="/chains/bsv.svg"
                alt="Bitcoin SV"
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bitcoin SV Payments <br />
              <span className="text-emerald-400">Enterprise-Ready Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Accept BSV payments with enterprise-grade reliability. Leverage unlimited scaling, 
              micropayments, and smart contracts with our comprehensive API.
            </p>
            <p className="text-lg text-emerald-400 mb-12">
              <Link href="/wallets/yours" className="hover:underline">
                Learn more about Yours Wallet →
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/auth-new/signup"
                className="bg-emerald-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Start Integration
              </Link>
              <Link
                href="/docs/bsv"
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
            Why Choose Anypay for Bitcoin SV?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Unlimited Scaling</h3>
              <p className="text-gray-400">
                Process millions of transactions with minimal fees. Built for 
                enterprise-scale throughput and reliability.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Smart Contracts</h3>
              <p className="text-gray-400">
                Deploy and interact with Bitcoin smart contracts. Full sCrypt 
                support and contract templates.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Micropayments</h3>
              <p className="text-gray-400">
                Enable new business models with sub-cent transactions. 
                Perfect for streaming payments and micro-services.
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
                Start accepting BSV payments in minutes with our straightforward API
                and Yours wallet integration.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  One-click Yours wallet payments
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time transaction monitoring
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Instant settlement confirmation
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
            Ready to Accept BSV Payments?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the growing ecosystem of businesses using Anypay and Yours wallet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/auth-new/signup"
              className="bg-emerald-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="/wallets/yours"
              className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get Yours Wallet
            </Link>
          </div>
        </div>
      </section>

      {/* Yours Wallet Section */}
      <section className="py-20 px-4 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Enhanced with Yours Wallet
              </h2>
              <p className="text-gray-400 mb-6">
                Take your BSV integration further with our native wallet solution. 
                One-click payments, ordinals support, and BSV20 tokens - all in one place.
              </p>
              <Link
                href="/wallets/yours"
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
              >
                Learn more about Yours Wallet
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Wallet Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  BSV20 Token Support
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ordinals & Inscriptions
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  One-Click Payments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 