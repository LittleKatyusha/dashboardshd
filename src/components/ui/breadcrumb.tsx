"use client"

import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  // Extends HTML element attributes
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </nav>
  )
)
Breadcrumb.displayName = "Breadcrumb"

interface BreadcrumbListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  // Extends HTML ordered list attributes
}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, children, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn("flex flex-wrap items-center gap-1 break-words text-sm", className)}
      {...props}
    >
      {children}
    </ol>
  )
)
BreadcrumbList.displayName = "BreadcrumbList"

interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  // Extends HTML list item attributes
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    >
      {children}
    </li>
  )
)
BreadcrumbItem.displayName = "BreadcrumbItem"

interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, href, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          className={cn(
            "hover:text-foreground transition-colors",
            className
          )}
          {...props}
        >
          {children}
        </a>
      )
    }
    
    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={cn("text-foreground", className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

interface BreadcrumbPageProps extends React.HTMLAttributes<HTMLSpanElement> {
  // Extends HTML span attributes
}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    >
      {children}
    </span>
  )
)
BreadcrumbPage.displayName = "BreadcrumbPage"

interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLSpanElement> {}

const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      {children || <ChevronRight className="h-4 w-4" />}
    </span>
  )
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

interface BreadcrumbHomeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
}

const BreadcrumbHome = React.forwardRef<HTMLAnchorElement, BreadcrumbHomeProps>(
  ({ className, href, ...props }, ref) => (
    <BreadcrumbLink
      ref={ref}
      href={href}
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    >
      <Home className="h-4 w-4" />
      <span className="sr-only">Home</span>
    </BreadcrumbLink>
  )
)
BreadcrumbHome.displayName = "BreadcrumbHome"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} 