'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Dialog } from '@headlessui/react'
import SetAddressCard from '@/components/SetAddressCard'

interface Coin {
  id: string
  name: string
  code: string
  chain: string
  currency: string
  logo_url: string
  supported: boolean
  unavailable: boolean
  updated_at: string
}

interface NewCoin {
  name: string
  code: string
  chain: string
  currency: string
  logo_url: string
  supported: boolean
  unavailable: boolean
}

const initialNewCoin: NewCoin = {
  name: '',
  code: '',
  chain: '',
  currency: '',
  logo_url: '',
  supported: true,
  unavailable: false
}

export default function CoinsAdmin() {
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [newCoin, setNewCoin] = useState<NewCoin>(initialNewCoin)
  const [editingCoin, setEditingCoin] = useState<Coin | null>(null)

  useEffect(() => {
    fetchCoins()
    setupRealtimeSubscription()
  }, [])

  function setupRealtimeSubscription() {
    const supabase = createClient()
    
    const channel = supabase
      .channel('coins-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'coins'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setCoins(current => [...current, payload.new as Coin])
          } else if (payload.eventType === 'UPDATE') {
            // fetch coins again to get the updated coin
            fetchCoins()

          } else if (payload.eventType === 'DELETE') {
            setCoins(current => 
              current.filter(coin => coin.id !== payload.old.id)
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }

  async function fetchCoins() {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('coins')
      .select('*')
      .order('name')

    if (error) {
      setError(error.message)
    } else {
      setCoins(data || [])
    }
    
    setLoading(false)
  }

  async function handleAddCoin(e: React.FormEvent) {
    e.preventDefault()
    const supabase = createClient()
    
    const { error } = await supabase
      .from('coins')
      .insert([newCoin])

    if (error) {
      setError(error.message)
    } else {
      setIsAddOpen(false)
      setNewCoin(initialNewCoin)
    }
  }

  async function updateCoinField(coinId: string, field: string, value: boolean) {
    const supabase = createClient()
    
    const { error } = await supabase
      .from('coins')
      .update({ [field]: value })
      .eq('id', coinId)

    if (error) {
      setError(error.message)
    }
  }

  async function handleEditCoin(e: React.FormEvent) {
    e.preventDefault()
    if (!editingCoin) return

    const supabase = createClient()
    
    const { error } = await supabase
      .from('coins')
      .update({
        name: editingCoin.name,
        code: editingCoin.code,
        chain: editingCoin.chain,
        currency: editingCoin.currency,
        logo_url: editingCoin.logo_url,
        supported: editingCoin.supported,
        unavailable: editingCoin.unavailable
      })
      .eq('id', editingCoin.id)

    if (error) {
      setError(error.message)
    } else {
      setIsEditOpen(false)
      setEditingCoin(null)
    }
  }

  if (loading) {
    return <div className="text-white">Loading...</div>
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Manage Coins</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add New Coin
        </button>
      </div>
      
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Code
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Chain
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Currency
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Logo
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Supported
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Unavailable
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Last Updated
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {coin.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {coin.code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {coin.chain}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {coin.currency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  <img 
                    src={coin.logo_url} 
                    alt={coin.name}
                    className="w-8 h-8 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={coin.supported}
                    onChange={(e) => updateCoinField(coin.id, 'supported', e.target.checked)}
                    className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={coin.unavailable}
                    onChange={(e) => updateCoinField(coin.id, 'unavailable', e.target.checked)}
                    className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {new Date(coin.updated_at).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => {
                      setEditingCoin(coin)
                      setIsEditOpen(true)
                    }}
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >

        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Panel className="relative bg-gray-900 rounded-lg p-8 max-w-md w-full mx-4">
            <Dialog.Title className="text-lg font-medium text-white mb-6">
              Add New Coin
            </Dialog.Title>

            <form onSubmit={handleAddCoin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={newCoin.name}
                  onChange={(e) => setNewCoin({ ...newCoin, name: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Code
                </label>
                <input
                  type="text"
                  value={newCoin.code}
                  onChange={(e) => setNewCoin({ ...newCoin, code: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Chain
                </label>
                <input
                  type="text"
                  value={newCoin.chain}
                  onChange={(e) => setNewCoin({ ...newCoin, chain: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Currency
                </label>
                <input
                  type="text"
                  value={newCoin.currency}
                  onChange={(e) => setNewCoin({ ...newCoin, currency: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Logo URL
                </label>
                <input
                  type="url"
                  value={newCoin.logo_url}
                  onChange={(e) => setNewCoin({ ...newCoin, logo_url: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Supported
                </label>
                <input
                  type="checkbox"
                  //@ts-ignore
                  value={newCoin.supported}
                  checked={newCoin.supported}
                  onChange={(e) => setNewCoin({ ...newCoin, supported: e.target.checked })}
                  className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Unavailable
                </label>
                <input
                  type="checkbox"
                  //@ts-ignore
                  value={newCoin.unavailable}
                  checked={newCoin.unavailable}
                  onChange={(e) => setNewCoin({ ...newCoin, unavailable: e.target.checked })}
                  className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add Coin
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      <Dialog
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Panel className="relative bg-gray-900 rounded-lg p-8 max-w-md w-full mx-4">
            <Dialog.Title className="text-lg font-medium text-white mb-6">
              Edit Coin
            </Dialog.Title>

            {editingCoin && (
              <form onSubmit={handleEditCoin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={editingCoin.name}
                    onChange={(e) => setEditingCoin({ ...editingCoin, name: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Code
                  </label>
                  <input
                    type="text"
                    value={editingCoin.code}
                    onChange={(e) => setEditingCoin({ ...editingCoin, code: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Chain
                  </label>
                  <input
                    type="text"
                    value={editingCoin.chain}
                    onChange={(e) => setEditingCoin({ ...editingCoin, chain: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Currency
                  </label>
                  <input
                    type="text"
                    value={editingCoin.currency}
                    onChange={(e) => setEditingCoin({ ...editingCoin, currency: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    value={editingCoin.logo_url}
                    onChange={(e) => setEditingCoin({ ...editingCoin, logo_url: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="edit-supported"
                      checked={editingCoin.supported}
                      onChange={(e) => setEditingCoin({ ...editingCoin, supported: e.target.checked })}
                      className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="edit-supported" className="ml-2 text-sm font-medium text-gray-400">
                      Supported
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="edit-unavailable"
                      checked={editingCoin.unavailable}
                      onChange={(e) => setEditingCoin({ ...editingCoin, unavailable: e.target.checked })}
                      className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor="edit-unavailable" className="ml-2 text-sm font-medium text-gray-400">
                      Unavailable
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsEditOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
} 