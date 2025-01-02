import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, Clock, Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: "Merchant Invoices | Anypay",
  description: "View and manage your merchant invoices.",
}

export default function MerchantInvoicesPage() {
  // This is a placeholder. In a real application, you would fetch the invoices from an API or database.
  const invoices = [
    { id: '1', amount: 150.00, currency: 'USD', status: 'paid', createdAt: '2023-06-20T10:30:00Z' },
    { id: '2', amount: 75.50, currency: 'USD', status: 'unpaid', createdAt: '2023-06-21T14:45:00Z' },
    { id: '3', amount: 200.00, currency: 'USD', status: 'cancelled', createdAt: '2023-06-19T09:15:00Z' },
    { id: '4', amount: 50.00, currency: 'USD', status: 'paid', createdAt: '2023-06-18T16:20:00Z' },
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
              <li><Link href="/merchant/invoices" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Invoices</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
              Merchant Invoices
            </h1>
            {/* @ts-ignore */}  
            <Link href="/merchant/invoices/new">
              <Button className="bg-[#26DE81] hover:bg-[#26DE81]/90 text-black">
                <Plus className="w-4 h-4 mr-2" />
                New Invoice
              </Button>
            </Link>
          </div>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Your Merchant Invoices</CardTitle>
              <CardDescription className="text-gray-400">
                Manage and view all your merchant invoices in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.amount.toFixed(2)} {invoice.currency}</TableCell>
                      <TableCell>
                        {invoice.status === 'paid' && (
                          <span className="flex items-center text-green-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Paid
                          </span>
                        )}
                        {invoice.status === 'unpaid' && (
                          <span className="flex items-center text-yellow-400">
                            <Clock className="w-4 h-4 mr-2" />
                            Unpaid
                          </span>
                        )}
                        {invoice.status === 'cancelled' && (
                          <span className="flex items-center text-red-400">
                            <XCircle className="w-4 h-4 mr-2" />
                            Cancelled
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{new Date(invoice.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        {/* @ts-ignore */}
                        <Link href={`/merchant/invoices/${invoice.id}`}>
                          <Button variant="ghost" size="sm" className="text-[#45AAF2] hover:bg-[#45AAF2]/10">
                            View
                          </Button>
                        </Link>
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

