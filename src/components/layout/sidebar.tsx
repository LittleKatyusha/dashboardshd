"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import styles from "@/styles/components/sidebar.module.css"
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  ShoppingCart,
  Package,
  Menu,
  ChevronDown,
  ChevronRight,
  UserPlus,
  UserCheck,
  Package2,
  PackageCheck,
  ShoppingBag,
  ShoppingBasket,
  TrendingUp,
  FileBarChart,
  FileSpreadsheet,
  Cog,
  Shield
} from "lucide-react"

interface MenuItem {
  label: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  color: string
  bgColor: string
  borderColor: string
  children?: MenuItem[]
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Extends HTML div attributes
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const routes: MenuItem[] = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
      bgColor: "bg-sky-50 dark:bg-sky-950/30",
      borderColor: "border-sky-200 dark:border-sky-800"
    },
    {
      label: "User Management",
      icon: Users,
      color: "text-violet-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/30",
      borderColor: "border-violet-200 dark:border-violet-800",
      children: [
        {
          label: "All Users",
          icon: Users,
          href: "/dashboard/users",
          color: "text-violet-500",
          bgColor: "bg-violet-50 dark:bg-violet-950/30",
          borderColor: "border-violet-200 dark:border-violet-800"
        },
        {
          label: "Add User",
          icon: UserPlus,
          href: "/dashboard/users/add",
          color: "text-violet-500",
          bgColor: "bg-violet-50 dark:bg-violet-950/30",
          borderColor: "border-violet-200 dark:border-violet-800"
        },
        {
          label: "User Roles",
          icon: UserCheck,
          href: "/dashboard/users/roles",
          color: "text-violet-500",
          bgColor: "bg-violet-50 dark:bg-violet-950/30",
          borderColor: "border-violet-200 dark:border-violet-800"
        }
      ]
    },
    {
      label: "Product Management",
      icon: Package,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
      borderColor: "border-pink-200 dark:border-pink-800",
      children: [
        {
          label: "All Products",
          icon: Package,
          href: "/dashboard/products",
          color: "text-pink-600",
          bgColor: "bg-pink-50 dark:bg-pink-950/30",
          borderColor: "border-pink-200 dark:border-pink-800"
        },
        {
          label: "Add Product",
          icon: Package2,
          href: "/dashboard/products/add",
          color: "text-pink-600",
          bgColor: "bg-pink-50 dark:bg-pink-950/30",
          borderColor: "border-pink-200 dark:border-pink-800"
        },
        {
          label: "Categories",
          icon: PackageCheck,
          href: "/dashboard/products/categories",
          color: "text-pink-600",
          bgColor: "bg-pink-50 dark:bg-pink-950/30",
          borderColor: "border-pink-200 dark:border-pink-800"
        }
      ]
    },
    {
      label: "Order Management",
      icon: ShoppingCart,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      children: [
        {
          label: "All Orders",
          icon: ShoppingCart,
          href: "/dashboard/orders",
          color: "text-orange-600",
          bgColor: "bg-orange-50 dark:bg-orange-950/30",
          borderColor: "border-orange-200 dark:border-orange-800"
        },
        {
          label: "Pending Orders",
          icon: ShoppingBag,
          href: "/dashboard/orders/pending",
          color: "text-orange-600",
          bgColor: "bg-orange-50 dark:bg-orange-950/30",
          borderColor: "border-orange-200 dark:border-orange-800"
        },
        {
          label: "Completed Orders",
          icon: ShoppingBasket,
          href: "/dashboard/orders/completed",
          color: "text-orange-600",
          bgColor: "bg-orange-50 dark:bg-orange-950/30",
          borderColor: "border-orange-200 dark:border-orange-800"
        }
      ]
    },
    {
      label: "Analytics & Reports",
      icon: BarChart3,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      children: [
        {
          label: "Analytics",
          icon: TrendingUp,
          href: "/dashboard/analytics",
          color: "text-emerald-500",
          bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
          borderColor: "border-emerald-200 dark:border-emerald-800"
        },
        {
          label: "Sales Report",
          icon: FileBarChart,
          href: "/dashboard/reports/sales",
          color: "text-emerald-500",
          bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
          borderColor: "border-emerald-200 dark:border-emerald-800"
        },
        {
          label: "Financial Report",
          icon: FileSpreadsheet,
          href: "/dashboard/reports/financial",
          color: "text-emerald-500",
          bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
          borderColor: "border-emerald-200 dark:border-emerald-800"
        }
      ]
    },
    {
      label: "Settings",
      icon: Settings,
      color: "text-gray-600",
      bgColor: "bg-gray-50 dark:bg-gray-800/50",
      borderColor: "border-gray-200 dark:border-gray-700",
      children: [
        {
          label: "General Settings",
          icon: Cog,
          href: "/dashboard/settings",
          color: "text-gray-600",
          bgColor: "bg-gray-50 dark:bg-gray-800/50",
          borderColor: "border-gray-200 dark:border-gray-700"
        },
        {
          label: "Security",
          icon: Shield,
          href: "/dashboard/settings/security",
          color: "text-gray-600",
          bgColor: "bg-gray-50 dark:bg-gray-800/50",
          borderColor: "border-gray-200 dark:border-gray-700"
        }
      ]
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

function DesktopSidebar({ routes, pathname }: { routes: MenuItem[], pathname: string }) {
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (label: string) => {
    setOpenMenus(prev => 
      prev.includes(label) 
        ? prev.filter(menu => menu !== label)
        : [label] // Only keep the current menu open, close all others
    )
  }

  const isMenuOpen = (label: string) => openMenus.includes(label)

  const isChildActive = (children: MenuItem[]) => {
    return children.some(child => child.href === pathname)
  }

  const renderMenuItem = (route: MenuItem, isChild = false) => {
    const isActive = pathname === route.href
    const hasChildren = route.children && route.children.length > 0
    const isParentActive = hasChildren && isChildActive(route.children!)

    if (hasChildren) {
      return (
        <Collapsible key={route.label} open={isMenuOpen(route.label)} onOpenChange={() => toggleMenu(route.label)}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                styles.menuButton,
                isParentActive 
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 text-blue-700 dark:text-blue-300 shadow-lg border border-blue-200/50 dark:border-blue-800/50" 
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 hover:shadow-md"
              )}
            >
              {/* Background gradient effect */}
              <div className={styles.backgroundGradient}></div>
              
              {/* Shimmer effect */}
              <div className={styles.shimmerEffect}></div>
              
              <div className={cn(
                styles.iconContainer,
                isParentActive 
                  ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" 
                  : "bg-slate-100 dark:bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-slate-200 group-hover:to-slate-300 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 group-hover:shadow-md"
              )}>
                <route.icon className={cn(
                  styles.icon,
                  isParentActive 
                    ? "text-white" 
                    : "text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                )} />
              </div>
              
              <span className={styles.menuText}>{route.label}</span>
              
              <div className={styles.chevronContainer}>
                <div className={styles.chevronWrapper}>
                  {isMenuOpen(route.label) ? (
                    <ChevronDown className={styles.chevronIcon} />
                  ) : (
                    <ChevronRight className={styles.chevronIcon} />
                  )}
                </div>
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className={styles.collapsibleContent}>
            {route.children!.map((child, index) => (
              <div 
                key={child.href}
                className={styles.childItemWrapper}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {renderMenuItem(child, true)}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      )
    }

    return (
      <Link
        key={route.href}
        href={route.href!}
        className={cn(
          styles.menuItem,
          isActive 
            ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 text-blue-700 dark:text-blue-300 shadow-lg border border-blue-200/50 dark:border-blue-800/50" 
            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 hover:shadow-md",
          isChild && styles.childMenuItem
        )}
      >
        {/* Background gradient effect */}
        <div className={styles.backgroundGradient}></div>
        
        {/* Shimmer effect */}
        <div className={styles.shimmerEffect}></div>
        
        <div className={cn(
          styles.iconContainer,
          isActive 
            ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" 
            : "bg-slate-100 dark:bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-slate-200 group-hover:to-slate-300 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 group-hover:shadow-md"
        )}>
          <route.icon className={cn(
            styles.icon,
            isActive 
              ? "text-white" 
              : "text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200"
          )} />
        </div>
        
        <span className={styles.regularMenuText}>{route.label}</span>
        
         {isActive && (
           <div className={styles.activeIndicator}></div>
         )}
      </Link>
    )
  }

  return (
    <div className={styles.sidebarContainer}>
      {/* Header dengan glassmorphism effect */}
      <div className={styles.header}>
        <Link href="/dashboard" className="flex items-center space-x-3 font-bold group">
          <div className={styles.logoContainer}>
            <LayoutDashboard className={styles.logoIcon} />
          </div>
          <div className="hidden sm:block">
            <span className={styles.logoText}>
              ShadnAdmin
            </span>
            <div className={styles.logoSubtext}>Admin Dashboard</div>
          </div>
        </Link>
      </div>
      
      {/* Navigation dengan improved styling */}
      <ScrollArea className={styles.scrollArea}>
        <div className={styles.navigationContainer}>
          {routes.map((route) => renderMenuItem(route))}
        </div>
      </ScrollArea>
    </div>
  )
}

function MobileSidebar({ routes, pathname }: { routes: MenuItem[], pathname: string }) {
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (label: string) => {
    setOpenMenus(prev => 
      prev.includes(label) 
        ? prev.filter(menu => menu !== label)
        : [label] // Only keep the current menu open, close all others
    )
  }

  const isMenuOpen = (label: string) => openMenus.includes(label)

  const isChildActive = (children: MenuItem[]) => {
    return children.some(child => child.href === pathname)
  }

  const renderMenuItem = (route: MenuItem, isChild = false) => {
    const isActive = pathname === route.href
    const hasChildren = route.children && route.children.length > 0
    const isParentActive = hasChildren && isChildActive(route.children!)

    if (hasChildren) {
      return (
        <Collapsible key={route.label} open={isMenuOpen(route.label)} onOpenChange={() => toggleMenu(route.label)}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                styles.mobileMenuButton,
                isParentActive 
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 text-blue-700 dark:text-blue-300 shadow-lg border border-blue-200/50 dark:border-blue-800/50" 
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 hover:shadow-md"
              )}
            >
              {/* Background gradient effect */}
              <div className={styles.mobileBackgroundGradient}></div>
              
              <div className={cn(
                styles.mobileIconContainer,
                isParentActive 
                  ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" 
                  : "bg-slate-100 dark:bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-slate-200 group-hover:to-slate-300 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 group-hover:shadow-md"
              )}>
                <route.icon className={cn(
                  styles.mobileIcon,
                  isParentActive 
                    ? "text-white" 
                    : "text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                )} />
              </div>
              
              <span className={styles.mobileMenuText}>{route.label}</span>
              
              <div className={styles.mobileChevronContainer}>
                <div className={styles.chevronWrapper}>
                  {isMenuOpen(route.label) ? (
                    <ChevronDown className={styles.chevronIcon} />
                  ) : (
                    <ChevronRight className={styles.chevronIcon} />
                  )}
                </div>
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className={styles.mobileCollapsibleContent}>
            {route.children!.map((child, index) => (
              <div 
                key={child.href}
                className={styles.childItemWrapper}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {renderMenuItem(child, true)}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      )
    }

    return (
      <Link
        key={route.href}
        href={route.href!}
        className={cn(
          styles.mobileMenuItem,
          isActive 
            ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 text-blue-700 dark:text-blue-300 shadow-lg border border-blue-200/50 dark:border-blue-800/50" 
            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-700/50 hover:shadow-md",
          isChild && styles.mobileChildMenuItem
        )}
      >
        {/* Background gradient effect */}
        <div className={styles.mobileBackgroundGradient}></div>
        
        <div className={cn(
          styles.mobileIconContainer,
          isActive 
            ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" 
            : "bg-slate-100 dark:bg-slate-700 group-hover:bg-gradient-to-br group-hover:from-slate-200 group-hover:to-slate-300 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500 group-hover:shadow-md"
        )}>
          <route.icon className={cn(
            styles.mobileIcon,
            isActive 
              ? "text-white" 
              : "text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200"
          )} />
        </div>
        
        <span className={styles.mobileRegularMenuText}>{route.label}</span>
        
         {isActive && (
           <div className={styles.mobileActiveIndicator}></div>
         )}
      </Link>
    )
  }

  return (
    <div className={styles.mobileSidebarContainer}>
      {/* Mobile Header dengan glassmorphism effect */}
      <div className={styles.mobileHeader}>
        <Link href="/dashboard" className="flex items-center space-x-3 font-bold group">
          <div className={styles.mobileLogoContainer}>
            <LayoutDashboard className={styles.mobileLogoIcon} />
          </div>
          <div>
            <span className={styles.mobileLogoText}>
              ShadnAdmin
            </span>
            <div className={styles.mobileLogoSubtext}>Admin Dashboard</div>
          </div>
        </Link>
      </div>
      
      {/* Mobile Navigation dengan improved styling */}
      <ScrollArea className={styles.mobileScrollArea}>
        <div className={styles.navigationContainer}>
          {routes.map((route) => renderMenuItem(route))}
        </div>
      </ScrollArea>
    </div>
  )
} 