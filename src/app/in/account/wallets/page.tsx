import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: "Wallets | Anypay",
  description: "Manage your cryptocurrency wallets.",
}

export default function WalletsPage() {
  return (


      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Your Wallets
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="w-5 h-5 mr-2 text-[#F7B731]" />
                  Bitcoin Wallet
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Your primary Bitcoin wallet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-mono mb-2">1.2345 BTC</p>
                <p className="text-sm text-gray-400">≈ $45,678.90 USD</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="w-5 h-5 mr-2 text-[#45AAF2]" />
                  Ethereum Wallet
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Your primary Ethereum wallet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-mono mb-2">10.5678 ETH</p>
                <p className="text-sm text-gray-400">≈ $23,456.78 USD</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 flex items-center justify-center p-6">
              <Button variant="outline" className="border-dashed border-2 border-gray-700 text-gray-400 hover:border-[#45AAF2] hover:text-[#45AAF2]">
                <Plus className="w-5 h-5 mr-2" />
                Add New Wallet
              </Button>
            </Card>
          </div>
        </div>
      </main>
  )
}

