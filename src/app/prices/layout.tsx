'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'

export default function PricesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111] text-gray-900">

      <main>{children}</main>
      <Footer />
    </div>
  )
} 