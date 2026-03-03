// app/(marketing)/support/page.tsx
import Link from 'next/link'
import { HelpCircle, MessageCircle, Phone, Mail, ChevronRight, Search, BookOpen, Clock, MessageSquare } from 'lucide-react'

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2472] to-[#2B4F8C] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-[#E8EDF5] max-w-2xl mx-auto mb-10">
            Find answers, get support, or contact our team
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 pr-14 rounded-xl text-gray-900 placeholder-gray-500 bg-white border-2 border-[#5B7FBD] focus:outline-none focus:border-[#0A2472] focus:ring-2 focus:ring-[#5B7FBD] text-lg shadow-lg"
              />
              <Search className="absolute right-4 top-4 h-7 w-7 text-[#2B4F8C]" />
            </div>
            <p className="text-sm text-[#E8EDF5] mt-3">
              Popular searches: "How to order", "Delivery time", "Payment methods"
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0A2472] mb-12">
            How can we assist you today?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* FAQ Card */}
            <Link href="/support/faq" className="group">
              <div className="p-6 border border-[#D1D9E8] rounded-lg hover:shadow-lg transition text-center">
                <div className="w-16 h-16 bg-[#E8EDF5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5B7FBD] transition">
                  <HelpCircle className="h-8 w-8 text-[#0A2472] group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2472] mb-2">FAQs</h3>
                <p className="text-gray-600 mb-4">Find answers to common questions</p>
                <span className="text-[#2B4F8C] flex items-center justify-center gap-1">
                  Browse FAQs <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Contact Support Card */}
            <Link href="/support/contact" className="group">
              <div className="p-6 border border-[#D1D9E8] rounded-lg hover:shadow-lg transition text-center">
                <div className="w-16 h-16 bg-[#E8EDF5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5B7FBD] transition">
                  <MessageCircle className="h-8 w-8 text-[#0A2472] group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2472] mb-2">Contact Support</h3>
                <p className="text-gray-600 mb-4">Get help from our support team</p>
                <span className="text-[#2B4F8C] flex items-center justify-center gap-1">
                  Contact us <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Guides Card */}
            <div className="p-6 border border-[#D1D9E8] rounded-lg text-center opacity-50 cursor-not-allowed">
              <div className="w-16 h-16 bg-[#E8EDF5] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2472] mb-2">User Guides</h3>
              <p className="text-gray-600 mb-4">Step-by-step tutorials (Coming soon)</p>
              <span className="text-gray-400 flex items-center justify-center gap-1">
                Coming soon <ChevronRight className="h-4 w-4" />
              </span>
            </div>

            {/* Live Chat Card */}
            <div className="p-6 border border-[#D1D9E8] rounded-lg text-center opacity-50 cursor-not-allowed">
              <div className="w-16 h-16 bg-[#E8EDF5] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-[#0A2472]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2472] mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our team (Coming soon)</p>
              <span className="text-gray-400 flex items-center justify-center gap-1">
                Coming soon <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-[#E8EDF5]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0A2472] mb-12">
            Other Ways to Reach Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Mail className="h-10 w-10 text-[#0A2472] mb-4" />
              <h3 className="text-xl font-bold text-[#0A2472] mb-2">Email Support</h3>
              <p className="text-gray-600 mb-2">support@gaslink.com</p>
              <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Phone className="h-10 w-10 text-[#0A2472] mb-4" />
              <h3 className="text-xl font-bold text-[#0A2472] mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-2">+234 (0) 123 456 7890</p>
              <p className="text-sm text-gray-500">Monday - Friday, 8am - 6pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Clock className="h-12 w-12 text-[#0A2472] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#0A2472] mb-2">Support Hours</h3>
          <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </section>
    </div>
  )
}