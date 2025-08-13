"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion")
  }
  return context
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue = [], children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>(
      Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
    )

    const toggleItem = React.useCallback((value: string) => {
      if (type === "single") {
        setOpenItems(openItems.includes(value) ? [] : [value])
      } else {
        setOpenItems(prev => 
          prev.includes(value) 
            ? prev.filter(item => item !== value)
            : [...prev, value]
        )
      }
    }, [type, openItems])

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem }}>
        <div
          ref={ref}
          className={cn("w-full", className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border-b", className)}
      {...props}
    >
      {children}
    </div>
  )
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, value, ...props }, ref) => {
    const { openItems, toggleItem } = useAccordion()
    const isOpen = openItems.includes(value)

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        onClick={() => toggleItem(value)}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <ChevronDown className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, value, ...props }, ref) => {
    const { openItems } = useAccordion()
    const isOpen = openItems.includes(value)

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up"
        )}
        {...props}
      >
        {isOpen && (
          <div className={cn("pb-4 pt-0", className)}>
            {children}
          </div>
        )}
      </div>
    )
  }
)

AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 