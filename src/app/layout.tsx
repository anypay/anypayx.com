import type { Metadata, Viewport } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: {
    template: '%s | Anypay',
    default: 'Anypay - Web3 Payments',
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
        <GoogleAnalytics gaId="G-1E4TY6R8D4" />
      </body>
    </html>
  )
}
