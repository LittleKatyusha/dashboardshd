"use client"

import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenubarContextValue {
  activeMenu: string | null
  setActiveMenu: (menu: string | null) => void
}

const MenubarContext = React.createContext<MenubarContextValue | undefined>(undefined)

function useMenubar() {
  const context = React.useContext(MenubarContext)
  if (!context) {
    throw new Error("useMenubar must be used within a Menubar")
  }
  return context
}

interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, children, ...props }, ref) => {
    const [activeMenu, setActiveMenu] = React.useState<string | null>(null)

    return (
      <MenubarContext.Provider value={{ activeMenu, setActiveMenu }}>
        <div
          ref={ref}
          className={cn(
            "flex h-10 items-center space-x-1 rounded-lg border bg-background p-1",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </MenubarContext.Provider>
    )
  }
)
Menubar.displayName = "Menubar"

interface MenubarTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const MenubarTrigger = React.forwardRef<HTMLDivElement, MenubarTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const { activeMenu, setActiveMenu } = useMenubar()
    const isActive = activeMenu === value

    return (
      <div
        ref={ref}
        className={cn(
          "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          isActive && "bg-accent text-accent-foreground",
          className
        )}
        onClick={() => setActiveMenu(isActive ? null : value)}
        data-state={isActive ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    )
  }
)
MenubarTrigger.displayName = "MenubarTrigger"

interface MenubarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const MenubarContent = React.forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { activeMenu } = useMenubar()
    const isActive = activeMenu === value

    if (!isActive) return null

    return (
      <div
        ref={ref}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
MenubarContent.displayName = "MenubarContent"

interface MenubarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
}

const MenubarItem = React.forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ className, inset, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
MenubarItem.displayName = "MenubarItem"

interface MenubarCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
}

const MenubarCheckboxItem = React.forwardRef<HTMLDivElement, MenubarCheckboxItemProps>(
  ({ className, children, checked, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  )
)
MenubarCheckboxItem.displayName = "MenubarCheckboxItem"

interface MenubarRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean
}

const MenubarRadioItem = React.forwardRef<HTMLDivElement, MenubarRadioItemProps>(
  ({ className, children, checked, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked && <Circle className="h-2 w-2 fill-current" />}
      </span>
      {children}
    </div>
  )
)
MenubarRadioItem.displayName = "MenubarRadioItem"

interface MenubarLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean
}

const MenubarLabel = React.forwardRef<HTMLDivElement, MenubarLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
)
MenubarLabel.displayName = "MenubarLabel"

interface MenubarSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const MenubarSeparator = React.forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  )
)
MenubarSeparator.displayName = "MenubarSeparator"

interface MenubarShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const MenubarShortcut = React.forwardRef<HTMLSpanElement, MenubarShortcutProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "ml-auto text-xs tracking-widest text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)
MenubarShortcut.displayName = "MenubarShortcut"

export {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
} 