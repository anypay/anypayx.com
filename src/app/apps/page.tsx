'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CodeBracketIcon, CurrencyDollarIcon, BoltIcon, ArrowRightIcon,
  BuildingStorefrontIcon, ChartBarIcon, CreditCardIcon, CommandLineIcon,
  CubeTransparentIcon, ArrowsPointingOutIcon, KeyIcon, ShieldCheckIcon,
  ArrowPathIcon, LockClosedIcon, CircleStackIcon, LightBulbIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Ticker from '@/components/PriceTicker'

const CodeExample = ({ code, language }: { code: string, language: string }) => (
  <div className="bg-[#222] rounded-lg p-4 font-mono text-sm">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-400">{language}</span>
      <button 
        onClick={() => navigator.clipboard.writeText(code)}
        className="text-gray-400 hover:text-gray-300 text-xs"
      >
        Copy
      </button>
    </div>
    <pre className="text-gray-300 overflow-x-auto">
      <code>{code}</code>
    </pre>
  </div>
)

const examples = {
  createInvoice: `const response = await fetch('https://api.anypay.com/v1/invoices', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_APP_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 100,
    currency: 'USD',
    metadata: {
      orderId: '12345',
      customer: 'john@example.com'
    }
  })
});

const invoice = await response.json();`,

  webhook: `app.post('/webhook', (req, res) => {
  const payment = req.body;
  
  if (payment.status === 'confirmed') {
    // Payment confirmed! Update your database
    await updateOrder(payment.metadata.orderId);
    
    // Send confirmation to customer
    await sendEmail(payment.metadata.customer);
  }
  
  res.sendStatus(200);
});`
}

