"use client"

import * as React from "react"
import { Search as SearchIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  onSearch?: (value: string) => void
  showClearButton?: boolean
  disabled?: boolean
}

const Search = React.forwardRef<HTMLDivElement, SearchProps>(
  ({ 
    className, 
    placeholder = "Search...", 
    value = "", 
    onValueChange, 
    onSearch,
    showClearButton = true,
    disabled = false,
    ...props 
  }, ref) => {
    const [searchValue, setSearchValue] = React.useState(value)
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
      setSearchValue(value)
    }, [value])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setSearchValue(newValue)
      onValueChange?.(newValue)
    }

    const handleClear = () => {
      setSearchValue("")
      onValueChange?.("")
      inputRef.current?.focus()
    }

    const handleSearch = () => {
      onSearch?.(searchValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    }

    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        {...props}
      >
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className="pl-10 pr-10 h-10 w-full"
          />
          {showClearButton && searchValue && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 p-0 hover:bg-transparent"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
        
        {onSearch && (
          <Button
            type="button"
            onClick={handleSearch}
            disabled={disabled || !searchValue}
            className="mt-2 w-full sm:w-auto"
          >
            Search
          </Button>
        )}
      </div>
    )
  }
)
Search.displayName = "Search"

export { Search } 