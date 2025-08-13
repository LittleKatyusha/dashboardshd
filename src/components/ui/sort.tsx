"use client"

import * as React from "react"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SortOption {
  key: string
  label: string
}

interface SortProps extends React.HTMLAttributes<HTMLDivElement> {
  options: SortOption[]
  value?: string
  direction?: "asc" | "desc"
  onValueChange?: (value: string) => void
  onDirectionChange?: (direction: "asc" | "desc") => void
  disabled?: boolean
}

const Sort = React.forwardRef<HTMLDivElement, SortProps>(
  ({ 
    className, 
    options, 
    value, 
    direction = "asc", 
    onValueChange, 
    onDirectionChange,
    disabled = false,
    ...props 
  }, ref) => {
    const handleValueChange = (newValue: string) => {
      onValueChange?.(newValue)
    }

    const handleDirectionChange = () => {
      const newDirection = direction === "asc" ? "desc" : "asc"
      onDirectionChange?.(newDirection)
    }

    const getDirectionIcon = () => {
      if (direction === "asc") {
        return <ArrowUp className="h-4 w-4" />
      }
      return <ArrowDown className="h-4 w-4" />
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          Sort by:
        </span>
        
        <Select
          value={value}
          onValueChange={handleValueChange}
          disabled={disabled}
        >
          <SelectTrigger className="w-40 h-9">
            <SelectValue placeholder="Select field" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {value && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleDirectionChange}
            disabled={disabled}
            className="h-9 w-9 p-0"
            title={`Sort ${direction === "asc" ? "descending" : "ascending"}`}
          >
            {getDirectionIcon()}
            <span className="sr-only">
              {direction === "asc" ? "Sort descending" : "Sort ascending"}
            </span>
          </Button>
        )}
      </div>
    )
  }
)
Sort.displayName = "Sort"

export { Sort } 