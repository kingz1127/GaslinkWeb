// import { Button } from '@/components/ui/button'
// import { ArrowRight, Truck, Shield, Clock } from 'lucide-react'
// import Link from 'next/link'
// import Image from 'next/image'

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
//       <div className="container mx-auto px-4">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
//               <Shield className="mr-2 h-4 w-4" />
//               Trusted by 10,000+ customers
//             </div>
            
//             <h1 className="text-4xl font-bold tracking-tight text-primary lg:text-5xl xl:text-6xl">
//               Cooking Gas Delivery{' '}
//               <span className="text-secondary">at Your Fingertips</span>
//             </h1>
            
//             <p className="text-lg text-gray-600 lg:text-xl">
//               Order cooking gas for pickup, exchange, or delivery. Connect with 
//               verified vendors in your area for fast, reliable, and safe service.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
//                 <Link href="/become-a-vendor" className="flex items-center">
//                   Order Now <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//               <Button size="lg" variant="outline" className="border-primary text-primary">
//                 <Link href="/how-it-works">How It Works</Link>
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 pt-8">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary lg:text-3xl">500+</div>
//                 <div className="text-sm text-gray-600">Verified Vendors</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary lg:text-3xl">10k+</div>
//                 <div className="text-sm text-gray-600">Deliveries</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-primary lg:text-3xl">24/7</div>
//                 <div className="text-sm text-gray-600">Support</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Image/Illustration */}
//           <div className="relative hidden lg:block">
//             <div className="relative mx-auto h-[500px] w-[500px]">
//               {/* Decorative circles */}
//               <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
//               <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              
//               {/* Main image placeholder - replace with actual image */}
//               <div className="relative flex h-full w-full items-center justify-center">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-4">
//                     <div className="rounded-2xl bg-white p-4 shadow-lg">
//                       <Truck className="h-8 w-8 text-secondary" />
//                     </div>
//                     <div className="rounded-2xl bg-white p-4 shadow-lg">
//                       <Clock className="h-8 w-8 text-primary" />
//                     </div>
//                   </div>
//                   <div className="mt-8 space-y-4">
//                     <div className="rounded-2xl bg-white p-4 shadow-lg">
//                       <Shield className="h-8 w-8 text-accent" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }