import { Metadata } from 'next'
import PricesDisplay from '@/app/prices/components/PricesDisplay'
import MarketingHeader from '@/app/prices/components/MarketingHeader'
import DeveloperSection from '@/app/prices/components/DeveloperSection'

export const metadata: Metadata = {
  title: 'Cryptocurrency Price Feed API | Anypay',
  description: 'Real-time cryptocurrency price feeds and conversion APIs for developers. Get accurate, up-to-date crypto prices for Bitcoin, Ethereum, and more.',
}

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-background bg-[#111]">
      <MarketingHeader />
      <PricesDisplay />
      {/* <DeveloperSection /> */}
    </div>
  )
} 