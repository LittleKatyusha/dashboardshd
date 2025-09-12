"use client"

import React, { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import styles from "@/styles/components/data-table.module.css"

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
          <span className={`${styles.statusBadge} ${styles.statusCompleted}`}>
            <span className={styles.statusDot}></span>
            {value}
          </span>
        )
      } else if (value === "Pending" || value === "Low Stock") {
        return (
          <span className={`${styles.statusBadge} ${styles.statusPending}`}>
            <span className={styles.statusDot}></span>
            {value}
          </span>
        )
      } else if (value === "Shipped") {
        return (
          <span className={`${styles.statusBadge} ${styles.statusShipped}`}>
            <span className={styles.statusDot}></span>
            {value}
          </span>
        )
      } else if (value === "Cancelled" || value === "Inactive" || value === "Out of Stock") {
        return (
          <span className={`${styles.statusBadge} ${styles.statusCancelled}`}>
            <span className={styles.statusDot}></span>
            {value}
          </span>
        )
      }
    }
    
    // Special rendering for role fields
    if (column.key === "role") {
      if (value === "Admin") {
        return (
          <span className={`${styles.statusBadge} ${styles.roleAdmin}`}>
            <span className={styles.statusDot}></span>
            {value}
          </span>
        )
      } else if (value === "Moderator") {
        return (
          <span className={`${styles.statusBadge} ${styles.roleModerator}`}>
            <span className={styles.statusDot}></span>
            {value}
          </span>
        )
      } else {
        return (
          <span className={`${styles.statusBadge} ${styles.roleDefault}`}>
            <span className={styles.statusDot}></span>
            {value}
          </span>
        )
      }
    }
    
    // Special rendering for actions
    if (column.key === "actions") {
      return (
        <div className={styles.actionsContainer}>
          <Button variant="outline" size="sm" className={styles.actionButton}>
            Edit
          </Button>
          <Button variant="outline" size="sm" className={`${styles.actionButton} ${styles.deleteButton}`}>
            Delete
          </Button>
        </div>
      )
    }
    
    return <span className={styles.cellContent}>{value}</span>
  }

  const renderSortIcon = (key: string) => {
    if (!sortable) return null
    
    if (sortConfig?.key === key) {
      return sortConfig.direction === 'asc' ? (
        <ArrowUp className={styles.sortIcon} />
      ) : (
        <ArrowDown className={styles.sortIcon} />
      )
    }
    return <ArrowUpDown className={`${styles.sortIcon} ${styles.sortIconInactive}`} />
  }

  return (
    <div className={styles.container}>
      {/* Header with title and search */}
      <div className={styles.header}>
        {title && (
          <div className={styles.titleSection}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>
              Showing {filteredData.length} of {data.length} total records
            </p>
          </div>
        )}
        
        {searchable && (
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        )}
      </div>

      {/* Filters */}
      {filterable && (
        <div className={styles.filtersContainer}>
          <div className={styles.filtersWrapper}>
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('all')}
              className={styles.filterButton}
            >
              All ({data.length})
            </Button>
            <Button
              variant={activeFilter === 'active' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('active')}
              className={styles.filterButton}
            >
              Active ({data.filter(item => item.status === 'active').length})
            </Button>
            <Button
              variant={activeFilter === 'inactive' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('inactive')}
              className={styles.filterButton}
            >
              Inactive ({data.filter(item => item.status === 'inactive').length})
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Card View */}
      <div className={styles.mobileView}>
        {currentData.length > 0 ? (
          currentData.map((row, index) => (
            <div key={index} className={styles.mobileCard}>
              {columns.map((column) => (
                <div key={column.key} className={styles.mobileCardRow}>
                  <span className={styles.mobileCardLabel}>
                    {column.label}:
                  </span>
                  <div className={styles.mobileCardValue}>
                    {renderCell(row, column)}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className={styles.noDataMessage}>
            No data found
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className={styles.desktopView}>
        <div className={styles.tableWrapper}>
          <Table>
            <TableHeader>
              <TableRow className={styles.tableHeaderRow}>
                {columns.map((column) => (
                  <TableHead 
                    key={column.key} 
                    className={styles.tableHead}
                    style={{ width: column.width }}
                  >
                    <div className={styles.tableHeadContent}>
                      {column.label}
                      {sortable && (
                        <button
                          onClick={() => handleSort(column.key)}
                          className={styles.sortButton}
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
                  <TableRow key={index} className={styles.tableRow}>
                    {columns.map((column) => (
                      <TableCell key={column.key} className={styles.tableCell}>
                        {renderCell(row, column)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className={styles.noDataMessage}>
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
        <div className={styles.paginationContainer}>
          <div className={styles.paginationInfo}>
            <span>Showing {startIndex + 1} to {endIndex} of {filteredData.length} results</span>
          </div>
          
          <div className={styles.paginationControls}>
            {showPageSizeSelector && (
              <div className={styles.pageSizeSelector}>
                <span className={styles.pageSizeLabel}>Show:</span>
                <Select value={pageSize.toString()} onValueChange={(value) => setPageSize(Number(value))}>
                  <SelectTrigger className={styles.pageSizeSelect}>
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
            
            <div className={styles.paginationButtons}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.paginationButton}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {/* This part of the pagination logic needs to be implemented */}
              {/* For now, it will just show the current page and total pages */}
              <div className={styles.paginationInfoText}>
                Page <span className={styles.paginationPageNumber}>{currentPage}</span> of{" "}
                <span className={styles.paginationPageNumber}>{totalPages}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.paginationButton}
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