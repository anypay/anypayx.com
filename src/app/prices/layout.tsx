'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'

export default function PricesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111] text-gray-900">

      <main>{children}</main>

      <footer className="border-t border-gray-800 py-12 mt-20 color-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-100">
            <div>
              <Link href="/" className="flex items-center space-x-2">
              <Logo />

              </Link>
              <p className="mt-4 text-gray-300">
                The most reliable cryptocurrency payment processing platform for businesses.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Products</h3>
              <ul className="space-y-2 text-gray-100">
                <li><Link href="/prices" className="text-gray-100 hover:text-gray-700">Price Feed</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/payments" className="text-gray-100 hover:text-gray-700">Payments</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/wallet" className="text-gray-100 hover:text-gray-700">Wallet</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                {/* @ts-ignore */}
                <li><Link href="/docs" className="text-gray-100 hover:text-gray-700">Documentation</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/api" className="text-gray-100 hover:text-gray-700">API Reference</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/status" className="text-gray-100 hover:text-gray-700">Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                {/* @ts-ignore */}
                <li><Link href="/about" className="text-gray-100 hover:text-gray-700">About</Link></li>
                <li><Link href="/contact" className="text-gray-100 hover:text-gray-700">Contact</Link></li>
                {/* @ts-ignore */}
                <li><Link href="/blog" className="text-gray-100 hover:text-gray-700">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 