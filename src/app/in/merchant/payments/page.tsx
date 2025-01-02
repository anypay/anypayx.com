import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, ArrowDownLeft, ArrowUpRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Merchant Payments | Anypay",
  description: "View and manage your merchant payments.",
}

export default function MerchantPaymentsPage() {
  // This is a placeholder. In a real application, you would fetch the payments from an API or database.
  const payments = [
    { id: '1', amount: 150.00, currency: 'USD', type: 'incoming', status: 'completed', createdAt: '2023-06-20T10:30:00Z' },
    { id: '2', amount: 75.50, currency: 'USD', type: 'outgoing', status: 'pending', createdAt: '2023-06-21T14:45:00Z' },
    { id: '3', amount: 200.00, currency: 'USD', type: 'incoming', status: 'failed', createdAt: '2023-06-19T09:15:00Z' },
    { id: '4', amount: 50.00, currency: 'USD', type: 'incoming', status: 'completed', createdAt: '2023-06-18T16:20:00Z' },
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
              <li><Link href="/merchant/payments" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Payments</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Merchant Payments
          </h1>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Your Payment History</CardTitle>
              <CardDescription className="text-gray-400">
                View and manage all your incoming and outgoing payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.amount.toFixed(2)} {payment.currency}</TableCell>
                      <TableCell>
                        {payment.type === 'incoming' ? (
                          <span className="flex items-center text-green-400">
                            <ArrowDownLeft className="w-4 h-4 mr-2" />
                            Incoming
                          </span>
                        ) : (
                          <span className="flex items-center text-yellow-400">
                            <ArrowUpRight className="w-4 h-4 mr-2" />
                            Outgoing
                          </span>
                        )}
                      </TableCell>
                      <TableCell>
                        {payment.status === 'completed' && (
                          <span className="flex items-center text-green-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Completed
                          </span>
                        )}
                        {payment.status === 'pending' && (
                          <span className="flex items-center text-yellow-400">
                            <Clock className="w-4 h-4 mr-2" />
                            Pending
                          </span>
                        )}
                        {payment.status === 'failed' && (
                          <span className="flex items-center text-red-400">
                            <XCircle className="w-4 h-4 mr-2" />
                            Failed
                          </span>
                        )}
                      </TableCell>
                      <TableCell>{new Date(payment.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="text-[#45AAF2] hover:bg-[#45AAF2]/10">
                          View Details
                        </Button>
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

