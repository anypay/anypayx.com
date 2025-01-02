import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const metadata: Metadata = {
  title: "Checkout | Anypay Merchant",
  description: "Complete your purchase using Anypay.",
}

export default function MerchantCheckoutPage() {
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
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Checkout
          </h1>

          <Card className="bg-gray-900/50 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription className="text-gray-400">
                Review your order details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$99.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$109.99</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription className="text-gray-400">
                Select your preferred payment method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <RadioGroup defaultValue="bitcoin">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bitcoin" id="bitcoin" />
                    <Label htmlFor="bitcoin">Bitcoin</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ethereum" id="ethereum" />
                    <Label htmlFor="ethereum">Ethereum</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="litecoin" id="litecoin" />
                    <Label htmlFor="litecoin">Litecoin</Label>
                  </div>
                </RadioGroup>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-800 border-gray-700" />
                </div>
                <Button className="bg-[#26DE81] hover:bg-[#26DE81]/90 text-black w-full">
                  Pay Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

