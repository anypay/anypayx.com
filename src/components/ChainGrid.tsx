import Link from 'next/link'
import { Chain, chains } from '../constants/chains'

export interface ChainGridProps {
  className?: string
  showTitle?: boolean
}

export default function ChainGrid({ className = '', showTitle = true }: ChainGridProps) {
  return (
    <section className={`py-20 px-4 border-t border-gray-800 bg-[#111111] ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {showTitle && (
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Supported Chains
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {chains.map((chain) => (
            //@ts-ignore
            <Link key={chain.ticker} href={chain.href} className="group">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center space-x-3">
                  <img src={chain.logo} alt={chain.name} className="w-8 h-8" />
                  <div>
                    <h3 className="text-white font-medium">{chain.name}</h3>
                    <p className="text-gray-400 text-sm">{chain.ticker}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 