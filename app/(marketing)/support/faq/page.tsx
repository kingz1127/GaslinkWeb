// app/(marketing)/support/faq/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What is GasLink?",
        a: "GasLink is a platform that connects customers with verified gas vendors for all types of gas needs - cooking gas, industrial gas, and more. We ensure safe, reliable delivery right to your doorstep."
      },
      {
        q: "How do I get started?",
        a: "Simply download the GasLink app from the App Store or Google Play Store, create an account, and start ordering gas from verified vendors in your area."
      },
      {
        q: "Is GasLink available in my area?",
        a: "GasLink is currently expanding across Nigeria. Check the app to see if we're available in your location. We're constantly adding new areas!"
      }
    ]
  },
  {
    category: "Orders & Delivery",
    questions: [
      {
        q: "How fast is delivery?",
        a: "Delivery times vary by location and vendor availability. Most orders are delivered within 1-2 hours. You can track your delivery in real-time through the app."
      },
      {
        q: "Can I schedule a delivery for later?",
        a: "Yes! When placing an order, you can choose your preferred delivery time. This feature is available for both immediate and future deliveries."
      },
      {
        q: "What if I'm not home during delivery?",
        a: "You can provide delivery instructions in the app, such as leaving the gas with a neighbor or in a safe location. You can also contact your vendor directly through the app."
      }
    ]
  },
  {
    category: "Payments",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept multiple payment methods including card payments, bank transfers, and cash on delivery. All in-app payments are secure and encrypted."
      },
      {
        q: "Are there any hidden fees?",
        a: "No hidden fees! The price you see in the app includes the gas cost and delivery fee. You'll see the total before confirming your order."
      },
      {
        q: "How do refunds work?",
        a: "If there's an issue with your order, contact our support team within 24 hours. We'll investigate and process refunds for eligible cases."
      }
    ]
  },
  {
    category: "For Vendors",
    questions: [
      {
        q: "How do I become a GasLink vendor?",
        a: "Click on 'Become a Vendor' in the navigation menu and complete the registration form. Our team will review your application and verify your documents."
      },
      {
        q: "What are the requirements to become a vendor?",
        a: "Vendors must have a registered business, valid CAC documents, and meet our safety standards. More details are provided during the registration process."
      }
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A2472] to-[#2B4F8C] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-[#E8EDF5] max-w-2xl mx-auto mb-8">
            Find answers to common questions about GasLink
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B7FBD]"
            />
            <Search className="absolute right-4 top-4 h-6 w-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="text-2xl font-bold text-[#0A2472] mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const uniqueIndex = `${categoryIndex}-${questionIndex}`
                  const numericIndex = parseInt(`${categoryIndex}${questionIndex}`)
                  const isOpen = openItems.includes(numericIndex)
                  
                  return (
                    <div key={questionIndex} className="border border-[#D1D9E8] rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(numericIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#E8EDF5] transition"
                      >
                        <span className="font-semibold text-[#0A2472]">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-[#2B4F8C]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-[#2B4F8C]" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-[#E8EDF5] border-t border-[#D1D9E8]">
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No FAQs found matching your search.</p>
            </div>
          )}

          {/* Still need help */}
          <div className="mt-12 text-center p-8 bg-[#E8EDF5] rounded-lg">
            <h3 className="text-xl font-bold text-[#0A2472] mb-2">Still need help?</h3>
            <p className="text-gray-600 mb-4">Can't find what you're looking for? Contact our support team.</p>
            <Link 
              href="/support/contact"
              className="inline-block bg-[#0A2472] text-white px-6 py-3 rounded-lg hover:bg-[#2B4F8C] transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}