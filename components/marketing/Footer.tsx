// components/marketing/Footer.tsx
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold text-primary">GasLink</h3>
            <p className="mt-4 text-sm text-gray-600">
              Connecting you with trusted gas vendors for all your gas needs. Fast, reliable, and safe delivery.
            </p>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Platforms</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                 How it works
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/for-vendors" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Cylinder Safety
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

    
          <div>
            <h4 className="text-lg font-semibold text-gray-900">  Business</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                 <Link href="/Become-a-vendor" className="text-sm text-gray-600 hover:text-primary transition-colors">Become a Vendor</Link></li>
              <li>Vendor Portal</li>
              <li>Partner Program</li>
              <li>Logistics Fleet</li>
            </ul>
          </div>

         
           <div>
            <h4 className="text-lg font-semibold text-gray-900">Platforms</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                 About Us
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/3" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
         
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} GasLink Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}