// components/marketing/Footer.tsx
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {  // Make sure this is 'export default'
  return (
    <footer className="bg-[#0A2472] text-white">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">GasLink</h3>
            <p className="mt-4 text-sm text-[#E8EDF5]">
              Connecting you with trusted gas vendors for all your gas needs. Fast, reliable, and safe delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[#E8EDF5] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-[#E8EDF5] hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/for-vendors" className="text-sm text-[#E8EDF5] hover:text-white transition-colors">
                  For Vendors
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-[#E8EDF5] hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#E8EDF5]">
              <li>Email: gaslink@gmail.com</li>
              <li>Phone: +234 123 456 7890</li>
              <li>Monday - Friday: 8am - 6pm</li>
              <li>Saturday: 9am - 4pm</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-[#E8EDF5] hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E8EDF5] hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E8EDF5] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E8EDF5] hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-[#E8EDF5]">
                Download our app:
              </p>
              <div className="mt-2 flex space-x-2">
                <span className="inline-block bg-[#2B4F8C] text-white text-xs px-2 py-1 rounded">App Store</span>
                <span className="inline-block bg-[#2B4F8C] text-white text-xs px-2 py-1 rounded">Google Play</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#5B7FBD] pt-8 text-center">
          <p className="text-sm text-[#E8EDF5]">
            © {new Date().getFullYear()} GasLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}