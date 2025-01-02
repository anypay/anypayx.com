'use client'

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

export default function MerchantCoinsPage() {
  // This is a placeholder. In a real application, you would fetch this data from an API or database.
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', enabled: true },
    { name: 'Ethereum', symbol: 'ETH', enabled: true },
    { name: 'Litecoin', symbol: 'LTC', enabled: false },
    { name: 'Dogecoin', symbol: 'DOGE', enabled: false },
    { name: 'Bitcoin Cash', symbol: 'BCH', enabled: true },
  ]

  return (
    <div className="min-h-screen bg-[#1E272E] text-white">
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/anypay-logo.png"
              alt="Anypay Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold">Anypay</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {/* @ts-ignore */}
              <li><Link href="/merchant/dashboard" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Dashboard</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/merchant/coins" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Coins</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Accepted Coins
          </h1>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Manage Accepted Cryptocurrencies</CardTitle>
              <CardDescription className="text-gray-400">
                Enable or disable the cryptocurrencies you want to accept for payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Coin</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coins.map((coin) => (
                    <TableRow key={coin.symbol}>
                      <TableCell className="font-medium">{coin.name}</TableCell>
                      <TableCell>{coin.symbol}</TableCell>
                      <TableCell className="text-right">
                        <Switch
                          checked={coin.enabled}
                          onCheckedChange={() => {
                            // In a real application, you would update the status in your backend here
                            console.log(`${coin.name} status changed to ${!coin.enabled}`)
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

