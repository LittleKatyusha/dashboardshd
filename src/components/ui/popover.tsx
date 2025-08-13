"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PopoverContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const PopoverContext = React.createContext<PopoverContextValue | undefined>(undefined)

function usePopover() {
  const context = React.useContext(PopoverContext)
  if (!context) {
    throw new Error("usePopover must be used within a Popover")
  }
  return context
}

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ className, children, open, onOpenChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const controlledOpen = open !== undefined ? open : isOpen
    const controlledSetOpen = onOpenChange || setIsOpen

    return (
      <PopoverContext.Provider value={{ isOpen: controlledOpen, setIsOpen: controlledSetOpen }}>
        <div
          ref={ref}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      </PopoverContext.Provider>
    )
  }
)
Popover.displayName = "Popover"

interface PopoverTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Extends HTML div attributes
}

const PopoverTrigger = React.forwardRef<HTMLDivElement, PopoverTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { setIsOpen } = usePopover()

    return (
      <div
        ref={ref}
        className={cn("inline-block", className)}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
PopoverTrigger.displayName = "PopoverTrigger"

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
}

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, children, side = "bottom", align = "center", ...props }, ref) => {
    const { isOpen, setIsOpen } = usePopover()

    if (!isOpen) return null

    return (
      <>
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
        <div
          ref={ref}
          className={cn(
            "absolute z-50 w-72 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none",
            side === "top" && "bottom-full mb-2",
            side === "bottom" && "top-full mt-2",
            side === "left" && "right-full mr-2",
            side === "right" && "left-full ml-2",
            align === "start" && "left-0",
            align === "center" && "left-1/2 -translate-x-1/2",
            align === "end" && "right-0",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)

PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent } 