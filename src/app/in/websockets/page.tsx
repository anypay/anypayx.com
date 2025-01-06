'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSupabaseAuth } from '@/contexts/SupabaseAuthContext'
import { Highlight, themes } from 'prism-react-renderer'

interface WebSocketEvent {
  type: string
  data: any
  timestamp: string
}

interface WebSocketConfig {
  url: string
}

export default function WebSocketsDemo() {
  const router = useRouter()
  const { apiKey, loading: authLoading } = useSupabaseAuth()
  const [events, setEvents] = useState<WebSocketEvent[]>([])
  const [connected, setConnected] = useState(false)
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [activeTab, setActiveTab] = useState('javascript')
  const [wsConfig, setWsConfig] = useState<WebSocketConfig>({
    url: 'wss://ws.anypayx.com'
  })

  const connectWebSocket = () => {
    if (!apiKey) {
      addEvent({
        type: 'error',
        data: 'No API key available',
        timestamp: new Date().toISOString()
      })
      return
    }

    const ws = new WebSocket(`${wsConfig.url}?token=${apiKey}`)
    
    ws.onopen = () => {
      setConnected(true)
      ws.send(JSON.stringify({
        type: 'auth',
        apiKey: apiKey
      }))
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        addEvent({
          type: 'message',
          data,
          timestamp: new Date().toISOString()
        })
      } catch (error) {
        addEvent({
          type: 'error',
          data: 'Failed to parse message',
          timestamp: new Date().toISOString()
        })
      }
    }

    ws.onerror = (error) => {
      addEvent({
        type: 'error',
        data: 'WebSocket error occurred',
        timestamp: new Date().toISOString()
      })
    }

    ws.onclose = () => {
      setConnected(false)
      addEvent({
        type: 'connection',
        data: 'Disconnected from WebSocket server',
        timestamp: new Date().toISOString()
      })
    }

    setSocket(ws)
  }

  const disconnectWebSocket = () => {
    socket?.close()
    setSocket(null)
  }

  const addEvent = (event: WebSocketEvent) => {
    setEvents(prev => [event, ...prev].slice(0, 50))
  }

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Configuration Panel */}
      <div className="mb-8 p-4 bg-black/30 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">WebSocket Configuration</h3>
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
              Your API Key
            </label>
            <input
              type="text"
              value={apiKey || ''}
              readOnly
              className="w-full px-3 py-2 bg-black/50 rounded border border-gray-700 text-white opacity-50"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={connectWebSocket}
            disabled={connected || !apiKey}
            className={`px-4 py-2 rounded ${
              connected || !apiKey
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            } transition-colors`}
          >
            Connect
          </button>
          <button
            onClick={disconnectWebSocket}
            disabled={!connected}
            className={`px-4 py-2 rounded ${
              !connected
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-red-500 hover:bg-red-600'
            } transition-colors`}
          >
            Disconnect
          </button>
        </div>
      </div>

      {/* Event Stream */}
      <div className="bg-black/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Event Stream</h3>
        <div className="h-[600px] overflow-y-auto space-y-4">
          {events.map((event, index) => (
            <div key={index} className="border-b border-gray-800 pb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{event.type}</span>
                <span>{new Date(event.timestamp).toLocaleTimeString()}</span>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                {JSON.stringify(event.data, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 