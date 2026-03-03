import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GasLink - Your Trusted Gas Delivery Service',
  description: 'Order cooking gas, industrial gas, and more for delivery right to your doorstep. Connect with verified vendors in your area.',
  keywords: 'gas delivery, cooking gas, industrial gas, gas vendors, gas cylinder',
  authors: [{ name: 'GasLink Team' }],
  openGraph: {
    title: 'GasLink - Your Trusted Gas Delivery Service',
    description: 'Order cooking gas, industrial gas, and more for delivery right to your doorstep.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}