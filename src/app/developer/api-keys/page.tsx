import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Key, Copy, MoreVertical } from 'lucide-react'

export const metadata: Metadata = {
  title: "API Keys | Anypay Developer",
  description: "Manage your API keys for Anypay integration.",
}

export default function ApiKeysPage() {
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
              <li><Link href="/developer" className="text-gray-300 hover:text-[#45AAF2] transition-colors">Developer</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            API Keys
          </h1>

          <Card className="bg-gray-900/50 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle>Your API Keys</CardTitle>
              <CardDescription className="text-gray-400">
                Manage and create API keys for your Anypay integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Key Name</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Production Key</TableCell>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>2023-06-15</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-[#45AAF2] hover:bg-[#45AAF2]/10">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Test Key</TableCell>
                    <TableCell>2023-05-15</TableCell>
                    <TableCell>2023-06-10</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-[#45AAF2] hover:bg-[#45AAF2]/10">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Button className="bg-[#26DE81] hover:bg-[#26DE81]/90 text-black">
            <Key className="w-4 h-4 mr-2" />
            Create New API Key
          </Button>
        </div>
      </main>
    </div>
  )
}

