'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'
import { Highlight, themes } from 'prism-react-renderer'

interface NavItem {
  title: string
  id: string
  subitems?: { title: string; id: string }[]
}

interface WebSocketConfig {
  url: string
  apiKey?: string
}

export default function WebSocketsDocs() {
  const [activeSection, setActiveSection] = useState('overview')
  const [wsConfig, setWsConfig] = useState<WebSocketConfig>({
    url: 'wss://ws.anypayx.com',
    apiKey: ''
  })

  const navigation: NavItem[] = [
    {
      title: 'Getting Started',
      id: 'getting-started',
      subitems: [
        { title: 'Overview', id: 'overview' },
        { title: 'Configuration', id: 'configuration' },
        { title: 'Connection', id: 'connection' },
        { title: 'Authentication', id: 'authentication' }
      ]
    },
    {
      title: 'Event Types',
      id: 'event-types',
      subitems: [
        { title: 'Transaction Events', id: 'transaction-events' },
        { title: 'Block Events', id: 'block-events' },
        { title: 'Price Events', id: 'price-events' },
        { title: 'Inscription Events', id: 'inscription-events' }
      ]
    },
    {
      title: 'Subscriptions',
      id: 'subscriptions',
      subitems: [
        { title: 'Address Monitoring', id: 'address-monitoring' },
        { title: 'Price Updates', id: 'price-updates' },
        { title: 'Block Notifications', id: 'block-notifications' }
      ]
    },
    {
      title: 'Error Handling',
      id: 'error-handling',
      subitems: [
        { title: 'Error Codes', id: 'error-codes' },
        { title: 'Reconnection', id: 'reconnection' }
      ]
    }
  ]

  const getConnectionExample = (config: WebSocketConfig) => `
const config = {
  url: '${config.url}'${config.apiKey ? `,
  apiKey: '${config.apiKey}'` : ''}
}

const ws = new WebSocket(config.url)

ws.onopen = () => {
  console.log('Connected to WebSocket')
  ${config.apiKey ? `
  // Send authentication if API key is provided
  ws.send(JSON.stringify({
    type: 'auth',
    apiKey: config.apiKey
  }))` : ''}
}

ws.onclose = () => {
  console.log('Disconnected from WebSocket')
}`

  const eventExamples = {
    transaction: `{
  "type": "transaction",
  "data": {
    "txid": "abc123...",
    "amount": 1.5,
    "from": "1ABC...",
    "to": "1XYZ...",
    "confirmations": 0,
    "timestamp": 1234567890
  }
}`,
    block: `{
  "type": "block",
  "data": {
    "height": 123456,
    "hash": "000abc...",
    "transactions": 2500,
    "timestamp": 1234567890
  }
}`,
    price: `{
  "type": "price",
  "data": {
    "symbol": "BTC",
    "price": 45000.00,
    "change_24h": 2.5,
    "timestamp": 1234567890
  }
}`
  }

  const subscriptionExamples = {
    address: `{
  "type": "subscribe",
  "channel": "address",
  "data": {
    "addresses": ["1ABC...", "1XYZ..."]
  }
}`,
    price: `{
  "type": "subscribe",
  "channel": "price",
  "data": {
    "symbols": ["BTC", "ETH"],
    "interval": "1m"
  }
}`
  }

  return (
    <div className="bg-[#111] min-h-screen text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-[#111] z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link href="/websockets" className="text-gray-300 hover:text-white transition-colors">
                Demo
              </Link>
              {/* <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link> */}
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

      <div className="container mx-auto px-4 py-8">
        {/* Configuration Panel */}
        <div className="mb-8 p-4 bg-black/30 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">WebSocket Configuration</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-2">
                WebSocket URL
              </label>
              <input
                type="text"
                value={wsConfig.url}
                onChange={(e) => setWsConfig(prev => ({ ...prev, url: e.target.value }))}
                className="w-full px-3 py-2 bg-black/50 rounded border border-gray-700 text-white"
                placeholder="wss://your-websocket-url"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-2">
                API Key (Optional)
              </label>
              <input
                type="text"
                value={wsConfig.apiKey}
                onChange={(e) => setWsConfig(prev => ({ ...prev, apiKey: e.target.value }))}
                className="w-full px-3 py-2 bg-black/50 rounded border border-gray-700 text-white"
                placeholder="Your API key"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24">
              <nav className="space-y-8">
                {navigation.map((section) => (
                  <div key={section.id}>
                    <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      {section.title}
                    </h5>
                    <ul className="space-y-2">
                      {section.subitems?.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveSection(item.id)}
                            className={`text-sm w-full text-left px-2 py-1 rounded transition-colors ${
                              activeSection === item.id
                                ? 'text-blue-400 bg-blue-500/10'
                                : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Overview Section */}
            <section id="overview" className={activeSection === 'overview' ? 'block' : 'hidden'}>
              <h1 className="text-4xl font-bold mb-6">WebSocket API Overview</h1>
              <p className="text-gray-300 mb-6">
                The AnyPay WebSocket API provides real-time access to cryptocurrency data,
                including transactions, blocks, and price updates. This documentation covers
                everything you need to integrate our WebSocket API into your application.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>Real-time transaction monitoring</li>
                <li>Live price updates</li>
                <li>Block notifications</li>
                <li>Inscription tracking</li>
                <li>Address balance changes</li>
              </ul>
            </section>

            {/* Configuration Section */}
            <section id="configuration" className={activeSection === 'configuration' ? 'block' : 'hidden'}>
              <h1 className="text-4xl font-bold mb-6">Configuration</h1>
              <p className="text-gray-300 mb-6">
                Configure your WebSocket connection with custom endpoints and authentication.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Connection Options</h2>
              <Highlight
                theme={themes.nightOwl}
                code={`
interface WebSocketConfig {
  url: string;
  apiKey?: string;
}

const config: WebSocketConfig = {
  url: '${wsConfig.url}',${wsConfig.apiKey ? `
  apiKey: '${wsConfig.apiKey}',` : ''}
}`}
                language="typescript"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className="p-6 bg-black/50 rounded-lg overflow-x-auto" style={style}>
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
            </section>

            {/* Connection Section */}
            <section id="connection" className={activeSection === 'connection' ? 'block' : 'hidden'}>
              <h1 className="text-4xl font-bold mb-6">Establishing a Connection</h1>
              <p className="text-gray-300 mb-6">
                Connect to your WebSocket endpoint using the following configuration:
              </p>

              <div className="bg-black/50 p-4 rounded-lg mb-6">
                <code className="text-blue-400">{wsConfig.url}</code>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Connection Example</h2>
              <Highlight
                theme={themes.nightOwl}
                code={getConnectionExample(wsConfig)}
                language="javascript"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className="p-6 bg-black/50 rounded-lg overflow-x-auto" style={style}>
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
            </section>

            {/* Transaction Events Section */}
            <section id="transaction-events" className={activeSection === 'transaction-events' ? 'block' : 'hidden'}>
              <h1 className="text-4xl font-bold mb-6">Transaction Events</h1>
              <p className="text-gray-300 mb-6">
                Receive real-time notifications for new transactions and mempool updates.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Event Format</h2>
              <Highlight
                theme={themes.nightOwl}
                code={eventExamples.transaction}
                language="json"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className="p-6 bg-black/50 rounded-lg overflow-x-auto" style={style}>
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
            </section>

            {/* Address Monitoring Section */}
            <section id="address-monitoring" className={activeSection === 'address-monitoring' ? 'block' : 'hidden'}>
              <h1 className="text-4xl font-bold mb-6">Address Monitoring</h1>
              <p className="text-gray-300 mb-6">
                Subscribe to receive updates for specific addresses.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Subscription Format</h2>
              <Highlight
                theme={themes.nightOwl}
                code={subscriptionExamples.address}
                language="json"
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className="p-6 bg-black/50 rounded-lg overflow-x-auto" style={style}>
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
            </section>

            {/* Add more sections for other documentation content */}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
} 