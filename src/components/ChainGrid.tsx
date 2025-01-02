import Link from 'next/link'

interface Chain {
  name: string
  ticker: string
  href: string
  logo: string
}

const chains: Chain[] = [
  { name: 'Bitcoin', ticker: 'BTC', href: '/chains/btc', logo: '/chains/btc.svg' },
  { name: 'Ethereum', ticker: 'ETH', href: '/chains/eth', logo: '/chains/eth.svg' },
  { name: 'Ripple', ticker: 'XRPL', href: '/chains/xrpl', logo: '/chains/xrp.svg' },
  { name: 'Solana', ticker: 'SOL', href: '/chains/sol', logo: '/chains/sol.svg' },
  { name: 'Bitcoin Cash', ticker: 'BCH', href: '/chains/bch', logo: '/chains/bch.svg' },
  { name: 'Bitcoin SV', ticker: 'BSV', href: '/chains/bsv', logo: '/chains/bsv.svg' },
  { name: 'Dogecoin', ticker: 'DOGE', href: '/chains/doge', logo: '/chains/doge.svg' },
  { name: 'Litecoin', ticker: 'LTC', href: '/chains/ltc', logo: '/chains/ltc.svg' },
  { name: 'Dash', ticker: 'DASH', href: '/chains/dash', logo: '/chains/dash.svg' },
  { name: 'Stellar', ticker: 'XLM', href: '/chains/xlm', logo: '/chains/xlm.svg' },
  { name: 'Monero', ticker: 'XMR', href: '/chains/xmr', logo: '/chains/xmr.svg' },
  { name: 'Zcash', ticker: 'ZEC', href: '/chains/zec', logo: '/chains/zec.svg' },
  { name: 'Polygon', ticker: 'MATIC', href: '/chains/polygon', logo: '/chains/polygon.svg' },
  { name: 'BNB Chain', ticker: 'BNB', href: '/chains/bnb', logo: '/chains/bnb.svg' },
  { name: 'Avalanche', ticker: 'AVAX', href: '/chains/avax', logo: '/chains/avax.svg' },
]

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