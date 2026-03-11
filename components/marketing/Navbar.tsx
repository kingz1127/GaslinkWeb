
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'For Vendors', href: 'for-vendors' },
  { name: 'Support', href: '/support' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
   <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/50 to-transparent">
  <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8 relative h-20" aria-label="Global"> 
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5 flex items-center">
        <img 
          src="/images/gaslink-logo.png" 
          alt="Gaslink Logo" 
          className="h-40 w-auto"
        />
      </Link>
    </div>
        
       
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        
       <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
  <Button 
    className="relative overflow-hidden bg-transparent border border-white/30 text-white hover:border-white/60 rounded-lg px-6 py-2.5 transition-all duration-300 group"
    asChild
  >
    <Link href="/become-a-vendor">
      <span className="relative z-10">Become a Vendor</span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    </Link>
  </Button>
  
  <Button 
    className="relative overflow-hidden bg-gradient-to-r from-[#0A2472] to-[#4D6CFA] text-white hover:from-[#0A2472] hover:to-[#5A7AFF] rounded-lg px-7 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 group"
    asChild
  >
    <Link href="#download-app">
      <span className="relative z-10 flex items-center gap-2">
        Download App
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </span>
    </Link>
  </Button>
</div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      
      {mobileMenuOpen && (
        <div className="lg:hidden relative z-50">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-primary">GASLINK</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5" asChild>
                    <Link href="/become-a-vendor" onClick={() => setMobileMenuOpen(false)}>
                      Become a Vendor
                    </Link>
                  </Button>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90" asChild>
                    <Link href="#download-app" onClick={() => setMobileMenuOpen(false)}>
                      Download App
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}