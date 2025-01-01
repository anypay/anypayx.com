'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'


interface Price {
  id: string
  currency: string
  name: string
  value: number
  change_24h: number
  updated_at: string
  icon_url: string
}

export default function PricesDisplay() {
  const [prices, setPrices] = useState<Price[]>([])

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

    if (data) setPrices(data)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prices.map((price) => (
          <div 
            key={price.id}
            className="bg-gray-900 border bg-[#222] p-6 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-center space-x-4">
            {/*
              <Image
                src={price.icon_url}
                alt={price.name}
                width={40}
                height={40}
                className="rounded-full bg-gray-800 p-1"
              />
              */}
              <div>
                <h3 className="font-semibold text-lg text-white">{price.currency}</h3>
                <p className="text-gray-400">{price.name}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-white">${price.value?.toLocaleString()}</p>
              <div className="flex items-center space-x-2 mt-1">
                {/*<span className={`text-sm ${price.change_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {price.change_24h > 0 ? '↑' : '↓'} 
                  {Math.abs(price.change_24h || 0).toFixed(2)}%
                </span>

                <span className="text-gray-500 text-sm">24h</span>
                                */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 