'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import Image from 'next/image'
import { useState } from 'react'

// Add this example component
function PaymentExample() {
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Quick Payment Integration</h3>
      <p className="text-gray-400 mb-6">
        Create and pay invoices with Yours wallet in just a few lines of code.
      </p>
      
      <div className="space-y-6">
        <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 overflow-x-auto">
          <code>
{`import { useYoursWallet } from 'yours-wallet-provider'
import { AnypayClient } from '@anypay/sdk'

// Self-payment example
async function createAndPaySelfInvoice() {
  const wallet = useYoursWallet()
  const anypay = new AnypayClient()
  
  // 1. Connect wallet if needed
  if (!wallet.isConnected) {
    await wallet.connect()
  }
  
  // 2. Get your BSV address from wallet
  const { address } = await wallet.getAddress()
  
  // 3. Create a new invoice
  const invoice = await anypay.createInvoice({
    outputs: [{
      to: address,
      amount: 10000, // 10,000 satoshis
      currency: 'BSV'
    }]
  })
  
  // 4. Pay the invoice with wallet
  const txid = await wallet.send({
    to: invoice.address,
    amount: invoice.amount,
    currency: invoice.currency
  })
  
  return { txid, invoice }
}`}</code>
        </pre>

        <div className="bg-gray-800 p-4 rounded">
          <p className="text-sm text-gray-400 mb-4">Try creating and paying a 10,000 sat invoice:</p>
          <button
            onClick={async () => {
              setLoading(true)
              try {
                // Demo only - would use real wallet in production
                await new Promise(r => setTimeout(r, 1000))
                alert('This would create and pay a 10,000 sat invoice to your BSV address!')
              } catch (err) {
                console.error(err)
              } finally {
                setLoading(false)
              }
            }}
            disabled={loading}
            className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Test Self-Payment'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function YoursWalletPage() {
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo/yours_wallet_logo.svg"
                alt="Yours Wallet"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Yours Wallet <br />
              <span className="text-emerald-400">for Developers</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              A powerful browser extension wallet with comprehensive developer APIs 
              for BSV, Ordinals, and BSV20 tokens.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://yours.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Install Extension
              </a>
              <Link
                target="_blank"
                href="https://yours-wallet.gitbook.io/provider-api"
                rel="noopener noreferrer"
                className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Add new Payment Integration section */}
            <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Seamless Payments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">One-Click Payments</h3>
              <p className="text-gray-400 mb-4">
                Accept payments with minimal code. Just pass an Anypay invoice ID and let 
                Yours wallet handle the rest.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Automatic wallet connection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Invoice validation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time transaction status
                </li>
              </ul>
            </div>
            <PaymentExample />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Easy Integration
              </h2>
              <p className="text-gray-400 mb-6">
                Get started quickly with our React provider package. Simple setup, 
                comprehensive features.
              </p>
              <pre className="bg-gray-900 p-4 rounded-lg text-gray-300 mb-6 overflow-x-auto">
                <code>
{`npm i yours-wallet-provider

import { YoursProvider } from "yours-wallet-provider";

const App = () => (
  <YoursProvider>
    <YourApp />
  </YoursProvider>
)`}
                </code>
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">BSV</h3>
                <p className="text-gray-400">
                  Send BSV, manage UTXOs, and handle wallet connections.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Ordinals</h3>
                <p className="text-gray-400">
                  Inscribe, transfer, and purchase ordinals seamlessly.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">BSV20</h3>
                <p className="text-gray-400">
                  Full support for BSV20 token operations and transfers.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Social</h3>
                <p className="text-gray-400">
                  Built-in social profile integration and management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Features */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Built for Developers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Event Handling</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive event system for wallet interactions including account switches 
                and connection states.
              </p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300">
                <code>
{`wallet.on('switchAccount', () => {
  // Handle account change
});`}
                </code>
              </pre>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Utility Functions</h3>
              <p className="text-gray-400 mb-4">
                Built-in utilities for common operations like message signing, encryption,
                and transaction broadcasting.
              </p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300">
                <code>
{`const signed = await wallet.signMessage(
  message
);`}
                </code>
              </pre>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">TypeScript Ready</h3>
              <p className="text-gray-400 mb-4">
                Full TypeScript support with comprehensive type definitions for a better
                development experience.
              </p>
              <pre className="bg-gray-800 p-3 rounded text-sm text-gray-300">
                <code>
{`import type { 
  YoursProvider 
} from 'yours-wallet-provider'`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Install the Yours wallet extension and start building today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://yours.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Install Wallet
            </a>
            <Link
              href="#"
              className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 