import Link from 'next/link'
import { Chain, chains } from '../constants/chains'

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