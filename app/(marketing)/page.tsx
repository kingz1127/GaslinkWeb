// app/(marketing)/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/marketing/Footer";
import {
  Smartphone,
  Shield,
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  Truck,
  ChevronRight,
  Users,
  Apple,
  PlaySquare,
  Calendar1Icon,
  RefreshCcw,
  ShoppingBag,
  Repeat,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#F7F9FC]">

      <section className="relative min-h-[800px] flex items-center">
  
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/header-bg.webp')",
          }}
        />

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#5A6FA0]/80 via-[#2A3F7E]/70 to-[#0A2472]/60"></div>
        <div className="absolute inset-0 z-0 bg-black/30"></div>

      
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
  
            <div className="text-white">
     

              <h1 className="mb-6">
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                  Download the
                </span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] [text-shadow:3px_3px_6px_rgba(0,0,0,0.6)] mt-2">
                  GASLINK Mobile
                </span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] [text-shadow:3px_3px_6px_rgba(0,0,0,0.6)] mt-2">
                  App
                </span>
              </h1>

          
              <p className="text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-lg drop-shadow-lg font-medium [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
                GasLink is available on android playstore and <br /> the IOS
                appstore.
              </p>

            </div>


            <div className="hidden lg:block"></div>
          </div>
        </div>


        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F9FC] to-transparent z-10"></div>
      </section>


      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get your gas delivered in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose Your Service",
                description:
                  "Select refill, exchange, or a new cylinder from our simplified mobile app interface.",
                icon: Smartphone,
              },
              {
                step: "02",
                title: "We Find a Vendor",
                description:
                  "Our smart algorithm matches your request with the closest verified gas station for speed.",
                icon: Users,
              },
              {
                step: "03",
                title: "Gas Arrives Fast",
                description:
                  "A tracked delivery partner picks up and delivers your gas to your doorstep in minutes.",
                icon: Truck,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#F7F9FC] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-300" />
                )}
              </div>
            ))}
          </div>


          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-blue-100">
           
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F9FC] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
     
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Use our Mobile Apps?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Everything you need in one powerful app
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Easy to use",
                    description:
                      "The app is easy to use with a simple interface and 3-click ordering. You can find out what you need to do instantly.",
                    features: [
                      "Simple interface",
                      "3-click ordering",
                      "Saved preferences",
                    ],
                  },
                  {
                    icon: Shield,
                    title: "Secure",
                    description:
                      "Your data is safe with GASLINK. We have strong security measures including bank-level encryption.",
                    features: [
                      "Bank-level encryption",
                      "Secure payments",
                      "Privacy protected",
                    ],
                  },
                  {
                    icon: Zap,
                    title: "Fast",
                    description:
                      "You can get your bill faster. We have fast delivery times with real-time tracking.",
                    features: [
                      "Instant ordering",
                      "Real-time tracking",
                      "Quick delivery",
                    ],
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {feature.description}
                        </p>
                        <ul className="space-y-1">
                          {feature.features.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-xs text-gray-600"
                            >
                              <CheckCircle className="h-3 w-3 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          
            <div className="relative h-[600px] hidden lg:block">
    
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

              {/* Phone 1 - Front */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
                  <img
                    src="/api/placeholder/280/560"
                    alt="GASLINK App Screen 1"
                    className="rounded-3xl shadow-2xl w-[280px] h-[560px] object-cover border-4 border-white"
                  />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Phone 2 - Back */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 z-10 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
                  <img
                    src="/api/placeholder/280/560"
                    alt="GASLINK App Screen 2"
                    className="rounded-3xl shadow-xl w-[280px] h-[560px] object-cover border-4 border-white opacity-90"
                  />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full"></div>
                </div>
              </div>

             
              <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute bottom-20 left-20 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-pulse delay-300">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Services
      </h2>
      <p className="text-lg text-gray-600">
        Comprehensive gas solutions designed for modern homes and
        businesses
      </p>
    </div>

  
    <div className="w-full overflow-x-auto pb-6 -mb-2">
      <div className="flex flex-nowrap gap-6 min-w-min lg:grid lg:grid-cols-4 lg:gap-6">
        {[
          {
            name: "Pickup & Refill",
            description: "Quick refill of your existing cylinder with zero hassle.",
            icon: RefreshCcw,
          },
          {
            name: "Cylinder Exchange",
            description: "Smart fridge monitoring and cylinder tracking",
            icon: Calendar1Icon,
          },
          {
            name: "Cylinder Rental",
            description: "Renting options for events or temporary home needs.",
            icon:  Repeat,
          },
          {
            name: "Home Purchase",
            description: "Buy brand new certified cylinders and accessories",
            icon: ShoppingBag,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="w-[280px] sm:w-[320px] lg:w-auto bg-[#F7F9FC] rounded-2xl p-8 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all group flex-shrink-0 lg:flex-shrink"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
              <service.icon className="h-7 w-7 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.name}
            </h3>
            <p className="text-base text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      
  

           
          </div>
          </div>
        </div>
      </section>


      {/* Experience Better Cooking Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 lg:p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Experience Better Cooking
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Download the GASLINK app today and transform your cooking
                experience with fast, reliable gas delivery right to your
                doorstep.
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                <Button className="bg-black text-white hover:bg-gray-900 rounded-xl px-8 py-7 h-auto border-0 shadow-2xl hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <Apple className="h-8 w-8 fill-white" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="text-lg font-semibold tracking-tight">
                        App Store
                      </div>
                    </div>
                  </div>
                </Button>
                <Button className="bg-black text-white hover:bg-gray-900 rounded-xl px-8 py-7 h-auto border-0 shadow-2xl hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <PlaySquare className="h-8 w-8" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">GET IT ON</div>
                      <div className="text-lg font-semibold tracking-tight">
                        Google Play
                      </div>
                    </div>
                  </div>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
                {[
                  { number: "50k+", label: "Downloads" },
                  { number: "4.8", label: "App Rating" },
                  { number: "15min", label: "Delivery" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
