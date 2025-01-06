import Link from 'next/link'
import Logo from './Logo'
import WalletList from './WalletList'
import ChainList from './ChainList'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-400">
              The most reliable cryptocurrency payment processing platform for businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/prices" className="text-gray-400 hover:text-white">Price Feed</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/payments" className="text-gray-400 hover:text-white">Payments</Link></li>
              <li><Link href="/walletbot" className="text-gray-400 hover:text-white">WalletBot</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/wallet" className="text-gray-400 hover:text-white">Wallet</Link></li>
              <li><Link href="/woocommerce" className="text-gray-400 hover:text-white">WooCommerce</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {/* @ts-ignore */}
              <li><Link href="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/api" className="text-gray-400 hover:text-white">API Reference</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/status" className="text-gray-400 hover:text-white">Status</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <WalletList />
          <ChainList />
        </div>
      </div>
    </footer>
  )
} 