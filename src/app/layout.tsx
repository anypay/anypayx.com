import type { Metadata, Viewport } from 'next'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    template: '%s | Anypay',
    default: 'Anypay - Bitcoin Payments',
  },
  description: 'Bitcoin, Ethereum, Stablecoins Payments Gateway for Apps & Websites',
  metadataBase: new URL('https://www.anypayx.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}