import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "API Logs | Anypay Developer",
  description: "View and analyze your API request logs.",
}

export default function LogsPage() {
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            API Logs
          </h1>

          <Card className="bg-gray-900/50 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle>Recent API Requests</CardTitle>
              <CardDescription className="text-gray-400">
                View and analyze your recent API activity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Endpoint</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Response Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-06-15 14:32:45</TableCell>
                    <TableCell>POST</TableCell>
                    <TableCell>/api/v1/payments</TableCell>
                    <TableCell>
                      <span className="flex items-center text-green-400">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        200 OK
                      </span>
                    </TableCell>
                    <TableCell className="text-right">120ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-15 14:30:12</TableCell>
                    <TableCell>GET</TableCell>
                    <TableCell>/api/v1/transactions</TableCell>
                    <TableCell>
                      <span className="flex items-center text-green-400">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        200 OK
                      </span>
                    </TableCell>
                    <TableCell className="text-right">85ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-15 14:28:03</TableCell>
                    <TableCell>POST</TableCell>
                    <TableCell>/api/v1/refunds</TableCell>
                    <TableCell>
                      <span className="flex items-center text-red-400">
                        <XCircle className="w-4 h-4 mr-1" />
                        400 Bad Request
                      </span>
                    </TableCell>
                    <TableCell className="text-right">95ms</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-15 14:25:57</TableCell>
                    <TableCell>GET</TableCell>
                    <TableCell>/api/v1/balance</TableCell>
                    <TableCell>
                      <span className="flex items-center text-yellow-400">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        429 Too Many Requests
                      </span>
                    </TableCell>
                    <TableCell className="text-right">62ms</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <Button variant="outline" className="border-[#45AAF2] text-[#45AAF2] hover:bg-[#45AAF2]/10">
              Previous Page
            </Button>
            <span className="text-gray-400">Page 1 of 10</span>
            <Button variant="outline" className="border-[#45AAF2] text-[#45AAF2] hover:bg-[#45AAF2]/10">
              Next Page
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

