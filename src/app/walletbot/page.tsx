'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'

export default function WalletBotPage() {
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
              {/* @ts-ignore */}
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                Docs
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors">
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Self-Custody Wallet Service <br />
              <span className="text-emerald-400">for Your Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
              A headless wallet service that runs as a daemon process within your data center. 
              Securely manage private keys and send payments on any peer-to-peer network.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                //@ts-ignore
                href="/docs/walletbot/quickstart"
                className="bg-emerald-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Quick Start Guide
              </Link>
              <a

                href="https://github.com/anypay/walletbot"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Multiple Installation Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Homebrew</h3>
              <p className="text-gray-400 mb-6">
                Quick installation on macOS with Homebrew package manager.
              </p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 overflow-x-auto">
                <code>{`brew tap anypay/walletbot\nbrew install walletbot`}</code>
              </pre>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">NPM</h3>
              <p className="text-gray-400 mb-6">
                Install globally via npm for Node.js environments.
              </p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 overflow-x-auto">
                <code>{`npm install -g @anypay/walletbot`}</code>
              </pre>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Docker</h3>
              <p className="text-gray-400 mb-6">
                Run as an isolated container in your infrastructure.
              </p>
              <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 overflow-x-auto">
                <code>{`docker run anypay/walletbot`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Self-Custody</h3>
              <p className="text-gray-400">
                Maintain full control of your private keys while enabling automated payments.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Chain Support</h3>
              <p className="text-gray-400">
                Send payments across multiple blockchain networks from a single service.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Developer First</h3>
              <p className="text-gray-400">
                Simple CLI interface and Node.js SDK for seamless integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Simple Integration
              </h2>
              <p className="text-gray-400 mb-6">
                Start sending automated payments with just a few lines of code.
              </p>
              <pre className="bg-gray-900 p-6 rounded-lg text-gray-300 mb-6">
                <code>
{`import { WalletBot } from '@anypay/walletbot'

const walletBot = new WalletBot({
  seed_phrase: "your twelve word seed phrase",
  auth_token: "your-anypay-api-token"
})

walletBot.start()`}
                </code>
              </pre>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No database required
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Webhook notifications
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Prometheus metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Payments?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get started with WalletBot today and streamline your crypto operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              //@ts-ignore
              href="/docs/walletbot/installation"
              className="bg-emerald-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Installation Guide
            </Link>
            <Link
              //@ts-ignore
              href="/docs/walletbot/api"
              className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              API Reference
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 