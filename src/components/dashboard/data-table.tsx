"use client"

import React, { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"

interface DataTableProps {
  title: string
  data: Array<Record<string, string | number | boolean>>
  columns: Array<{
    key: string
    label: string
    sortable?: boolean
    filterable?: boolean
    width?: string
  }>
  searchable?: boolean
  pagination?: boolean
  sortable?: boolean
  filterable?: boolean
  pageSize?: number
  showPageSizeSelector?: boolean
}

export function DataTable({ 
  title, 
  data, 
  columns, 
  searchable = true, 
  pagination = true,
  sortable = true,
  filterable = true,
  pageSize: initialPageSize = 10,
  showPageSizeSelector = true
}: DataTableProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: 'asc' | 'desc'
  } | null>(null)
  const [filters] = useState<Record<string, string | undefined>>({})
  const [activeFilter, setActiveFilter] = useState('all');

  // Reset to first page when search or filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, filters])

  // Filter data based on search query and filters
  const filteredData = useMemo(() => {
    const result = data.filter((item) => {
      // Search across all fields
      if (searchQuery) {
        const searchMatch = Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
        if (!searchMatch) return false
      }

      // Apply column filters
      for (const [key, filterValue] of Object.entries(filters)) {
        if (filterValue && item[key] !== filterValue) {
          return false
        }
      }

      return true
    })

    // Sort data
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]
        
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
      })
    }

    return result
  }, [data, searchQuery, filters, sortConfig])

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentData = filteredData.slice(startIndex, endIndex)

  // Handle sorting
  const handleSort = (key: string) => {
    if (!sortable) return
    
    setSortConfig(current => {
      if (current?.key === key) {
        if (current.direction === 'asc') {
          return { key, direction: 'desc' }
        } else {
          return null
        }
      } else {
        return { key, direction: 'asc' }
      }
    })
  }

  const renderCell = (item: Record<string, string | number | boolean>, column: { key: string; label: string }) => {
    const value = item[column.key]
    
    // Special rendering for status fields
    if (column.key === "status") {
      if (value === "Completed" || value === "Active" || value === "In Stock") {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800">
            <span className="w-1.5 h-1.5 bg-green-400 dark:bg-green-300 rounded-full mr-1.5"></span>
            {value}
          </span>
        )
      } else if (value === "Pending" || value === "Low Stock") {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">
            <span className="w-1.5 h-1.5 bg-yellow-400 dark:bg-yellow-300 rounded-full mr-1.5"></span>
            {value}
          </span>
        )
      } else if (value === "Shipped") {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <span className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-300 rounded-full mr-1.5"></span>
            {value}
          </span>
        )
      } else if (value === "Cancelled" || value === "Inactive" || value === "Out of Stock") {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800">
            <span className="w-1.5 h-1.5 bg-red-400 dark:bg-red-300 rounded-full mr-1.5"></span>
            {value}
          </span>
        )
      }
    }
    
    // Special rendering for role fields
    if (column.key === "role") {
      if (value === "Admin") {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800">
            <span className="w-1.5 h-1.5 bg-red-400 dark:bg-red-300 rounded-full mr-1.5"></span>
            {value}
          </span>
        )
      } else if (value === "Moderator") {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <span className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-300 rounded-full mr-1.5"></span>
            {value}
          </span>
        )
      } else {
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-1.5"></span>
            {value}
          </span>
        )
      }
    }
    
    // Special rendering for actions
    if (column.key === "actions") {
      return (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
            Edit
          </Button>
          <Button variant="outline" size="sm" className="h-8 px-3 text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20">
            Delete
          </Button>
        </div>
      )
    }
    
    return <span className="text-gray-900 dark:text-gray-100">{value}</span>
  }

  const renderSortIcon = (key: string) => {
    if (!sortable) return null
    
    if (sortConfig?.key === key) {
      return sortConfig.direction === 'asc' ? (
        <ArrowUp className="h-4 w-4 ml-1" />
      ) : (
        <ArrowDown className="h-4 w-4 ml-1" />
      )
    }
    return <ArrowUpDown className="h-4 w-4 ml-1 text-gray-400" />
  }

  return (
    <div className="w-full">
      {/* Header with title and search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        {title && (
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Showing {filteredData.length} of {data.length} total records
            </p>
          </div>
        )}
        
        {searchable && (
          <div className="relative w-full sm:w-auto sm:max-w-sm">
            <Search className="absolute left-2 sm:left-3 top-2 sm:top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 sm:pl-10 h-9 sm:h-10 rounded-lg sm:rounded-xl border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full text-sm sm:text-base touch-target"
            />
          </div>
        )}
      </div>

      {/* Filters */}
      {filterable && (
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('all')}
              className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3 touch-target"
            >
              All ({data.length})
            </Button>
            <Button
              variant={activeFilter === 'active' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('active')}
              className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3 touch-target"
            >
              Active ({data.filter(item => item.status === 'active').length})
            </Button>
            <Button
              variant={activeFilter === 'inactive' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('inactive')}
              className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3 touch-target"
            >
              Inactive ({data.filter(item => item.status === 'inactive').length})
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Card View */}
      <div className="block sm:hidden space-y-3">
        {currentData.length > 0 ? (
          currentData.map((row, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3">
              {columns.map((column) => (
                <div key={column.key} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                    {column.label}:
                  </span>
                  <div className="text-sm text-gray-900 dark:text-gray-100 text-right">
                    {renderCell(row, column)}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No data found
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
        <div className="overflow-x-auto mobile-table-responsive">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                {columns.map((column) => (
                  <TableHead 
                    key={column.key} 
                    className={`text-gray-700 dark:text-gray-300 font-semibold py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm ${column.width || ''}`}
                    style={{ width: column.width }}
                  >
                    <div className="flex items-center gap-1">
                      {column.label}
                      {sortable && (
                        <button
                          onClick={() => handleSort(column.key)}
                          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors touch-target"
                        >
                          {renderSortIcon(column.key)}
                        </button>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.length > 0 ? (
                currentData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    {columns.map((column) => (
                      <TableCell key={column.key} className="py-3 sm:py-4 px-3 sm:px-6">
                        {renderCell(row, column)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="py-8 text-center text-gray-500 dark:text-gray-400">
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span>Showing {startIndex + 1} to {endIndex} of {filteredData.length} results</span>
          </div>
          
          <div className="flex items-center gap-2">
            {showPageSizeSelector && (
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Show:</span>
                <Select value={pageSize.toString()} onValueChange={(value) => setPageSize(Number(value))}>
                  <SelectTrigger className="w-16 sm:w-20 h-8 sm:h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-8 w-8 sm:h-9 sm:w-9 p-0 touch-target"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {/* This part of the pagination logic needs to be implemented */}
              {/* For now, it will just show the current page and total pages */}
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-2 sm:px-3">
                Page <span className="font-medium text-gray-900 dark:text-gray-100">{currentPage}</span> of{" "}
                <span className="font-medium text-gray-900 dark:text-gray-100">{totalPages}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-8 w-8 sm:h-9 sm:w-9 p-0 touch-target"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 