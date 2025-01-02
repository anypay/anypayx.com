import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-blue-500 rotate-45 transform origin-center"></div>
              <div className="absolute inset-0 bg-yellow-500 -rotate-45 transform origin-center clip-triangle"></div>
              <div className="absolute inset-0 bg-red-500 rotate-90 transform origin-center clip-triangle-2"></div>
            </div>
            <span className="text-xl font-bold">Anypay</span>
          </Link>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* E-commerce Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
                E-COMMERCE
              </div>
              <h1 className="text-5xl font-bold">E-Commerce</h1>
              <p className="text-gray-400 text-lg">
                Get paid in Bitcoin, Litecoin, Dogecoin, Litecoin, Dash, Bitcoin Cash, and BitcoinSV alongside traditional payment methods.
              </p>
              <div className="space-y-4">
                <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
                  Anypay® For WooCommerce
                </Button>
                <p className="text-sm text-gray-500">
                  Contact us for a custom web integration
                </p>
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[300px] h-[500px] perspective">
                  <Card className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 border-0 transform rotate-y-[-20deg] translate-z-32 shadow-2xl">
                    <Image
                      src="/placeholder.svg"
                      alt="Payment Interface"
                      width={300}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Card>
                  <Card className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 border-0 transform rotate-y-[0deg] translate-z-16 shadow-2xl">
                    <Image
                      src="/placeholder.svg"
                      alt="Payment Interface"
                      width={300}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Card>
                  <Card className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 border-0 transform rotate-y-[20deg] translate-z-0 shadow-2xl">
                    <Image
                      src="/placeholder.svg"
                      alt="Payment Interface"
                      width={300}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retail Store Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
            POINT OF SALE APP
          </div>
          <h2 className="text-5xl font-bold mt-6">Retail Store</h2>
        </section>
      </main>

      <style jsx>{`
        .perspective {
          perspective: 2000px;
        }
        .rotate-y-[-20deg] {
          transform: rotateY(-20deg);
        }
        .rotate-y-[20deg] {
          transform: rotateY(20deg);
        }
        .translate-z-32 {
          transform: translateZ(32px);
        }
        .translate-z-16 {
          transform: translateZ(16px);
        }
        .translate-z-0 {
          transform: translateZ(0);
        }
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-triangle-2 {
          clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
        }
      `}</style>
    </div>
  )
}

