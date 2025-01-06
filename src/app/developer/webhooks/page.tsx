import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Webhook, Plus, Edit, Trash2 } from 'lucide-react'

export const metadata: Metadata = {
  title: "Webhooks | Anypay Developer",
  description: "Manage your webhooks for real-time event notifications.",
}

export default function WebhooksPage() {
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
            Webhooks
          </h1>

          <Card className="bg-gray-900/50 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle>Your Webhooks</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your webhook endpoints for real-time event notifications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Endpoint URL</TableHead>
                    <TableHead>Events</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">https://example.com/webhook</TableCell>
                    <TableCell>payment.success, payment.failed</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-[#45AAF2] hover:bg-[#45AAF2]/10">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-400/10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">https://api.myapp.com/anypay-events</TableCell>
                    <TableCell>refund.processed</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        Inactive
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-[#45AAF2] hover:bg-[#45AAF2]/10">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-400/10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle>Add New Webhook</CardTitle>
              <CardDescription className="text-gray-400">
                Create a new webhook endpoint to receive event notifications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="endpoint">Endpoint URL</Label>
                  <Input id="endpoint" placeholder="https://" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="events">Events</Label>
                  <Input id="events" placeholder="e.g., payment.success, refund.processed" className="bg-gray-800 border-gray-700" />
                </div>
                <Button className="bg-[#26DE81] hover:bg-[#26DE81]/90 text-black">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Webhook
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

