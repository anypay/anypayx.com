import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCircle, CreditCard, Bell, Lock, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Account Settings | Anypay",
  description: "Manage your account settings and preferences.",
}

export default function SettingsPage() {
  return (


      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#45AAF2] to-[#26DE81] text-transparent bg-clip-text">
            Account Settings
          </h1>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-gray-900/50 border border-gray-800">
              <TabsTrigger value="profile" className="data-[state=active]:bg-[#45AAF2]/10 data-[state=active]:text-[#45AAF2]">
                <UserCircle className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="billing" className="data-[state=active]:bg-[#F7B731]/10 data-[state=active]:text-[#F7B731]">
                <CreditCard className="w-4 h-4 mr-2" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-[#FC5C65]/10 data-[state=active]:text-[#FC5C65]">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-[#26DE81]/10 data-[state=active]:text-[#26DE81]">
                <Lock className="w-4 h-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="help" className="data-[state=active]:bg-gray-800">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your public profile information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input id="name" placeholder="Your name" className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio" 
                      className="w-full min-h-[100px] rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder:text-gray-400 focus:border-[#45AAF2] focus:outline-none focus:ring-1 focus:ring-[#45AAF2]"
                      placeholder="Tell us about yourself"
                    />
                  </div>
                  <Button className="bg-[#45AAF2] hover:bg-[#45AAF2]/90">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Billing Settings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your billing information and view transaction history.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Billing content coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription className="text-gray-400">
                    Control how you receive notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Notification settings coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your account security and authentication methods.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Security settings coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="help">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Help & Support</CardTitle>
                  <CardDescription className="text-gray-400">
                    Get help with your account or contact support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Help content coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

  )
}

