import Link from 'next/link'

interface Wallet {
  name: string
  href: string
  featured?: boolean
}

const wallets: Wallet[] = [
  { name: 'Yours', href: '/wallets/yours', featured: true },
  { name: 'MetaMask', href: '/wallets/metamask' },
  { name: 'Phantom', href: '/wallets/phantom' },
  { name: 'Unisat', href: '/wallets/unisat' },
  { name: 'XVerse', href: '/wallets/xverse' },
  { name: 'Nintondo', href: '/wallets/nintondo' },
  { name: 'TON', href: '/wallets/ton' },
  { name: 'OKX', href: '/wallets/okx' },
]

export default function WalletList() {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-white">Wallets</h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
        {wallets.map((wallet) => (
          <li key={wallet.name}>
            <Link 
              //@ts-ignore
              href={wallet.href}
              className={`text-sm ${
                wallet.featured 
                  ? 'text-emerald-400 hover:text-emerald-300' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {wallet.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 