export default function AppsMarketingPage() {
  const [activeExample, setActiveExample] = useState('createInvoice')

  return (
    <div className="min-h-screen flex flex-col bg-[#111]">
      <Header />
      <Ticker />

      <main className="flex-grow">
        {/* Hero Section - Now with gradient background */}
        <div className="bg-gradient-to-b from-purple-900/20 to-[#111] pt-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="text-purple-400 font-semibold mb-4 block">
                ANYPAY APPS PLATFORM
              </span>
              <h1 className="text-5xl font-bold text-gray-100 mb-6">
                Your Gateway to Web3 Payments
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Create powerful payment experiences with dedicated environments for your apps.
                Whether you're building a marketplace, SaaS platform, or digital store,
                Anypay Apps provide the tools you need to succeed in web3.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-900 text-purple-100 hover:bg-purple-800 transition-colors"
                >
                  Start Building <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-[#222] text-gray-100 hover:bg-[#333] transition-colors border border-gray-800"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Why Apps Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Why Choose Anypay Apps?
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-purple-900/20 to-[#222] p-6 rounded-lg border border-purple-900/50">
                <BuildingStorefrontIcon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Business Organization
                </h3>
                <p className="text-gray-300">
                  Create separate apps for different business units, products, or services.
                  Track revenue streams independently and maintain clear financial boundaries.
                </p>
              </div>

              <div className="bg-gradient-to-b from-emerald-900/20 to-[#222] p-6 rounded-lg border border-emerald-900/50">
                <ChartBarIcon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Analytics & Insights
                </h3>
                <p className="text-gray-300">
                  Get detailed payment analytics for each app. Monitor transaction volumes,
                  popular payment methods, and success rates to optimize your business.
                </p>
              </div>

              <div className="bg-gradient-to-b from-rose-900/20 to-[#222] p-6 rounded-lg border border-rose-900/50">
                <CreditCardIcon className="w-12 h-12 text-rose-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  Custom Payment Flows
                </h3>
                <p className="text-gray-300">
                  Design unique payment experiences for different use cases.
                  Each app can have its own webhook endpoints and success/failure flows.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Developer Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 bg-gradient-to-r from-[#222] to-purple-900/20 rounded-lg p-8 border border-purple-900/50"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Built for Developers</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Our developer-first approach means you get the tools you need to build
                    quickly and scale effectively. Each app comes with:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CommandLineIcon className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0" />
                      <span>Dedicated API keys for secure, isolated environments</span>
                    </li>
                    <li className="flex items-start">
                      <BoltIcon className="w-6 h-6 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>Real-time webhooks for instant payment notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CubeTransparentIcon className="w-6 h-6 text-rose-400 mr-2 flex-shrink-0" />
                      <span>Multi-chain support with unified API interface</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowsPointingOutIcon className="w-6 h-6 text-amber-400 mr-2 flex-shrink-0" />
                      <span>Scalable infrastructure that grows with your needs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <CodeExample 
                  code={examples[activeExample as keyof typeof examples]}
                  language={activeExample === 'createInvoice' ? 'JavaScript' : 'Node.js'}
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setActiveExample('createInvoice')}
                    className={`px-4 py-2 rounded ${
                      activeExample === 'createInvoice' 
                        ? 'bg-purple-900 text-purple-100' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    Create Invoice
                  </button>
                  <button
                    onClick={() => setActiveExample('webhook')}
                    className={`px-4 py-2 rounded ${
                      activeExample === 'webhook' 
                        ? 'bg-purple-900 text-purple-100' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    Handle Webhook
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-400">
                Endless Possibilities
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce",
                  description: "Accept crypto payments for your online store with automatic order fulfillment.",
                  gradient: "from-purple-900/20",
                  border: "border-purple-900/50",
                  icon: BuildingStorefrontIcon,
                  iconColor: "text-purple-400"
                },
                {
                  title: "SaaS Platforms",
                  description: "Handle subscriptions and recurring payments for your software service.",
                  gradient: "from-emerald-900/20",
                  border: "border-emerald-900/50",
                  icon: CubeTransparentIcon,
                  iconColor: "text-emerald-400"
                },
                {
                  title: "Marketplaces",
                  description: "Build multi-vendor platforms with split payments and automated settlements.",
                  gradient: "from-rose-900/20",
                  border: "border-rose-900/50",
                  icon: CreditCardIcon,
                  iconColor: "text-rose-400"
                }
              ].map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div 
                    key={index}
                    className={`bg-gradient-to-b ${useCase.gradient} to-[#222] p-6 rounded-lg border ${useCase.border}`}
                  >
                    <Icon className={`w-12 h-12 ${useCase.iconColor} mb-4`} />
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300">
                      {useCase.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* API Keys & Webhooks Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-400">
                Isolated Environments
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-b from-rose-900/20 to-[#222] p-8 rounded-lg border border-rose-900/50">
                <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
                  <KeyIcon className="w-6 h-6 text-rose-400" />
                  Dedicated API Keys
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Each app gets its own unique API key, providing:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ShieldCheckIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                      <span>Isolated security boundaries between different parts of your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowPathIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                      <span>Ability to rotate keys without affecting other apps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <LockClosedIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                      <span>Granular access control and permission management</span>
                    </li>
                  </ul>
                  <div className="bg-[#111] p-4 rounded-lg border border-rose-900/50 font-mono text-sm">
                    <p className="text-gray-400 mb-2">// Example API key format</p>
                    <p className="text-rose-300">anypay_app_k3y_01HFGH...</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-purple-900/20 to-[#222] p-8 rounded-lg border border-purple-900/50">
                <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
                  <BoltIcon className="w-6 h-6 text-purple-400" />
                  Custom Webhooks
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Configure separate webhook endpoints for each app to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowsPointingOutIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span>Route payment notifications to different services or endpoints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleStackIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span>Maintain separate databases for different business units</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CommandLineIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span>Test integrations safely with app-specific endpoints</span>
                    </li>
                  </ul>
                  <div className="bg-[#111] p-4 rounded-lg border border-purple-900/50 font-mono text-sm">
                    <p className="text-gray-400 mb-2">// Webhook configuration</p>
                    <p className="text-purple-300">https://api.yourapp.com/payments/webhook</p>
                    <p className="text-purple-300">https://staging.yourapp.com/payments/webhook</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#222] to-emerald-900/20 rounded-lg border border-emerald-900/50">
              <h4 className="text-lg font-semibold text-gray-100 mb-3 flex items-center gap-2">
                <LightBulbIcon className="w-5 h-5 text-emerald-400" />
                Pro Tip
              </h4>
              <p className="text-gray-300">
                Use different apps for staging and production environments. This allows you to test new features
                and integrations without risking your live payment flows. Each app's API key and webhook configuration
                remains completely separate, ensuring your testing never impacts real transactions.
              </p>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-purple-900/20 to-[#222] rounded-lg p-12 border border-purple-900/50 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Ready to Transform Your Payments?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already building the future of payments with Anypay Apps.
              Get started in minutes with our developer-friendly platform.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/auth/signup"
                className="px-6 py-3 rounded-lg bg-purple-900 text-purple-100 hover:bg-purple-800 transition-colors"
              >
                Create Account
              </Link>
              <Link
                href="#"
                className="px-6 py-3 rounded-lg bg-[#222] text-gray-300 hover:bg-[#333] transition-colors border border-gray-800"
              >
                View Documentation
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
} 