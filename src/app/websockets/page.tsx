'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import Footer from '@/components/Footer'
import { Highlight, themes } from 'prism-react-renderer'

interface WebSocketEvent {
  type: string
  data: any
  timestamp: string
}

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const Tab = ({ label, isActive, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
      isActive 
        ? 'bg-black/50 text-white border-b-2 border-blue-500' 
        : 'text-gray-400 hover:text-white hover:bg-black/30'
    }`}
  >
    {label}
  </button>
)

interface WebSocketConfig {
  url: string
  apiKey?: string
}

export default function WebSocketsDemo() {
  const [events, setEvents] = useState<WebSocketEvent[]>([])
  const [connected, setConnected] = useState(false)
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [activeTab, setActiveTab] = useState('javascript')
  const [wsConfig, setWsConfig] = useState<WebSocketConfig>({
    url: 'wss://ws.anypayx.com',
    apiKey: ''
  })

  const connectWebSocket = () => {
    const ws = new WebSocket(wsConfig.url)
    
    ws.onopen = () => {
      setConnected(true)
      addEvent({
        type: 'connection',
        data: 'Connected to WebSocket server',
        timestamp: new Date().toISOString()
      })

      // Send authentication if API key is provided
      if (wsConfig.apiKey) {
        ws.send(JSON.stringify({
          type: 'auth',
          apiKey: wsConfig.apiKey
        }))
      }
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      addEvent({
        type: 'message',
        data,
        timestamp: new Date().toISOString()
      })
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
    setEvents(prev => [event, ...prev].slice(0, 50)) // Keep last 50 events
  }

  const codeExamples = {
    javascript: `
const ws = new WebSocket('wss://ws.anypayx.com')

ws.onopen = () => {
  console.log('Connected to AnyPay WebSocket')
}

ws.onmessage = (event) => {
  const data = JSON.parse(event.data)
  console.log('Received:', data)
}

ws.onerror = (error) => {
  console.error('WebSocket error:', error)
}

ws.onclose = () => {
  console.log('Disconnected from WebSocket')
}`,
    python: `
import websockets
import asyncio
import json

async def connect_websocket():
    async with websockets.connect('wss://ws.anypayx.com') as ws:
        while True:
            data = await ws.recv()
            event = json.loads(data)
            print('Received:', event)

asyncio.get_event_loop().run_until_complete(connect_websocket())`,
    node: `
const WebSocket = require('ws')

const ws = new WebSocket('wss://ws.anypayx.com')

ws.on('open', () => {
  console.log('Connected to AnyPay WebSocket')
})

ws.on('message', (data) => {
  const event = JSON.parse(data)
  console.log('Received:', event)
})

ws.on('error', (error) => {
  console.error('WebSocket error:', error)
})

ws.on('close', () => {
  console.log('Disconnected from WebSocket')
})`,
    go: `
package main

import (
    "fmt"
    "log"
    "encoding/json"
    "github.com/gorilla/websocket"
)

func main() {
    c, _, err := websocket.DefaultDialer.Dial("wss://ws.anypayx.com", nil)
    if err != nil {
        log.Fatal("dial:", err)
    }
    defer c.Close()

    fmt.Println("Connected to AnyPay WebSocket")

    for {
        _, message, err := c.ReadMessage()
        if err != nil {
            log.Println("read:", err)
            return
        }
        
        var data interface{}
        json.Unmarshal(message, &data)
        fmt.Printf("Received: %+v\\n", data)
    }
}`,
    rust: `
use tokio_tungstenite::{connect_async, tungstenite::protocol::Message};
use futures_util::StreamExt;
use url::Url;
use serde_json::Value;

#[tokio::main]
async fn main() {
    let url = Url::parse("wss://ws.anypayx.com").unwrap();
    
    let (ws_stream, _) = connect_async(url).await.expect("Failed to connect");
    println!("Connected to AnyPay WebSocket");
    
    let (_, mut read) = ws_stream.split();
    
    while let Some(message) = read.next().await {
        match message {
            Ok(Message::Text(text)) => {
                let data: Value = serde_json::from_str(&text).unwrap();
                println!("Received: {:?}", data);
            }
            Err(e) => println!("Error: {}", e),
            _ => (),
        }
    }
}`,
    csharp: `
using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

class Program
{
    static async Task Main(string[] args)
    {
        using (ClientWebSocket ws = new ClientWebSocket())
        {
            await ws.ConnectAsync(new Uri("wss://ws.anypayx.com"), CancellationToken.None);
            Console.WriteLine("Connected to AnyPay WebSocket");

            var buffer = new byte[1024 * 4];
            while (ws.State == WebSocketState.Open)
            {
                var result = await ws.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                if (result.MessageType == WebSocketMessageType.Text)
                {
                    var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    var data = JObject.Parse(message);
                    Console.WriteLine($"Received: {data}");
                }
            }
        }
    }
}`,
    java: `
import java.net.URI;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;
import org.json.JSONObject;

public class AnyPayWebSocket extends WebSocketClient {
    
    public AnyPayWebSocket() {
        super(new URI("wss://ws.anypayx.com"));
    }

    @Override
    public void onOpen(ServerHandshake handshake) {
        System.out.println("Connected to AnyPay WebSocket");
    }

    @Override
    public void onMessage(String message) {
        JSONObject data = new JSONObject(message);
        System.out.println("Received: " + data.toString());
    }

    @Override
    public void onClose(int code, String reason, boolean remote) {
        System.out.println("Disconnected from WebSocket");
    }

    @Override
    public void onError(Exception ex) {
        System.err.println("WebSocket error: " + ex.getMessage());
    }

    public static void main(String[] args) {
        AnyPayWebSocket client = new AnyPayWebSocket();
        client.connect();
    }
}`
  }

  return (
    <div className="bg-[#111] min-h-screen">
      <PriceTicker />
      
      {/* Header */}
      <header className="border-b border-gray-800">
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Real-Time Crypto Events <br />
              <span className="text-blue-400">via WebSocket</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
              Stream real-time cryptocurrency events, transactions, and price updates
              directly to your application with our WebSocket API.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={connected ? disconnectWebSocket : connectWebSocket}
                className={`${
                  connected 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white px-8 py-3 rounded-md text-lg font-medium transition-colors`}
              >
                {connected ? 'Disconnect' : 'Connect to WebSocket'}
              </button>
              <a
                href="/docs/websockets"

                rel="noopener noreferrer"
                className="border border-gray-700 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Panel */}
      <div className="container mx-auto px-4 py-8">
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

        {/* Live Events Section */}
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Event Stream */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Live Event Stream
                </h2>
                <div className="bg-black/50 rounded-lg p-6 h-[600px] overflow-y-auto">
                  {events.map((event, index) => (
                    <div key={index} className="mb-4 border-b border-gray-800 pb-4">
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

              {/* Code Examples */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Code Examples
                </h2>
                
                {/* Tabs */}
                <div className="mb-4 border-b border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(codeExamples).map((language) => (
                      <Tab
                        key={language}
                        label={language.charAt(0).toUpperCase() + language.slice(1)}
                        isActive={activeTab === language}
                        onClick={() => setActiveTab(language)}
                      />
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="bg-black/50 rounded-lg">
                  {Object.entries(codeExamples).map(([language, code]) => (
                    <div
                      key={language}
                      className={`${activeTab === language ? 'block' : 'hidden'}`}
                    >
                      <Highlight
                        theme={themes.nightOwl}
                        code={code.trim()}
                        language={language === 'csharp' ? 'clike' : language}
                      >
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                          <pre className="p-6 overflow-x-auto" style={style}>
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
                    </div>
                  ))}
                </div>

                {/* Installation Instructions */}
                <div className="mt-6 p-4 bg-black/30 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Installation
                  </h3>
                  {activeTab === 'javascript' && (
                    <code className="text-sm text-gray-300">npm install ws</code>
                  )}
                  {activeTab === 'python' && (
                    <code className="text-sm text-gray-300">pip install websockets</code>
                  )}
                  {activeTab === 'go' && (
                    <code className="text-sm text-gray-300">go get github.com/gorilla/websocket</code>
                  )}
                  {activeTab === 'rust' && (
                    <code className="text-sm text-gray-300">cargo add tokio-tungstenite futures-util serde_json</code>
                  )}
                  {activeTab === 'csharp' && (
                    <code className="text-sm text-gray-300">Install-Package Newtonsoft.Json</code>
                  )}
                  {activeTab === 'java' && (
                    <code className="text-sm text-gray-300">implementation 'org.java-websocket:Java-WebSocket:1.5.3'</code>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
} 