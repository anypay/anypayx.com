'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import * as Icons from '@heroicons/react/24/outline'
import axiosInstance from '@/lib/axios'

const endpoints = {
  platform: [
    {
      path: '/payment-requests',
      method: 'POST',
      description: 'Create a new payment request',
      parameters: {
        template: {
          type: 'object',
          required: true,
          properties: {
            currency: { type: 'string', required: true },
            to: { type: 'array', required: true }
          }
        },
        options: {
          type: 'object',
          properties: {
            webhook: { type: 'string' },
            redirect: { type: 'string' },
            secret: { type: 'string' }
          }
        }
      }
    },
    {
      path: '/r/{uid}',
      method: 'DELETE',
      description: 'Cancel a payment request',
      parameters: {
        uid: { type: 'string', required: true, in: 'path' }
      }
    }
  ],
  invoices: [
    {
      path: '/i/{uid}',
      method: 'GET',
      description: 'Get payment options for an invoice',
      parameters: {
        uid: { type: 'string', required: true, in: 'path' },
        'x-paypro-version': { type: 'integer', in: 'header' },
        accept: { type: 'string', required: true, in: 'header', pattern: 'application/payment-options' }
      }
    },
    {
      path: '/i/{uid}/pay',
      method: 'POST',
      description: 'Submit payment for an invoice',
      parameters: {
        uid: { type: 'string', required: true, in: 'path' },
        'x-paypro-version': { type: 'integer', in: 'header' },
        'x-content-type': { 
          type: 'string', 
          required: true, 
          in: 'header',
          pattern: 'application/payment-request|application/payment-verification|application/payment'
        }
      }
    },
    {
      path: '/api/v1/invoices',
      method: 'POST',
      description: 'Create an invoice payable by any of the coins enabled on your Anypay merchant account',
      parameters: {
        amount: { type: 'number', required: true },
        currency: { type: 'string' },
        redirect_url: { type: 'string' },
        webhook_url: { type: 'string' },
        memo: { type: 'string' },
        email: { type: 'string' },
        external_id: { type: 'string' },
        business_id: { type: 'string' },
        location_id: { type: 'string' },
        register_id: { type: 'string' },
        required_fee_rate: { 
          type: 'string',
          enum: ['fastestFee', 'halfHourFee', 'hourFee', 'economyFee', 'minimumFee']
        }
      }
    },
    {
      path: '/api/v1/invoices/{invoice_id}',
      method: 'GET',
      description: 'Get invoice details',
      parameters: {
        invoice_id: { type: 'string', required: true, in: 'path' }
      }
    },
    {
      path: '/invoices/{uid}',
      method: 'DELETE',
      description: 'Cancel an invoice and prevent new payments',
      parameters: {
        uid: { type: 'string', required: true, in: 'path' }
      }
    }
  ],
  'wallet-bot': [
    {
      path: '/v1/api/apps/wallet-bot/address-balances',
      method: 'GET',
      description: 'Get all address balances'
    },
    {
      path: '/v1/api/apps/wallet-bot/address-balances/update',
      method: 'PUT',
      description: 'Update address balance',
      parameters: {
        chain: { type: 'string', required: true },
        currency: { type: 'string', required: true },
        address: { type: 'string', required: true },
        balance: { type: 'number', required: true }
      }
    },
    {
      path: '/v1/api/apps/wallet-bot/invoices',
      method: 'POST',
      description: 'Create a new WalletBot payment request',
      parameters: {
        currency: { type: 'string', required: true },
        to: {
          type: 'object',
          required: true,
          properties: {
            address: { type: 'string', required: true },
            amount: { type: 'number', required: true },
            currency: { type: 'string', required: true }
          }
        },
        options: {
          type: 'object',
          properties: {
            webhook_url: { type: 'string' },
            memo: { type: 'string' }
          }
        }
      }
    },
    {
      path: '/v1/api/apps/wallet-bot/address-balances/{chain}/{currency}/{address}',
      method: 'GET',
      description: 'Get balance history for a specific address',
      parameters: {
        chain: { type: 'string', required: true, in: 'path' },
        currency: { type: 'string', required: true, in: 'path' },
        address: { type: 'string', required: true, in: 'path' }
      }
    },
    {
      path: '/v1/api/apps/wallet-bot/invoices/{invoice_uid}',
      method: 'DELETE',
      description: 'Cancel a WalletBot invoice',
      parameters: {
        invoice_uid: { type: 'string', required: true, in: 'path' }
      }
    }
  ],
  prices: [
    {
      path: '/api/v1/prices',
      method: 'GET',
      description: 'Get current cryptocurrency prices',
      response: {
        type: 'object',
        properties: {
          prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                currency: { type: 'string' },
                base: { type: 'string' },
                value: { type: 'number' },
                updatedAt: { type: 'string', format: 'date' },
                source: { type: 'string' }
              }
            }
          }
        }
      }
    }
  ]
}

