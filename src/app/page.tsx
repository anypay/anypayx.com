'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import ChainGrid from '@/components/ChainGrid'
import ChainList from '@/components/ChainList'
import WalletList from '@/components/WalletList'
import { Highlight, themes } from 'prism-react-renderer'
import Header from '@/components/Header'

const apiExample = `// Create a new invoice
const response = await fetch('https://api.anypay.com/v1/invoices', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 100,
    currency: 'USD',
    description: 'Premium Subscription'
  })
})

const { invoice } = await response.json()
console.log(\`Invoice URL: \${invoice.webpage_url}\`)`

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#111]">
      <PriceTicker />
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accept Crypto Payments <br />
              <span className="text-gray-400">including Stablecoins</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
              The easiest way to accept Bitcoin, Ethereum, and stablecoins like USDC and USDT
              in your application. Start accepting payments today.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Eliminate volatility risk with instant stablecoin settlements
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/auth/signup"
                className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Start Now
              </Link>
              <Link
                //@ts-ignore
                href="/docs"
                className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer API Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Powerful Developer APIs
              </h2>
              <p className="text-gray-400 mb-4">
                Build custom payment experiences with our comprehensive APIs. 
                Support for Bitcoin, Ethereum, and major stablecoins.
              </p>
              <p className="text-gray-500 mb-6">
                Accept USDC, USDT, RLUSD, NUSD with stable USD value.
              </p>
              <div className="rounded-lg overflow-hidden">
                <Highlight
                  theme={themes.nightOwl}
                  code={apiExample}
                  language="javascript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className="p-6 bg-gray-900" style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
              <Link 
                //@ts-ignore
                href="https://api.anypayx.com/api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 flex items-center"
              >
                View API Documentation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">REST API</h3>
                <p className="text-gray-400">
                  Simple REST endpoints for payments, refunds, and webhooks.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">SDKs</h3>
                <p className="text-gray-400">
                  Official libraries for Node.js, Python, Ruby, and more.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Webhooks</h3>
                <p className="text-gray-400">
                  Real-time notifications for all payment events.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Testing</h3>
                <p className="text-gray-400">
                  Sandbox environment for development and testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce & Retail Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're running an online store or a retail location, 
              we have the tools you need to start accepting crypto payments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">WooCommerce Plugin</h3>
              <p className="text-gray-400 mb-4">
                Accept crypto payments in your WordPress store with our official WooCommerce plugin.
                One-click installation, automatic exchange rates, and instant confirmations.
              </p>
              <Link 
                href="/woocommerce"
                className="text-white hover:text-gray-300 inline-flex items-center"
              >
                Install Plugin
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">iOS & Android Apps</h3>
              <p className="text-gray-400 mb-4">
                Turn any mobile device into a crypto payment terminal. Perfect for retail stores,
                restaurants, and service businesses.
              </p>
              <div className="flex space-x-4">
                <Link 
                  //@ts-ignore
                  href="/download/ios"
                  className="text-white hover:text-gray-300 inline-flex items-center"
                >
                  iOS App
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  //@ts-ignore
                  href="/download/android"
                  className="text-white hover:text-gray-300 inline-flex items-center"
                >
                  Android App
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Price Feed API</h3>
              <p className="text-gray-400 mb-4">
                Real-time cryptocurrency price data. Access current and historical prices,
                exchange rates, and market data through our reliable API.
              </p>
              <Link 
                href="/prices"
                className="text-white hover:text-gray-300 inline-flex items-center"
              >
                View Price Feed
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WalletBot Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Automate Your Payments <br/>
                <span className="text-emerald-400">with WalletBot</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Self-custody wallet service that runs in your infrastructure. 
                Securely manage private keys and automate payments across multiple chains.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Headless wallet service
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multi-chain support
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Simple CLI interface
                </li>
              </ul>
              <Link
                href="/walletbot"
                className="text-white bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-md inline-flex items-center group"
              >
                Learn More About WalletBot
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`import { WalletBot } from '@anypay/walletbot'

const walletBot = new WalletBot({
  seed_phrase: "your twelve word seed phrase",
  auth_token: "your-anypay-api-token"
})

walletBot.start()`}</code>
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
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Process transactions instantly with our optimized payment infrastructure.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
              <p className="text-gray-400">
                Enterprise-grade security with end-to-end encryption and multi-sig wallets.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Simple Integration</h3>
              <p className="text-gray-400">
                Integrate with just a few lines of code using our powerful API and SDKs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Accepting Crypto?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of businesses already using Anypay for their crypto payment needs.
          </p>
          <Link
            href="/auth/signup"
            className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>
      <ChainGrid />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center space-x-">
                <Logo />
              </Link>
              <p className="mt-4 text-gray-400">
                The most reliable cryptocurrency payment processing platform for businesses.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/prices" className="text-gray-400 hover:text-white">Price Feed</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/payments" className="text-gray-400 hover:text-white">Payments</Link></li>
                <li><Link href="/walletbot" className="text-gray-400 hover:text-white">WalletBot</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/wallet" className="text-gray-400 hover:text-white">Wallet</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                {/* @ts-ignore */}
                <li><Link href="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/api" className="text-gray-400 hover:text-white">API Reference</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/status" className="text-gray-400 hover:text-white">Status</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <WalletList />

            <ChainList />
          </div>
        </div>
      </footer>

      {/* Replace the chains footer with the component */}
    </div>
  )
}

