'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Price {
  id: string
  currency: string
  name: string
  value: number
  change_24hr: number
}

export default function PriceTicker() {
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
    <div className="bg-[#111] border-b border-gray-800 overflow-hidden">
      <div className="animate-ticker-slide whitespace-nowrap flex items-center py-2">
        {[...prices, ...prices].map((price, index) => (
          <div 
            key={`${price.id}-${index}`}
            className="inline-flex items-center mx-4"
          >
            <span className="text-white font-medium">{price.currency}</span>
            <span className="text-gray-400 mx-2">${price.value?.toLocaleString()}</span>
            <span 
              className={`text-sm ${
                price.change_24hr >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {price.change_24hr > 0 ? '+' : ''}{price.change_24hr?.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}