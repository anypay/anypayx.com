import Link from 'next/link'

interface Chain {
  name: string
  ticker: string
  href: string
}

const chains: Chain[] = [
  { name: 'Bitcoin', ticker: 'BTC', href: '/chains/btc' },
  { name: 'Ethereum', ticker: 'ETH', href: '/chains/eth' },
  { name: 'Ripple', ticker: 'XRPL', href: '/chains/xrpl' },
  { name: 'Solana', ticker: 'SOL', href: '/chains/sol' },
  { name: 'Bitcoin Cash', ticker: 'BCH', href: '/chains/bch' },
  { name: 'Bitcoin SV', ticker: 'BSV', href: '/chains/bsv' },
  { name: 'Dogecoin', ticker: 'DOGE', href: '/chains/doge' },
  { name: 'Litecoin', ticker: 'LTC', href: '/chains/ltc' },
  { name: 'Dash', ticker: 'DASH', href: '/chains/dash' },
  { name: 'Stellar', ticker: 'XLM', href: '/chains/xlm' },
  { name: 'Monero', ticker: 'XMR', href: '/chains/xmr' },
  { name: 'Zcash', ticker: 'ZEC', href: '/chains/zec' },
  { name: 'Polygon', ticker: 'MATIC', href: '/chains/polygon' },
  { name: 'BNB Chain', ticker: 'BNB', href: '/chains/bnb' },
  { name: 'Avalanche', ticker: 'AVAX', href: '/chains/avax' },
]

export default function ChainList() {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-white">Chains</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
        {chains.map((chain) => (
          <li key={chain.ticker}>
            <Link 
              //@ts-ignore
              href={chain.href} 
              className="text-gray-400 hover:text-white text-sm"
            >
              {chain.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 