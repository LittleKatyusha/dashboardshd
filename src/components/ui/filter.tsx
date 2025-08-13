"use client"

import * as React from "react"
import { Filter as FilterIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterOption {
  key: string
  label: string
  type: "text" | "select" | "date" | "number"
  options?: { value: string; label: string }[]
  placeholder?: string
}

interface FilterProps extends React.HTMLAttributes<HTMLDivElement> {
  options: FilterOption[]
  values: Record<string, any>
  onValuesChange: (values: Record<string, any>) => void
  onClear?: () => void
  showClearButton?: boolean
  disabled?: boolean
}

const Filter = React.forwardRef<HTMLDivElement, FilterProps>(
  ({ 
    className, 
    options, 
    values, 
    onValuesChange, 
    onClear,
    showClearButton = true,
    disabled = false,
    ...props 
  }, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    const handleValueChange = (key: string, value: any) => {
      const newValues = { ...values, [key]: value }
      onValuesChange(newValues)
    }

    const handleClear = () => {
      onClear?.()
      setIsExpanded(false)
    }

    const hasActiveFilters = Object.values(values).some(value => 
      value !== undefined && value !== null && value !== ""
    )

    const renderFilterInput = (option: FilterOption) => {
      const value = values[option.key] || ""

      switch (option.type) {
        case "text":
          return (
            <Input
              placeholder={option.placeholder || `Enter ${option.label.toLowerCase()}`}
              value={value}
              onChange={(e) => handleValueChange(option.key, e.target.value)}
              disabled={disabled}
              className="h-9"
            />
          )
        
        case "select":
          return (
            <Select
              value={value}
              onValueChange={(val) => handleValueChange(option.key, val)}
              disabled={disabled}
            >
              <SelectTrigger className="h-9">
                <SelectValue placeholder={option.placeholder || `Select ${option.label.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {option.options?.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )
        
        case "date":
          return (
            <Input
              type="date"
              value={value}
              onChange={(e) => handleValueChange(option.key, e.target.value)}
              disabled={disabled}
              className="h-9"
            />
          )
        
        case "number":
          return (
            <Input
              type="number"
              placeholder={option.placeholder || `Enter ${option.label.toLowerCase()}`}
              value={value}
              onChange={(e) => handleValueChange(option.key, e.target.value)}
              disabled={disabled}
              className="h-9"
            />
          )
        
        default:
          return null
      }
    }

    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        <div className="flex items-center gap-2 mb-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            disabled={disabled}
            className="flex items-center gap-2"
          >
            <FilterIcon className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <span className="ml-1 h-2 w-2 rounded-full bg-primary" />
            )}
          </Button>
          
          {showClearButton && hasActiveFilters && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              disabled={disabled}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
        
        {isExpanded && (
          <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {options.map((option) => (
                <div key={option.key} className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {option.label}
                  </label>
                  {renderFilterInput(option)}
                </div>
              ))}
            </div>
            
            <div className="flex justify-end gap-2 pt-2 border-t">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(false)}
              >
                Close
              </Button>
              {hasActiveFilters && (
                <Button
                  type="button"
                  size="sm"
                  onClick={handleClear}
                >
                  Clear All
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)
Filter.displayName = "Filter"

export { Filter } 