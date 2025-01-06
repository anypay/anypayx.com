'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'

interface Price {
  id: string
  currency: string
  name: string
  value: number
  change_24hr: number
  updated_at: string
  icon_url: string
}

export default function PricesDisplay() {
  const [prices, setPrices] = useState<Price[]>([])
  const [timeframe, setTimeframe] = useState('24h')

  useEffect(() => {
    // Initial fetch
    fetchPrices()
    
    const supabase = createClient()
    // Set up real-time subscription
    const channel = supabase
      .channel('prices')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'prices'
        },
        (payload) => {
          setPrices(current => 
            current.map(price => 
              price.id === payload.new.id ? { ...price, ...payload.new } : price
            )
          )
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function fetchPrices() {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('prices')
      .select('*')
      .order('value', { ascending: false })

      console.log("FETCHED PRICES", data)


    if (data) setPrices(data)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cryptocurrency Price Feed
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time cryptocurrency prices with enterprise-grade reliability. 
            Access current and historical data through our API.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Live Prices</h2>
            <div className="flex space-x-2">
              {['1h', '24h', '7d'].map((time) => (
                <button
                  key={time}
                  onClick={() => setTimeframe(time)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    timeframe === time
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-800">
                  <th className="pb-4 font-medium">Asset</th>
                  <th className="pb-4 font-medium">Price</th>
                  <th className="pb-4 font-medium text-right">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {prices.map((price) => (
                  <tr key={price.id} className="hover:bg-gray-800/50">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={`https://fllboxutscrtbimzpphg.supabase.co/storage/v1/object/public/icons/${price.currency.toLowerCase()}_50x50.png`}
                          alt={price.name}
                          className="w-8 h-8 mr-3"
                        />
                        <div>
                          <div className="font-medium text-white">{price.currency}</div>
                          <div className="text-sm text-gray-400">{price.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-white font-medium">
                        ${price.value?.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      <span
                        className={`inline-block px-2 py-1 rounded-md text-sm ${
                          price.change_24hr >= 0
                            ? 'text-emerald-400 bg-emerald-400/10'
                            : 'text-red-400 bg-red-400/10'
                        }`}
                      >
                        {price.change_24hr > 0 ? '+' : ''}
                        {Math.abs(price.change_24hr|| 0).toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Real-Time Updates</h3>
            <p className="text-gray-400 mb-4">
              Get price updates within milliseconds using our WebSocket API.
            </p>
            <Link
              href="/websockets"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
            >
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Historical Data</h3>
            <p className="text-gray-400 mb-4">
              Access historical price data with granular timeframe options.
            </p>
            <Link

              href="#"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
            >
              View Documentation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Price Alerts</h3>
            <p className="text-gray-400 mb-4">
              Set up custom price alerts and notifications via webhooks.
            </p>
            <Link
              href="#"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
            >
              Set Up Alerts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 