import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUp, ArrowDown } from 'lucide-react'

export const metadata: Metadata = {
  title: "Pricing | Anypay Developer",
  description: "View current pricing for Anypay services.",
}

export default function PricesPage() {
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
              <li><Link href="/in" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Dashboard</Link></li>
              <li><Link href="/in" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Developer</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Current Pricing
          </h1>

          <Card className="bg-gray-900/50 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle>Transaction Fees</CardTitle>
              <CardDescription className="text-gray-400">
                Our competitive pricing for processing cryptocurrency payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cryptocurrency</TableHead>
                    <TableHead>Transaction Fee</TableHead>
                    <TableHead>Network Fee</TableHead>
                    <TableHead className="text-right">24h Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Bitcoin (BTC)</TableCell>
                    <TableCell>0.5%</TableCell>
                    <TableCell>Variable</TableCell>
                    <TableCell className="text-right text-green-400">
                      <span className="flex items-center justify-end">
                        <ArrowUp className="w-4 h-4 mr-1" />
                        2.3%
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ethereum (ETH)</TableCell>
                    <TableCell>0.5%</TableCell>
                    <TableCell>Variable</TableCell>
                    <TableCell className="text-right text-red-400">
                      <span className="flex items-center justify-end">
                        <ArrowDown className="w-4 h-4 mr-1" />
                        1.5%
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Litecoin (LTC)</TableCell>
                    <TableCell>0.5%</TableCell>
                    <TableCell>Variable</TableCell>
                    <TableCell className="text-right text-green-400">
                      <span className="flex items-center justify-end">
                        <ArrowUp className="w-4 h-4 mr-1" />
                        0.8%
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dogecoin (DOGE)</TableCell>
                    <TableCell>1.0%</TableCell>
                    <TableCell>Variable</TableCell>
                    <TableCell className="text-right text-green-400">
                      <span className="flex items-center justify-end">
                        <ArrowUp className="w-4 h-4 mr-1" />
                        5.2%
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Volume Discounts</CardTitle>
              <CardDescription className="text-gray-400">
                Reduce your fees with higher transaction volumes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Monthly Volume</TableHead>
                    <TableHead className="text-right">Discount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>$0 - $10,000</TableCell>
                    <TableCell className="text-right">0%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$10,001 - $50,000</TableCell>
                    <TableCell className="text-right">10%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$50,001 - $100,000</TableCell>
                    <TableCell className="text-right">20%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>$100,001+</TableCell>
                    <TableCell className="text-right">30%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

