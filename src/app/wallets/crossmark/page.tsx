'use client'

import { useEffect, useState } from 'react'
import sdk from '@crossmarkio/sdk'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PriceTicker from '@/components/PriceTicker'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'

interface BasicUser {
  address: string
  network: string
}

interface CrossmarkEvent {
  type: string
  data: any | {
    'user-change': BasicUser
    'network-change': { network: string }
    'response': any
    'signout': undefined
    'open': undefined
    'close': undefined
    'all': any
    'ping': undefined
    'method-call': { method: string; result: boolean | undefined }
  }
  timestamp: string
}

export default function CrossmarkDemo() {
  const [events, setEvents] = useState<CrossmarkEvent[]>([])
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [isSubmitOpen, setIsSubmitOpen] = useState(false)
  const [submitForm, setSubmitForm] = useState({
    address: '',
    txblob: '',
    description: ''
  })
  const [isSignOpen, setIsSignOpen] = useState(false)
  const [signForm, setSignForm] = useState({
    transactionType: 'Payment',
    destination: '',
    amount: '',
    description: ''
  })

  useEffect(() => {
    // Type the event handlers properly
    const onUserChange = (data: BasicUser) => {
      setEvents(prev => [{
        type: 'user-change',
        data,
        timestamp: new Date().toISOString()
      }, ...prev])
    }
    sdk.on('user-change', onUserChange)

    const onNetworkChange = (data: { network: string }) => {
      setEvents(prev => [{
        type: 'network-change',
        data,
        timestamp: new Date().toISOString()
      }, ...prev])
    }
    sdk.on('network-change', onNetworkChange)

    // Handle other events with specific types
    const onResponse = (data: any) => {
      setEvents(prev => [{
        type: 'response',
        data,
        timestamp: new Date().toISOString()
      }, ...prev])
    }
    sdk.on('response', onResponse)

    const onSignout = () => {
      setEvents(prev => [{
        type: 'signout',
        data: undefined,
        timestamp: new Date().toISOString()
      }, ...prev])
    }
    sdk.on('signout', onSignout)

    const onOpen = () => {
      setEvents(prev => [{
        type: 'open',
        data: undefined,
        timestamp: new Date().toISOString()
      }, ...prev])
    }
    sdk.on('open', onOpen)

    const onClose = () => {
      setEvents(prev => [{
        type: 'close',
        data: undefined,
        timestamp: new Date().toISOString()
      }, ...prev])
    }
    sdk.on('close', onClose)

    const onPing = () => {
      /*setEvents(prev => [{
        type: 'ping',
        data: undefined,
        timestamp: new Date().toISOString()
      }, ...prev])*/
      console.log('ping', {
        type: 'ping',
        data: undefined,
        timestamp: new Date().toISOString()
      })
    }
    sdk.on('ping', onPing)



    // All events catch-all
    const onAll = (data: any) => {
      setEvents(prev => [{
        type: 'all',
        data,
        timestamp: new Date().toISOString()
      }, ...prev])
    }
    sdk.on('all', onAll)

    return () => {
      // Cleanup listeners
      sdk.off('user-change', onUserChange)
      sdk.off('network-change', onNetworkChange)
      sdk.off('response', onResponse)
      sdk.off('signout', onSignout)
      sdk.off('open', onOpen)
      sdk.off('close', onClose)
      sdk.off('ping', onPing)
      sdk.off('all', onAll)
    }
  }, [])

  async function connectWallet() {
    try {
      const { response } = await sdk.methods.signInAndWait()
      setAddress(response.data.address)
      setConnected(true)
    } catch (error) {
      console.error('Connection error:', error)
    }
  }

  async function sendTestPayment() {
    if (!address) return

    try {
      const { response } = await sdk.methods.signAndSubmitAndWait({
        TransactionType: 'Payment',
        Account: address,
        Destination: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
        Amount: '1000000' // 1 XRP
      })
      console.log('Payment response:', response)
    } catch (error) {
      console.error('Payment error:', error)
    }
  }

  async function testBulkSign() {
    if (!address) return
    try {
      const { response } = await sdk.methods.bulkSignAndWait([{
        TransactionType: 'Payment',
        Account: address,
        Destination: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
        Amount: '1000000'
      }])
      console.log('Bulk sign response:', response)
    } catch (error) {
      console.error('Bulk sign error:', error)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const result = await sdk.methods.submit(
        submitForm.address,
        submitForm.txblob,
        { description: submitForm.description }
      )
      setEvents(prev => [{
        type: 'method-call',
        data: { method: 'submit', result },
        timestamp: new Date().toISOString()
      }, ...prev])
      setIsSubmitOpen(false)
      setSubmitForm({ address: '', txblob: '', description: '' })
    } catch (error) {
      console.error('Submit error:', error)
    }
  }

  async function handleSignInAndWait() {
    try {
      // Optional: You can pass a hex message to be signed
      const hexMessage = "48656C6C6F20576F726C64"; // "Hello World" in hex
      
      const { request, response, createdAt, resolvedAt } = await sdk.methods.signInAndWait(hexMessage)
      
      setEvents(prev => [{
        type: 'method-call',
        data: { 
          method: 'signInAndWait',
          request,
          response,
          createdAt: createdAt ? new Date(createdAt).toISOString() : '',
          resolvedAt: resolvedAt ? new Date(resolvedAt).toISOString() : ''
        },
        timestamp: new Date().toISOString()
      }, ...prev])

      // If successful, update the connected state and address
      if (response?.data?.address) {
        setAddress(response.data.address)
        setConnected(true)
      }
    } catch (error) {
      console.error('SignInAndWait error:', error)
    }
  }

  return (
    <div className="bg-[#111] min-h-screen">
      <PriceTicker />
      {/* Header */}
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
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-gray-100">
                  Crossmark Wallet Integration
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  The most secure and user-friendly way to interact with the XRPL. Connect your Crossmark wallet to get started.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://chrome.google.com/webstore/detail/crossmark/cjkmjflaboombgmhfgbmmlbocjpljnga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Install Crossmark
                  </a>
                  <a 
                    href="https://docs.crossmark.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    View Docs
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <img 
                  src="https://docs.crossmark.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon.296017e6.png&w=3840&q=75"
                  alt="Crossmark Logo"
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
                <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
                <p className="text-gray-300">
                  Sign transactions securely with your Crossmark wallet. Your private keys never leave your device.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
                <p className="text-gray-300">
                  Simple SDK for developers to integrate XRPL functionality into their applications.
                </p>
              </div>
              <div className="bg-black/50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Full Control</h3>
                <p className="text-gray-300">
                  Manage your XRPL accounts with complete control over your assets and transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Interactive Demo</h2>
          
          {/* Connection Section */}
          <div className="bg-black/50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Wallet Connection</h2>
            {!connected ? (
              <button
                onClick={connectWallet}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
              >
                Connect Crossmark
              </button>
            ) : (
              <div>
                <p className="mb-4">Connected Address: {address}</p>
                <button
                  onClick={sendTestPayment}
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
                >
                  Send Test Payment
                </button>
              </div>
            )}
          </div>

          {/* Two-column layout for Methods and Event Log */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Methods Column */}
            <div className="space-y-8">
              {/* Synchronous Methods */}
              <div className="bg-black/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Synchronous Methods</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={async () => {
                      const result = await sdk.methods.version()
                      setEvents(prev => [{
                        type: 'method-call',
                        data: { method: 'version', result },
                        timestamp: new Date().toISOString()
                      }, ...prev])
                    }}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
                  >
                    Version
                  </button>
                  <button
                    onClick={async () => {
                      const result = await sdk.methods.isOpen()
                      setEvents(prev => [{
                        type: 'method-call',
                        data: { method: 'isOpen', result },
                        timestamp: new Date().toISOString()
                      }, ...prev])
                    }}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
                  >
                    Is Open
                  </button>
                  <button
                    onClick={async () => {
                      const result = await sdk.methods.isConnected()
                      setEvents(prev => [{
                        type: 'method-call',
                        data: { method: 'isConnected', result },
                        timestamp: new Date().toISOString()
                      }, ...prev])
                    }}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
                  >
                    Is Connected
                  </button>
                  <button
                    onClick={async () => {
                      const result = await sdk.methods.isInstalled()
                      setEvents(prev => [{
                        type: 'method-call',
                        data: { method: 'isInstalled', result },
                        timestamp: new Date().toISOString()
                      }, ...prev])
                    }}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
                  >
                    Is Installed
                  </button>
                  <button
                    onClick={() => setIsSubmitOpen(true)}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded"
                  >
                    Submit Transaction
                  </button>
                </div>
              </div>

              {/* Asynchronous Methods */}
              <div className="bg-black/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Asynchronous Methods</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={async () => {
                      try {
                        const result = await sdk.methods.detect()
                        setEvents(prev => [{
                          type: 'method-call',
                          data: { method: 'detect', result },
                          timestamp: new Date().toISOString()
                        }, ...prev])
                      } catch (error) {
                        console.error('Detect error:', error)
                      }
                    }}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                  >
                    Detect
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        const result = await sdk.methods.connect()
                        setEvents(prev => [{
                          type: 'method-call',
                          data: { method: 'connect', result },
                          timestamp: new Date().toISOString()
                        }, ...prev])
                      } catch (error) {
                        console.error('Connect error:', error)
                      }
                    }}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                  >
                    Connect
                  </button>
                  <button
                    onClick={() => setIsSignOpen(true)}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                  >
                    Sign Transaction
                  </button>
                  <button
                    onClick={testBulkSign}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                  >
                    Bulk Sign
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        const result = await sdk.methods.versionAndWait()
                        setEvents(prev => [{
                          type: 'method-call',
                          data: { method: 'versionAndWait', result },
                          timestamp: new Date().toISOString()
                        }, ...prev])
                      } catch (error) {
                        console.error('Version error:', error)
                      }
                    }}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                  >
                    Version (Async)
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        const result = await sdk.methods.isLockedAndWait()
                        setEvents(prev => [{
                          type: 'method-call',
                          data: { method: 'isLockedAndWait', result },
                          timestamp: new Date().toISOString()
                        }, ...prev])
                      } catch (error) {
                        console.error('IsLocked error:', error)
                      }
                    }}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                  >
                    Is Locked (Async)
                  </button>
                  <button
                    onClick={handleSignInAndWait}
                    className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                  >
                    Sign In and Wait
                  </button>
                </div>
              </div>
            </div>

            {/* Event Log Column - Sticky on Desktop */}
            <div className="lg:sticky lg:top-4 h-fit">
              <div className="bg-black/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Event Log</h2>
                <div className="h-[600px] overflow-y-auto">
                  {events.map((event, index) => (
                    <div key={index} className="border-b border-gray-700 py-2">
                      <div className="text-sm text-gray-400">{event.timestamp}</div>
                      <div className="font-semibold text-blue-400">{event.type}</div>
                      <pre className="text-sm overflow-x-auto">
                        {JSON.stringify(event.data, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        <Dialog open={isSubmitOpen} onOpenChange={setIsSubmitOpen}>
          <DialogContent className="bg-[#111] border border-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle>Submit Transaction</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Address</label>
                <Input
                  value={submitForm.address}
                  className="text-gray-900"
                  onChange={(e) => setSubmitForm(prev => ({ ...prev, address: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Transaction Blob (hex)</label>
                <Textarea
                  value={submitForm.txblob}
                  onChange={(e) => setSubmitForm(prev => ({ ...prev, txblob: e.target.value }))}
                  className="h-24 text-gray-900"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description (optional)</label>
                <Input
                  value={submitForm.description}
                  className="text-gray-900"
                  onChange={(e) => setSubmitForm(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <DialogFooter>
                <Button className="text-gray-900" type="button" variant="outline" onClick={() => setIsSubmitOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isSignOpen} onOpenChange={setIsSignOpen}>
          <DialogContent className="bg-[#111] border border-gray-800">
            <DialogHeader>
              <DialogTitle>Sign Transaction</DialogTitle>
            </DialogHeader>
            <form onSubmit={async (e) => {
              e.preventDefault()
              if (!address) return

              try {
                const { request, response, createdAt, resolvedAt } = await sdk.methods.signAndWait({
                  //@ts-ignore
                  TransactionType: signForm.transactionType,
                  Account: address,
                  Destination: signForm.destination,
                  Amount: signForm.amount, // Amount in drops (1 XRP = 1,000,000 drops)
                }, {
                  description: signForm.description
                })

                setEvents(prev => [{
                  type: 'method-call',
                  data: {
                    method: 'signAndWait',
                    request,
                    response,
                    createdAt: createdAt ? new Date(createdAt).toISOString() : '',
                    resolvedAt: resolvedAt ? new Date(resolvedAt).toISOString() : ''
                  },
                  timestamp: new Date().toISOString()
                }, ...prev])

                setIsSignOpen(false)
                setSignForm({
                  transactionType: 'Payment',
                  destination: '',
                  amount: '',
                  description: ''
                })
              } catch (error) {
                console.error('SignAndWait error:', error)
              }
            }} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Transaction Type</label>
                <Input
                  value={signForm.transactionType}
                  onChange={(e) => setSignForm(prev => ({ ...prev, transactionType: e.target.value }))}
                  placeholder="Payment"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Destination Address</label>
                <Input
                  value={signForm.destination}
                  onChange={(e) => setSignForm(prev => ({ ...prev, destination: e.target.value }))}
                  placeholder="rK8jihXBZCFWZqX95SET3CCi1WdRgZQwex"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Amount (in drops)</label>
                <Input
                  value={signForm.amount}
                  onChange={(e) => setSignForm(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="1000000 (1 XRP)"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description (optional)</label>
                <Input
                  value={signForm.description}
                  onChange={(e) => setSignForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Payment description"
                />
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsSignOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={!address}>
                  Sign Transaction
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
} 