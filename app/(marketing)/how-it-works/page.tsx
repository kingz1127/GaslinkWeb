// app/(marketing)/how-it-works/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Smartphone, MapPin, Truck, CreditCard, CheckCircle, ArrowRight } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Smartphone,
      title: "1. Download the App",
      description: "Get the GasLink app from App Store or Google Play Store. It's free and takes less than a minute to install.",
      details: [
        "Available for iOS and Android",
        "No registration fees",
        "User-friendly interface"
      ]
    },
    {
      icon: MapPin,
      title: "2. Find Vendors Near You",
      description: "Use our smart location feature to discover verified gas vendors in your area with real-time availability.",
      details: [
        "Real-time vendor tracking",
        "Filter by gas type & price",
        "Read reviews from neighbors"
      ]
    },
    {
      icon: CreditCard,
      title: "3. Place Your Order",
      description: "Select your gas type, specify quantity, and choose delivery or pickup. Pay securely through the app.",
      details: [
        "Multiple payment options",
        "Schedule delivery time",
        "Track order in real-time"
      ]
    },
    {
      icon: Truck,
      title: "4. Get Your Gas",
      description: "Sit back and relax. Your gas will be delivered right to your doorstep by our verified vendors.",
      details: [
        "Live delivery tracking",
        "Contactless delivery option",
        "Rate your experience"
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2472] to-[#2B4F8C] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            How GasLink Works
          </h1>
          <p className="text-xl text-[#E8EDF5] max-w-2xl mx-auto">
            Get cooking gas, industrial gas, and more delivered to your doorstep in four simple steps
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-24 flex-shrink-0">
                  <div className="w-16 h-16 bg-[#E8EDF5] rounded-2xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-[#0A2472]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#0A2472] mb-3">{step.title}</h2>
                  <p className="text-gray-600 mb-4 text-lg">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-[#5B7FBD]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {index < steps.length - 1 && (
                    <div className="mt-6 hidden md:block">
                      <ArrowRight className="h-6 w-6 text-[#D1D9E8]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download-app" className="py-20 bg-[#E8EDF5]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2472] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download the GasLink app now and join thousands of satisfied customers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-[#0A2472] hover:bg-[#2B4F8C] min-w-[200px] flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              App Store
            </Button>
            <Button size="lg" className="bg-[#0A2472] hover:bg-[#2B4F8C] min-w-[200px] flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Google Play
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { num: "500+", label: "Verified Vendors" },
              { num: "10k+", label: "Happy Customers" },
              { num: "24/7", label: "Customer Support" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#0A2472]">{stat.num}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0A2472] mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our support center for detailed guides and FAQs
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/support">Visit Support Center</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}