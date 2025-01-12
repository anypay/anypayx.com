'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import * as Icons from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import ChainGrid from '@/components/ChainGrid'
import ChainList from '@/components/ChainList'
import WalletList from '@/components/WalletList'
import Header from '@/components/Header'

const configExample = `// wp-config.php
define('ANYPAY_API_KEY', 'your_api_key_here');
define('ANYPAY_WEBHOOK_SECRET', 'your_webhook_secret_here');`

export default function WooCommercePage() {
  return (
    <div className="min-h-screen bg-[#111]">
      <PriceTicker />
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/integrations/woo_commerce_icon_only.png"
                alt="WooCommerce"
                width={480}
                height={120}
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              WooCommerce Plugin
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Accept cryptocurrency payments in your WordPress store with our official WooCommerce plugin.
              Easy setup, automatic exchange rates, and instant confirmations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://wordpress.org/plugins/anypay-crypto-payments"
                className="bg-[#7f54b3] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#6c4699] transition-colors"
              >
                Download Plugin
              </Link>
              <Link
                href="/auth/signup"
                className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Get API Key
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#7f54b3]/10 rounded-lg flex items-center justify-center mb-6">
                <Icons.BoltIcon className="w-6 h-6 text-[#7f54b3]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Easy Installation</h3>
              <p className="text-gray-400">
                Install directly from WordPress plugin directory or upload manually. 
                Configure with your API key and start accepting crypto in minutes.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#7f54b3]/10 rounded-lg flex items-center justify-center mb-6">
                <Icons.CurrencyDollarIcon className="w-6 h-6 text-[#7f54b3]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multiple Currencies</h3>
              <p className="text-gray-400">
                Accept Bitcoin, Ethereum, and popular stablecoins. Real-time exchange rates 
                and automatic currency conversion.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#7f54b3]/10 rounded-lg flex items-center justify-center mb-6">
                <Icons.ShieldCheckIcon className="w-6 h-6 text-[#7f54b3]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure Payments</h3>
              <p className="text-gray-400">
                Enterprise-grade security with automatic payment verification and 
                instant order status updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Installation Guide
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                1. Install the Plugin
              </h3>
              <div className="space-y-4">
                <p className="text-gray-400">
                  There are two ways to install the Anypay WooCommerce plugin:
                </p>
                <div className="pl-4">
                  <h4 className="text-white font-medium mb-2">Method A: WordPress Plugin Directory</h4>
                  <ol className="list-decimal pl-4 text-gray-400 space-y-2">
                    <li>Go to WordPress admin → Plugins → Add New</li>
                    <li>Search for "Anypay Crypto Payments"</li>
                    <li>Click "Install Now" then "Activate"</li>
                  </ol>
                </div>
                <div className="pl-4">
                  <h4 className="text-white font-medium mb-2">Method B: Manual Upload</h4>
                  <ol className="list-decimal pl-4 text-gray-400 space-y-2">
                    <li>Download the plugin ZIP file</li>
                    <li>Go to WordPress admin → Plugins → Add New → Upload Plugin</li>
                    <li>Choose the ZIP file and click "Install Now"</li>
                    <li>Click "Activate Plugin"</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                2. Configure the Plugin
              </h3>
              <div className="space-y-4">
                <p className="text-gray-400">
                  Add your Anypay API credentials to enable payments:
                </p>
                <SyntaxHighlighter
                  language="php"
                  style={atomDark}
                  className="rounded-lg"
                >
                  {configExample}
                </SyntaxHighlighter>
                <p className="text-gray-400">
                  Or configure through the WordPress admin:
                </p>
                <ol className="list-decimal pl-8 text-gray-400 space-y-2">
                  <li>Go to WooCommerce → Settings → Payments</li>
                  <li>Click "Manage" next to Anypay</li>
                  <li>Enter your API key and webhook secret</li>
                  <li>Configure which cryptocurrencies to accept</li>
                  <li>Save changes</li>
                </ol>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                3. Test the Integration
              </h3>
              <div className="space-y-4">
                <p className="text-gray-400">
                  Before going live, test the payment flow:
                </p>
                <ol className="list-decimal pl-8 text-gray-400 space-y-2">
                  <li>Enable test mode in plugin settings</li>
                  <li>Create a test product</li>
                  <li>Process a test order using test credentials</li>
                  <li>Verify order status updates correctly</li>
                  <li>Check webhook deliveries in Anypay dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                Which cryptocurrencies are supported?
              </h3>
              <p className="text-gray-400">
                The plugin supports all cryptocurrencies available on Anypay, including Bitcoin,
                Ethereum, and major stablecoins like USDC and USDT.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                How are exchange rates calculated?
              </h3>
              <p className="text-gray-400">
                Exchange rates are pulled in real-time from Anypay's price feed API, ensuring
                accurate pricing in your store's display currency.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                What happens if a payment fails?
              </h3>
              <p className="text-gray-400">
                The plugin automatically handles failed payments, updating order status and
                notifying both merchant and customer. Customers can retry payment if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our support team is ready to help you with your WooCommerce integration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/woocommerce"
              className="bg-[#7f54b3] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#6c4699] transition-colors"
            >
              View Documentation
            </Link>
            <Link
              href="#"
              className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Support
            </Link>
          </div>
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
                <li><Link href="/woocommerce" className="text-gray-400 hover:text-white">WooCommerce</Link></li>
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
                {/* @ts-ignore */}
              </ul>
            </div>

            <WalletList />
            <ChainList />
          </div>
        </div>
      </footer>
    </div>
  )
} 