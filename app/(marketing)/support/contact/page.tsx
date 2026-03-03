// app/(marketing)/support/contact/page.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This will be connected to your backend later
    alert('Form submitted! Our team will get back to you soon.')
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A2472] to-[#2B4F8C] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Support</h1>
          <p className="text-xl text-[#E8EDF5] max-w-2xl mx-auto">
            Get in touch with our team. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-[#E8EDF5] p-6 rounded-lg space-y-6">
                <h2 className="text-2xl font-bold text-[#0A2472] mb-4">Contact Information</h2>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-[#0A2472] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0A2472]">Email</h3>
                    <p className="text-gray-600">support@gaslink.com</p>
                    <p className="text-sm text-gray-500">24-hour response time</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-[#0A2472] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0A2472]">Phone</h3>
                    <p className="text-gray-600">+234 (0) 123 456 7890</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-[#0A2472] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0A2472]">Live Chat</h3>
                    <p className="text-gray-600">Coming soon!</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D1D9E8]">
                  <h3 className="font-semibold text-[#0A2472] mb-2">Support Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-600">Saturday: 9am - 4pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0A2472] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-[#D1D9E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7FBD]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0A2472] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-[#D1D9E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7FBD]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#0A2472] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-[#D1D9E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7FBD]"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0A2472] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-[#D1D9E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7FBD]"
                    placeholder="Tell us more about your issue..."
                  />
                </div>

                <Button type="submit" className="w-full bg-[#0A2472] text-white hover:bg-[#2B4F8C] py-3 flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}