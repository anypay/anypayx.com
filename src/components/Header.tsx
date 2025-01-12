import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            
            <div className="flex items-center space-x-6">

              <Link href="/walletbot" className="text-gray-300 hover:text-white transition-colors">
                WalletBot
              </Link>
              <Link href="/woocommerce" className="text-gray-300 hover:text-white transition-colors">
                WooCommerce
              </Link>

              <Link href="/prices" className="text-gray-300 hover:text-white transition-colors">
                Prices
              </Link>
              <Link href="https://api.anypayx.com/api"  target="_blank" className="text-gray-300 hover:text-white transition-colors">
                Docs
              </Link>
              <Link
                href="/auth/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </nav>
      </div>
    </header>
  )
}