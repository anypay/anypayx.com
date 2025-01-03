'use client'

import Link from 'next/link'
import { Highlight, themes } from 'prism-react-renderer'

const priceExample = `// Get current price
const response = await fetch(
  'https://api.anypayx.com/api/v1/prices'
)

const { price } = await response.json()
console.log(\`Bitcoin price: $\${price}\`)`

const convertExample = `// Convert between currencies
const response = await fetch(
  'https://api.anypayx.com/api/v1/convert', {
    method: 'POST',
    body: JSON.stringify({
      from: 'USD',
      to: 'BTC',
      amount: 100
    })
  }
)

const { converted } = await response.json()
console.log(\`$100 = \${converted} BTC\`)`

export default function DeveloperSection() {
  return (
    <section className="py-20 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Developer-First API
            </h2>
            <p className="text-gray-400 mb-6">
              Access real-time cryptocurrency prices and conversions with our simple REST API. 
              Built for developers, by developers.
            </p>
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden">
                <Highlight
                  theme={themes.nightOwl}
                  code={priceExample}
                  language="javascript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className="p-6 bg-gray-900" style={style}>
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

              <div className="rounded-lg overflow-hidden">
                <Highlight
                  theme={themes.nightOwl}
                  code={convertExample}
                  language="javascript"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className="p-6 bg-gray-900" style={style}>
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
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time price updates
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multiple exchange rates
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Historical data access
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Websocket price streams
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive API documentation with examples in multiple languages.
              </p>
              <Link
                href="/docs/api"
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
              >
                View Documentation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 