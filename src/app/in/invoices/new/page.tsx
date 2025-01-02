import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Create New Invoice | Anypay",
  description: "Create a new invoice for your business.",
}

export default function NewInvoicePage() {
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
              <li><Link href="/dashboard" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Dashboard</Link></li>
              {/* @ts-ignore */}
              <li><Link href="/invoices" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Invoices</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Create New Invoice
          </h1>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Invoice Details</CardTitle>
              <CardDescription className="text-gray-400">
                Fill in the details for your new invoice.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="customer">Customer Name</Label>
                  <Input id="customer" placeholder="Enter customer name" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" placeholder="0.00" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                      <SelectItem value="jpy">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea 
                    id="description" 
                    className="w-full min-h-[100px] rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder:text-gray-400 focus:border-[#45AAF2] focus:outline-none focus:ring-1 focus:ring-[#45AAF2]"
                    placeholder="Enter invoice description"
                  />
                </div>
                <Button className="bg-[#26DE81] hover:bg-[#26DE81]/90 text-black w-full">
                  Create Invoice
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

