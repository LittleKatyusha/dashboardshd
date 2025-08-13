"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Bell, Search, Settings, LogOut, User, Crown, Sparkles, Menu } from "lucide-react"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <header className="flex h-14 sm:h-16 items-center gap-2 sm:gap-4 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-2 sm:px-3 md:px-4 lg:px-6">
      {/* Mobile Menu Button - Hidden on larger screens */}
      <Button variant="ghost" size="icon" className="md:hidden h-8 w-8 sm:h-9 sm:w-9 touch-target">
        <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <div className="flex flex-1 items-center gap-2 sm:gap-4">
        {/* Search Bar - Responsive behavior */}
        <div className={`relative transition-all duration-300 ${
          isSearchExpanded ? 'flex-1 max-w-none' : 'max-w-[160px] sm:max-w-[200px] md:max-w-sm'
        }`}>
          <Search className="absolute left-2 sm:left-3 top-2 sm:top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <Input
            placeholder={isSearchExpanded ? "Search anything..." : "Search..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
            className="pl-8 sm:pl-10 h-8 sm:h-9 md:h-10 rounded-lg sm:rounded-xl border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 text-gray-900 dark:text-gray-100 text-sm sm:text-base touch-target"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Notifications - Hidden on very small screens */}
        <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:flex touch-target">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400" />
          <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xs text-white flex items-center justify-center text-[8px] sm:text-[10px] font-bold animate-pulse">
            3
          </span>
        </Button>
        
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-0 touch-target">
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-blue-300 dark:hover:ring-blue-600 transition-all duration-300">
                <AvatarImage src="/avatars/01.png" alt="@admin" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-xs sm:text-sm md:text-base">
                  AD
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 sm:w-72 md:w-64 p-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700" align="end" forceMount>
            <DropdownMenuLabel className="font-normal p-3">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="/avatars/01.png" alt="@admin" />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                    AD
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1 min-w-0">
                  <p className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100 truncate">Admin User</p>
                  <p className="text-xs leading-none text-gray-500 dark:text-gray-400 truncate">
                    admin@example.com
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600 dark:text-green-400">Online</span>
                  </div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
            <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <User className="mr-3 h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="font-medium text-gray-900 dark:text-gray-100">Profile</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Manage your account</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Settings className="mr-3 h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="font-medium text-gray-900 dark:text-gray-100">Settings</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Configure preferences</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
            <DropdownMenuItem className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Sparkles className="mr-3 h-4 w-4 text-purple-600 flex-shrink-0" />
              <div className="min-w-0">
                <span className="font-medium text-gray-900 dark:text-gray-100">Upgrade to Pro</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Unlock premium features</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
            <DropdownMenuItem className="p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              <LogOut className="mr-3 h-4 w-4 flex-shrink-0" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
} 