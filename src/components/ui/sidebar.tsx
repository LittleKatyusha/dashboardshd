"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

const SIDEBAR_WIDTH = 256
const SIDEBAR_WIDTH_MOBILE = 320

interface SidebarContextValue {
  isCollapsed: boolean
  isMobile: boolean
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  state: "expanded" | "collapsed" | "mobile"
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined)

function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

function SidebarProvider({
  defaultOpen = true,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
}) {
  const [isCollapsed] = useState(!defaultOpen)
  const [isMobile, setIsMobile] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const state = isMobile ? "mobile" : isCollapsed ? "collapsed" : "expanded"

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        isMobile,
        openMobile,
        setOpenMobile,
        state,
      }}
    >
      <div
        className={cn("flex h-full", className)}
        style={{
          ...style,
          "--sidebar-width": `${SIDEBAR_WIDTH}px`,
          "--sidebar-width-mobile": `${SIDEBAR_WIDTH_MOBILE}px`,
        } as React.CSSProperties}
        {...props}
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      data-slot="sidebar"
      data-sidebar="sidebar"
      data-state={state}
      className={cn(
        "group peer text-sidebar-foreground hidden md:block",
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        "transition-[width] duration-300 ease-in-out",
        state === "collapsed" && "w-16",
        state === "expanded" && "w-(--sidebar-width)",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("flex h-[60px] items-center px-2", className)}
      {...props}
    />
  )
}

function SidebarBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-body"
      className={cn("flex flex-1 flex-col gap-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn("flex items-center gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-label"
      className={cn("px-2 text-xs font-semibold", className)}
      {...props}
    />
  )
}

function SidebarItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-item"
      className={cn("flex items-center gap-2 px-2 py-1", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarSeparator,
  SidebarContent,
  useSidebar,
}
