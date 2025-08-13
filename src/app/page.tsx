import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Shield, 
  Zap,
  Star
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto animate-fade-in">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center animate-pulse-glow">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ShadnAdmin
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover-lift">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover-lift">
            Pricing
          </Link>
          <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors hover-lift">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          <Link href="/dashboard" className="hidden sm:block">
            <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover-lift">
              Sign In
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow mobile-btn-large">
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 text-center max-w-6xl mx-auto">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent leading-tight">
            Modern Admin
            <br />
            <span className="text-blue-600 dark:text-blue-400 animate-float">Dashboard</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Powerful, beautiful, and intuitive admin dashboard built with Next.js and Tailwind CSS. 
            Manage your business with style and efficiency.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in px-4">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-lift mobile-btn-large">
              Start Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover-lift bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 mobile-btn-large">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 px-4">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover-lift">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">10K+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Active Users</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover-lift">
              <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">50K+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Orders Processed</p>
          </div>
          <div className="text-center animate-fade-in sm:col-span-2 md:col-span-1" style={{ animationDelay: '0.3s' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover-lift">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">99.9%</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Uptime</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 py-12 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose ShadnAdmin?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Built with modern technologies and designed for the best user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift animate-fade-in mobile-card" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Built with Next.js 15 and optimized for performance. Experience blazing fast load times.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-100 dark:border-green-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift animate-fade-in mobile-card" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Enterprise-grade security with role-based access control and data encryption.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-100 dark:border-purple-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift animate-fade-in mobile-card md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Beautiful Design</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Modern, responsive design that looks great on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of businesses that trust ShadnAdmin for their daily operations. 
            Start your journey today with our powerful dashboard.
          </p>
          <Link href="/dashboard" className="block w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-lift mobile-btn-large">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold">ShadnAdmin</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Modern admin dashboard for modern businesses.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 ShadnAdmin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
