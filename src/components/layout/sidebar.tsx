"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  FileText, 
  BarChart3, 
  ShoppingCart,
  Package,
  CreditCard,
  Bell,
  Menu,
  Sparkles
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
      bgColor: "bg-sky-50 dark:bg-sky-950/30",
      borderColor: "border-sky-200 dark:border-sky-800"
    },
    {
      label: "Users",
      icon: Users,
      href: "/dashboard/users",
      color: "text-violet-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/30",
      borderColor: "border-violet-200 dark:border-violet-800"
    },
    {
      label: "Products",
      icon: Package,
      color: "text-pink-600",
      href: "/dashboard/products",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
      borderColor: "border-pink-200 dark:border-pink-800"
    },
    {
      label: "Orders",
      icon: ShoppingCart,
      href: "/dashboard/orders",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      label: "Analytics",
      icon: BarChart3,
      color: "text-emerald-500",
      href: "/dashboard/analytics",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800"
    },
    {
      label: "Reports",
      icon: FileText,
      color: "text-blue-600",
      href: "/dashboard/reports",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      color: "text-gray-600",
      bgColor: "bg-gray-50 dark:bg-gray-800/50",
      borderColor: "border-gray-200 dark:border-gray-700"
    },
  ]

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <MobileSidebar routes={routes} pathname={pathname} />
        </SheetContent>
      </Sheet>
      <div className={cn("hidden md:flex md:w-64 md:flex-col", className)}>
        <DesktopSidebar routes={routes} pathname={pathname} />
      </div>
    </>
  )
}

function DesktopSidebar({ routes, pathname }: { routes: any[], pathname: string }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="flex h-[70px] items-center border-b border-gray-100 dark:border-gray-800 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
        <Link href="/dashboard" className="flex items-center space-x-3 font-bold group">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <LayoutDashboard className="h-6 w-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ShadnAdmin
            </span>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-normal">Dashboard</div>
          </div>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-4 py-4">
        <div className="space-y-2">
          {routes.map((route) => {
            const isActive = pathname === route.href
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex items-center gap-x-3 text-sm font-medium px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden",
                  isActive 
                    ? `${route.bgColor} ${route.borderColor} border text-gray-900 dark:text-gray-100 shadow-sm` 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 dark:via-gray-700/50 to-white/0 dark:to-gray-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                  isActive 
                    ? "bg-white dark:bg-gray-800 shadow-sm" 
                    : "bg-gray-100 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 group-hover:shadow-sm"
                )}>
                  <route.icon className={cn("h-4 w-4", route.color)} />
                </div>
                <span className="relative z-10">{route.label}</span>
                {isActive && (
                  <div className="absolute right-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                )}
              </Link>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}

function MobileSidebar({ routes, pathname }: { routes: any[], pathname: string }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-white dark:bg-gray-900">
      <div className="flex h-[60px] sm:h-[70px] items-center border-b border-gray-100 dark:border-gray-800 px-3 sm:px-4 md:px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
        <Link href="/dashboard" className="flex items-center space-x-2 sm:space-x-3 font-bold">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <LayoutDashboard className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <span className="text-base sm:text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ShadnAdmin
          </span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 sm:px-3 md:px-4 py-3 sm:py-4">
        <div className="space-y-1 sm:space-y-2">
          {routes.map((route) => {
            const isActive = pathname === route.href
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex items-center gap-x-2 sm:gap-x-3 text-sm font-medium px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 relative overflow-hidden min-h-[44px] sm:min-h-[48px] touch-target",
                  isActive 
                    ? `${route.bgColor} ${route.borderColor} border text-gray-900 dark:text-gray-100 shadow-sm` 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 dark:via-gray-700/50 to-white/0 dark:to-gray-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0",
                  isActive 
                    ? "bg-white dark:bg-gray-800 shadow-sm" 
                    : "bg-gray-100 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 group-hover:shadow-sm"
                )}>
                  <route.icon className={cn("h-3 w-3 sm:h-4 sm:w-4", route.color)} />
                </div>
                <span className="relative z-10 flex-1 text-sm sm:text-base">{route.label}</span>
                {isActive && (
                  <div className="absolute right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                )}
              </Link>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
} 