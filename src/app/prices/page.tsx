'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import PriceTicker from '@/components/PriceTicker'
import PricesDisplay from './components/PricesDisplay'
import DeveloperSection from './components/DeveloperSection'
import Header from '@/components/Header'

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-[#111]">
      <PriceTicker />
      <Header />  

          <PricesDisplay />
    <DeveloperSection />
 
    </div>
  )
} 