interface RequestFormState {
  [key: string]: any
}

export default function APIDocsPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [selectedEndpoint, setSelectedEndpoint] = useState<any>(null)
  const [formState, setFormState] = useState<RequestFormState>({})
  const [response, setResponse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (endpoint: string, param: string, value: any) => {
    setFormState(prev => ({
      ...prev,
      [endpoint]: {
        ...(prev[endpoint] || {}),
        [param]: value
      }
    }))
  }

  const handleSubmit = async (endpoint: any) => {
    setIsLoading(true)
    setError(null)
    setResponse(null)

    try {
      const params = formState[endpoint.path] || {}
      
      // Replace path parameters
      let url = endpoint.path
      Object.keys(params).forEach(key => {
        if (endpoint.parameters?.[key]?.in === 'path') {
          url = url.replace(`{${key}}`, params[key])
          delete params[key]
        }
      })

      // Prepare headers
      const headers: Record<string, string> = {}
      Object.keys(params).forEach(key => {
        if (endpoint.parameters?.[key]?.in === 'header') {
          headers[key] = params[key]
          delete params[key]
        }
      })

      // Create config object first
      const config = {
        headers,
        ...(endpoint.method === 'GET' ? { params } : {})
      }

      // Special handling for /i/{uid} endpoint
      if (endpoint.path === '/i/{uid}') {
        config.headers = {
          'Accept': 'application/payment-options',
          'x-paypro-version': '2',
          ...config.headers
        }
      }

      const response = await axiosInstance({
        method: endpoint.method.toLowerCase(),
        url,
        ...(endpoint.method !== 'GET' ? { data: params } : {}),
        ...config
      })

      setResponse(response.data)
    } catch (err: any) {
      setError(err.response?.data?.message || err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const renderRequestForm = (endpoint: any) => {
    if (!endpoint.parameters) return null

    const isInvoiceEndpoint = endpoint.path === '/i/{uid}'

    return (
      <div className="mt-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Try it out</h3>
        <div className="bg-gray-900 rounded-lg p-4 space-y-4">
          {/* Show only UID input for /i/{uid} endpoint */}
          {isInvoiceEndpoint ? (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                uid
                <span className="text-red-500 ml-1">*</span>
                <span className="text-gray-500 ml-2">(path)</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500"
                placeholder="Enter invoice UID"
                onChange={(e) => handleInputChange(endpoint.path, 'uid', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Required headers will be automatically added
              </p>
            </div>
          ) : (
            // Regular parameter form for other endpoints
            Object.entries(endpoint.parameters).map(([key, param]: [string, any]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  {key}
                  {param.required && <span className="text-red-500 ml-1">*</span>}
                  {param.in && <span className="text-gray-500 ml-2">({param.in})</span>}
                </label>
                {param.type === 'object' ? (
                  <textarea
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500"
                    rows={4}
                    placeholder="{ ... }"
                    onChange={(e) => handleInputChange(endpoint.path, key, e.target.value)}
                  />
                ) : (
                  <input
                    type={param.type === 'number' ? 'number' : 'text'}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500"
                    placeholder={param.pattern || param.type}
                    onChange={(e) => handleInputChange(endpoint.path, key, e.target.value)}
                  />
                )}
              </div>
            ))
          )}
          
          <button
            onClick={() => handleSubmit(endpoint)}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Request'}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-500/10 text-red-500 rounded-lg">
            {error}
          </div>
        )}

        {response && (
          <div className="mt-4">
            <h4 className="text-lg font-medium text-white mb-2">Response</h4>
            <SyntaxHighlighter
              language="json"
              style={atomDark}
              className="rounded-lg"
            >
              {JSON.stringify(response, null, 2)}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    )
  }

  const renderExample = (endpoint: any) => {
    let example = ''
    const baseUrl = 'https://api.anypayx.com'
    
    if (endpoint.method === 'POST') {
      example = `
curl -X POST ${baseUrl}${endpoint.path} \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  ${Object.keys(endpoint.parameters || {}).map(key => 
    `"${key}": ${typeof endpoint.parameters[key] === 'object' ? '{}' : '""'}`
  ).join(',\n  ')}
}'`
    } else if (endpoint.method === 'GET') {
      example = `
curl ${baseUrl}${endpoint.path} \\
-H "Authorization: Bearer YOUR_API_KEY"`
    } else if (endpoint.method === 'DELETE') {
      example = `
curl -X DELETE ${baseUrl}${endpoint.path} \\
-H "Authorization: Bearer YOUR_API_KEY"`
    } else if (endpoint.method === 'PUT') {
      example = `
curl -X PUT ${baseUrl}${endpoint.path} \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  ${Object.keys(endpoint.parameters || {}).map(key => 
    `"${key}": ${typeof endpoint.parameters[key] === 'object' ? '{}' : '""'}`
  ).join(',\n  ')}
}'`
    }

    return example
  }

  const renderIntroduction = () => {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Anypay API Reference</h1>
          <p className="text-gray-400">
            The Anypay API is organized around REST. Our API accepts JSON-encoded request bodies, 
            returns JSON-encoded responses, and uses standard HTTP response codes and authentication.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Authentication</h2>
          <p className="text-gray-400 mb-4">
            The Anypay API uses API keys for authentication. You can view and manage your API keys in the 
            dashboard under <a href="/in/api-keys" className="text-blue-400 hover:text-blue-300">API Keys</a>.
          </p>
          
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium text-white mb-2">Authentication Example</h3>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
{`curl https://api.anypayx.com/api/v1/prices \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            </SyntaxHighlighter>
          </div>

          <div className="bg-yellow-500/10 text-yellow-500 p-4 rounded-lg">
            <div className="flex items-start">
              <Icons.ExclamationTriangleIcon className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-1">Authentication Security</h4>
                <p className="text-sm">
                  Your API keys carry many privileges, so be sure to keep them secure. Don't share your 
                  secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Base URL</h2>
          <p className="text-gray-400 mb-4">
            All API requests should be made to:
          </p>
          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-blue-400">https://api.anypayx.com</code>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Response Codes</h2>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-4 py-2 text-left text-gray-400 font-medium">Code</th>
                  <th className="px-4 py-2 text-left text-gray-400 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-4 py-2 text-green-500">200 - OK</td>
                  <td className="px-4 py-2 text-gray-400">Request succeeded</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-red-500">400 - Bad Request</td>
                  <td className="px-4 py-2 text-gray-400">Invalid request parameters</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-red-500">401 - Unauthorized</td>
                  <td className="px-4 py-2 text-gray-400">Invalid or missing API key</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-red-500">404 - Not Found</td>
                  <td className="px-4 py-2 text-gray-400">Resource not found</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-red-500">500 - Server Error</td>
                  <td className="px-4 py-2 text-gray-400">Internal server error</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Rate Limiting</h2>
          <p className="text-gray-400 mb-4">
            The API has rate limiting in place to prevent abuse. Rate limits are applied on a per-API-key 
            basis. If you exceed the rate limit, you'll receive a 429 Too Many Requests response.
          </p>
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-400">Current limits:</p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>1000 requests per minute for most endpoints</li>
              <li>100 requests per minute for invoice creation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-white mb-4">API Reference</h2>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveSection('introduction')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === 'introduction'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  Introduction
                </button>
                {Object.keys(endpoints).map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === section
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="bg-gray-800 rounded-lg p-6">
              {activeSection === 'introduction' ? (
                renderIntroduction()
              ) : (
                <div className="space-y-12">
                  {endpoints[activeSection as keyof typeof endpoints].map((endpoint) => (
                    <div key={endpoint.path} className="border-b border-gray-700 pb-8 mb-8 last:border-0">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-sm font-mono px-2 py-1 rounded ${
                              endpoint.method === 'GET' ? 'bg-green-500/10 text-green-500' :
                              endpoint.method === 'POST' ? 'bg-blue-500/10 text-blue-500' :
                              endpoint.method === 'DELETE' ? 'bg-red-500/10 text-red-500' :
                              'bg-gray-500/10 text-gray-500'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-gray-300">{endpoint.path}</code>
                          </div>
                          <p className="text-gray-400">{endpoint.description}</p>
                        </div>
                        <button
                          onClick={() => setSelectedEndpoint(selectedEndpoint?.path === endpoint.path ? null : endpoint)}
                          className="text-gray-400 hover:text-white"
                        >
                          {selectedEndpoint?.path === endpoint.path ? (
                            <Icons.ChevronUpIcon className="w-5 h-5" />
                          ) : (
                            <Icons.ChevronDownIcon className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {selectedEndpoint?.path === endpoint.path && (
                        <div className="mt-4 space-y-4">
                          {endpoint.parameters && (
                            <div>
                              <h3 className="text-lg font-medium text-white mb-2">Parameters</h3>
                              <div className="bg-gray-900 rounded-lg p-4">
                                {Object.entries(endpoint.parameters).map(([key, value]: [string, any]) => (
                                  <div key={key} className="mb-4 last:mb-0">
                                    <div className="flex items-center gap-2">
                                      <code className="text-blue-400">{key}</code>
                                      <span className="text-gray-500 text-sm">{value.type}</span>
                                      {value.required && (
                                        <span className="text-xs text-red-500">required</span>
                                      )}
                                    </div>
                                    {value.description && (
                                      <p className="text-gray-400 text-sm mt-1">{value.description}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div>
                            <h3 className="text-lg font-medium text-white mb-2">Example Request</h3>
                            <SyntaxHighlighter
                              language="bash"
                              style={atomDark}
                              className="rounded-lg"
                            >
                              {renderExample(endpoint)}
                            </SyntaxHighlighter>
                          </div>

                          {renderRequestForm(endpoint)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 