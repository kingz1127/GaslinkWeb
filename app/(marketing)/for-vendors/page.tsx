'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, TrendingUp, Users, MapPin, DollarSign, Clock, Shield, Smartphone } from 'lucide-react'

export default function ForVendorsPage() {
  const [showPopup, setShowPopup] = useState(true)

  return (
    <div className="flex flex-col">
      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Icon */}
            <div className="w-20 h-20 bg-[#0A2472] rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>

            {/* Content */}
            <h2 className="text-3xl font-bold text-center text-[#0A2472] mb-4">
              Coming Soon!
            </h2>
            
            <p className="text-gray-600 text-center mb-6">
              We're working hard to bring vendor registration to GasLink. 
              Soon you'll be able to join our platform and grow your gas business!
            </p>

            {/* Features preview */}
            <div className="bg-[#E8EDF5] rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-[#0A2472] mb-3">What's coming:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-[#5B7FBD]" />
                  <span>Easy vendor registration</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4 text-[#5B7FBD]" />
                  <span>Reach thousands of customers</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 text-[#5B7FBD]" />
                  <span>Grow your business revenue</span>
                </li>
              </ul>
            </div>

            {/* Notify button */}
            <Button 
              className="w-full bg-[#0A2472] text-white hover:bg-[#2B4F8C]"
              onClick={() => {
                alert("Thanks! We'll notify you when vendor registration opens.")
                setShowPopup(false)
              }}
            >
              Notify Me When Live
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              Be the first to know when we launch
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2472] to-[#2B4F8C] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Grow Your Gas Business with GasLink
          </h1>
          <p className="text-xl text-[#E8EDF5] max-w-2xl mx-auto mb-10">
            Join the largest network of gas vendors and connect with thousands of customers in your area
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#5B7FBD] text-[#0A2472] hover:bg-[#9cadcc] px-8"
            onClick={() => setShowPopup(true)}
          >
            Become a Vendor
          </Button>
        </div>
      </section>

      {/* Benefits Section (slightly dimmed to indicate coming soon) */}
      <section className="py-20 bg-white opacity-75">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0A2472] mb-4">
            Why Partner with GasLink?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Coming soon - here's what you can expect when we launch
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "More Customers",
                desc: "Reach thousands of customers actively looking for gas delivery"
              },
              {
                icon: MapPin,
                title: "Local Presence",
                desc: "Get discovered by customers in your delivery area"
              },
              {
                icon: TrendingUp,
                title: "Grow Your Business",
                desc: "Increase your sales and expand your customer base"
              },
              {
                icon: DollarSign,
                title: "Fair Commission",
                desc: "Competitive rates with transparent pricing"
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                desc: "Choose your own hours and delivery zones"
              },
              {
                icon: Shield,
                title: "Verified Platform",
                desc: "Join a trusted platform with built-in safety features"
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-[#D1D9E8]">
                <div className="inline-block p-3 bg-[#E8EDF5] rounded-full mb-4">
                  <benefit.icon className="h-6 w-6 text-[#0A2472]" />
                </div>
                <h3 className="font-semibold text-[#0A2472] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 bg-[#E8EDF5] opacity-75">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0A2472] mb-4">
            Simple Registration Process
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Coming soon - getting started will be easy
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Sign Up", desc: "Create your vendor account" },
              { step: "2", title: "Get Verified", desc: "Submit your business documents" },
              { step: "3", title: "Start Selling", desc: "Accept orders and grow" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[#0A2472] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#0A2472] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0A2472] mb-4">
            Want to be notified when we launch?
          </h2>
          <p className="text-gray-600 mb-6">
            Leave your email and we'll let you know when vendor registration opens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-[#D1D9E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B7FBD]"
            />
            <Button 
              className="bg-[#0A2472] text-white hover:bg-[#2B4F8C] whitespace-nowrap"
              onClick={() => alert("Thanks! We'll notify you when we launch.")}
            >
              Notify Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}