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
import { Bell, Search, Settings, LogOut, User, Sparkles, Menu } from "lucide-react"
import styles from "@/styles/layout/header.module.css"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <header className={styles.header}>
      {/* Mobile Menu Button - Hidden on larger screens */}
      <Button variant="ghost" size="icon" className={styles.mobileMenuButton}>
        <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <div className={styles.mainContent}>
        {/* Search Bar - Responsive behavior */}
        <div className={`${styles.searchContainer} ${isSearchExpanded ? styles.expanded : ''}`}>
          <Search className={styles.searchIcon} />
          <Input
            placeholder={isSearchExpanded ? "Search anything..." : "Search..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
            className={styles.searchInput}
          />
        </div>
      </div>
      
      <div className={styles.actionsContainer}>
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Notifications - Hidden on very small screens */}
        <Button variant="ghost" size="icon" className={`${styles.notificationButton} hidden sm:flex`}>
          <Bell className={styles.notificationIcon} />
          <span className={styles.notificationBadge}>
            3
          </span>
        </Button>
        
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={styles.userMenuButton}>
              <Avatar className={styles.avatar}>
                <AvatarImage src="/avatars/01.png" alt="@admin" />
                <AvatarFallback className={styles.avatarFallback}>
                  AD
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={styles.dropdownContent} align="end" forceMount>
            <DropdownMenuLabel className={styles.dropdownLabel}>
              <div className={styles.userInfoContainer}>
                <Avatar className={styles.userAvatar}>
                  <AvatarImage src="/avatars/01.png" alt="@admin" />
                  <AvatarFallback className={styles.avatarFallback}>
                    AD
                  </AvatarFallback>
                </Avatar>
                <div className={styles.userDetails}>
                  <p className={styles.userName}>Admin User</p>
                  <p className={styles.userEmail}>
                    admin@example.com
                  </p>
                  <div className={styles.statusContainer}>
                    <div className={styles.statusDot}></div>
                    <span className={styles.statusText}>Online</span>
                  </div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className={styles.dropdownSeparator} />
            <DropdownMenuItem className={styles.dropdownMenuItem}>
              <div className={styles.menuItemContent}>
                <User className={styles.menuItemIcon} />
                <div className={styles.menuItemText}>
                  <span className={styles.menuItemTitle}>Profile</span>
                  <p className={styles.menuItemDescription}>Manage your account</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className={styles.dropdownMenuItem}>
              <div className={styles.menuItemContent}>
                <Settings className={styles.menuItemIcon} />
                <div className={styles.menuItemText}>
                  <span className={styles.menuItemTitle}>Settings</span>
                  <p className={styles.menuItemDescription}>Configure preferences</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className={styles.dropdownSeparator} />
            <DropdownMenuItem className={`${styles.dropdownMenuItem} ${styles.upgradeMenuItem}`}>
              <div className={styles.menuItemContent}>
                <Sparkles className={styles.menuItemIcon} />
                <div className={styles.menuItemText}>
                  <span className={styles.menuItemTitle}>Upgrade to Pro</span>
                  <p className={styles.menuItemDescription}>Unlock premium features</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className={styles.dropdownSeparator} />
            <DropdownMenuItem className={`${styles.dropdownMenuItem} ${styles.logoutMenuItem}`}>
              <div className={styles.menuItemContent}>
                <LogOut className={styles.menuItemIcon} />
                <span>Log out</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
} 