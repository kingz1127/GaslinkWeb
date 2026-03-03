// app/(marketing)/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Flame, Truck, Shield, Clock, Smartphone, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2472] to-[#2B4F8C] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Your Trusted Partner for All Gas Delivery Needs
              </h1>
              <p className="text-lg text-[#E8EDF5]">
                Connect with verified vendors for cooking gas, industrial gas, and more. 
                Fast delivery right to your doorstep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue bg-[#5B7FBD]  hover:bg-white/10 hover:text-white flex items-center gap-2" asChild>
                  <Link href="/how-it-works">How It Works</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-[#5B7FBD] hover:bg-white/10 hover:text-white flex items-center gap-2" asChild>
                  <Link href="#download-app">
                    
                    Get App
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#5B7FBD] border-2 border-white" />
                  ))}
                </div>
                <p className="text-sm text-white">
                  <span className="font-bold">500+</span> trusted vendors
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-[#5B7FBD] rounded-2xl p-8 text-center">
                <Smartphone className="h-16 w-16 mx-auto mb-4 text-white" />
                <p className="text-white">Download the GasLink App</p>
                <p className="text-white text-sm mt-2">Available on iOS and Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0A2472] mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Flame, title: "Cooking Gas", desc: "Refill or exchange cylinders for home use" },
              { icon: Truck, title: "Industrial Gas", desc: "Bulk supply for businesses and industries" },
              { icon: Shield, title: "Safe Delivery", desc: "Trained professionals handle with care" },
              { icon: Clock, title: "24/7 Service", desc: "Order anytime, we're always available" }
            ].map((service, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-[#D1D9E8] hover:shadow-lg transition">
                <div className="inline-block p-3 bg-[#E8EDF5] rounded-full mb-4">
                  <service.icon className="h-6 w-6 text-[#0A2472]" />
                </div>
                <h3 className="font-semibold text-[#0A2472] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download-app" className="py-20 bg-[#E8EDF5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2472] mb-4">
                Get the GasLink Mobile App
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Order gas on the go, track deliveries in real-time, and manage your account from your phone.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Find verified vendors near you",
                  "Real-time order tracking",
                  "Secure in-app payments",
                  "Rate and review vendors"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <Shield className="h-5 w-5 text-[#5B7FBD]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0A2472] text-white hover:bg-[#2B4F8C] flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Download on App Store
                </Button>
                <Button size="lg" className="bg-[#0A2472] text-white hover:bg-[#2B4F8C] flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Get it on Google Play
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center">
                  <Smartphone className="h-24 w-24 mx-auto text-[#0A2472]" />
                  <p className="text-2xl font-bold text-[#0A2472] mt-4">Scan to Download</p>
                  <div className="w-40 h-40 bg-[#E8EDF5] mx-auto mt-4 rounded-lg flex items-center justify-center">
                    <span className="text-[#5B7FBD]">QR Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0A2472] mb-4">
            Ready to experience hassle-free gas delivery?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied customers who trust GasLink for their gas needs.
          </p>
          <Button size="lg" className="bg-[#0A2472] text-white hover:bg-[#2B4F8C] flex items-center gap-2 mx-auto" asChild>
            <Link href="/how-it-works">
              Learn More
              
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}