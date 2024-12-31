import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Anypay',
    default: 'Anypay - Bitcoin Payments',
  },
  description: 'Bitcoin, Ethereum, Stablecoins Payments Gateway for Apps & Websites',
  metadataBase: new URL('https://anypayx.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
} 