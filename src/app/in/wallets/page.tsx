'use client'

import { useState, useMemo } from 'react'
import { useWallets, Wallet, Coin } from '@/hooks/useWallets'
import * as Icons from '@heroicons/react/24/outline'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface AddWalletFormData {
  address: string
  chain: string
  currency: string
  label?: string
}

export default function WalletsPage() {
  const { wallets, coins, loading, error, addWallet, updateWallet, deleteWallet } = useWallets()
  const [isAddingWallet, setIsAddingWallet] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [selectedCoin, setSelectedCoin] = useState<string>('')
  const [editingWallet, setEditingWallet] = useState<Wallet | null>(null)

  console.log('Coins:', coins)
  console.log('Wallets:', wallets)

  const coinsByChain = useMemo(() => {
    console.log('Grouping coins by chain:', coins)
    return coins.reduce((acc, coin) => {
      if (!acc[coin.chain]) {
        acc[coin.chain] = []
      }
      acc[coin.chain].push(coin)
      return acc
    }, {} as Record<string, Coin[]>)
  }, [coins])

  const handleCoinSelect = (coinId: string) => {
    console.log('SELECTING COIN', coinId)
    const coin = coins.find(c => c.id === coinId)
    if (coin) {
      setSelectedCoin(coinId)
      setFormData(prev => ({
        ...prev,
        chain: coin.chain,
        currency: coin.currency
      }))
    }
  }

  const handleSubmit = async (coin: Coin, address: string) => {
    console.log('Submitting wallet:', { coin, address })
    try {
      await addWallet({
        value: address,
        chain: coin.chain,
        currency: coin.currency,
        note: `${coin.name} Wallet`
      })
      setFormData(prev => ({ ...prev, [coin.id]: '' }))
    } catch (err: any) {
      console.error('Error adding wallet:', err)
    }
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingWallet) return

    try {
      await updateWallet(editingWallet.id, editingWallet)
      setEditingWallet(null)
    } catch (err: any) {
      console.error('Error updating wallet:', err)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading wallets...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Wallets</h1>
        <button
          onClick={() => setIsAddingWallet(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
        >
          <Icons.PlusIcon className="w-5 h-5 mr-2" />
          Add Wallet
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 text-red-500 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {isAddingWallet && (
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
            {/* @ts-ignore */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Coin
              </label>
              <select
                value={selectedCoin}
                onChange={(e) => handleCoinSelect(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white"
                required
              >
                <option value="">Select a coin</option>
                {Object.entries(coinsByChain).map(([chain, chainCoins]) => (
                  <optgroup key={chain} label={chain}>
                    {chainCoins.map(coin => (
                      <option key={coin.id} value={coin.id}>
                        {coin.name} ({coin.currency})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Label (optional)
              </label>
              <input
                type="text"
                value={formData.note}
                onChange={(e) => setFormData(prev => ({ ...prev, note: e.target.value }))}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => {
                  setIsAddingWallet(false)
                  setSelectedCoin('')
                  setFormData({ address: '', chain: '', currency: '', note: '' })
                }}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add Wallet
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-8">
        {Object.entries(coinsByChain).map(([chain, chainCoins]) => {
          console.log('Rendering chain:', chain, 'with coins:', chainCoins)
          return (
            <div key={chain}>
              <div className="space-y-4">
                {chainCoins.map(coin => {
                  console.log('Rendering coin:', coin)
                  const existingWallet = wallets.find(w => 
                    w.chain === coin.chain && w.currency === coin.currency
                  )

                  return (
                    <Card key={coin.id} className="bg-gray-900/50 border-gray-800 pt-5">
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 relative">
                              <Image
                                src={coin.logo_url || `/coins/${coin.code.toLowerCase()}.svg`}
                                alt={coin.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                            </div>
                            <div>
                              <h3 className="text-white font-medium">{coin.name}</h3>
                              <p className="text-sm text-gray-400">{coin.currency}</p>
                            </div>
                          </div>
                          {existingWallet && (
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setEditingWallet(existingWallet)}
                                className="text-gray-400 hover:text-white"
                              >
                                <Icons.PencilIcon className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => deleteWallet(existingWallet.id)}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <Icons.TrashIcon className="w-5 h-5" />
                              </button>
                            </div>
                          )}
                        </div>

                        {existingWallet ? (
                          <div>
                            <p className="text-white font-mono text-sm break-all mb-2">
                              {existingWallet.value}
                            </p>
                            {existingWallet.note && (
                              <p className="text-gray-400 text-sm">
                                {existingWallet.note}
                              </p>
                            )}
                          </div>
                        ) : (
                          <form 
                            className="flex gap-4"
                            onSubmit={(e) => {
                              e.preventDefault()
                              const address = formData[coin.id]
                              if (address) {
                                handleSubmit(coin, address)
                              }
                            }}
                          >
                            <input
                              type="text"
                              value={formData[coin.id] || ''}
                              onChange={(e) => {
                                setFormData(prev => ({
                                  ...prev,
                                  [coin.id]: e.target.value
                                }))
                              }}
                              placeholder={`Enter ${coin.currency} address`}
                              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                            />
                            <button
                              type="submit"
                              disabled={!formData[coin.id]}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Save
                            </button>
                          </form>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
} 