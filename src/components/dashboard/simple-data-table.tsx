"use client"

import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import styles from "@/styles/components/simple-data-table.module.css"

interface SimpleDataTableProps {
  data: Array<Record<string, string | number | boolean>>
  columns: Array<{
    key: string
    label: string
    width?: string
  }>
  className?: string
}

export function SimpleDataTable({ data, columns, className }: SimpleDataTableProps) {
  const renderCell = (item: Record<string, string | number | boolean>, column: { key: string; label: string; width?: string }) => {
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
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors">
            Edit
          </button>
          <button className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800 hover:bg-red-200 dark:hover:bg-red-900/70 transition-colors">
            Delete
          </button>
        </div>
      )
    }
    
    return <span className={styles.cellContent}>{value}</span>
  }

  return (
    <div className={`${styles.table} ${className || ''}`}>
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
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, index) => (
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
                <TableCell colSpan={columns.length} className="py-8 text-center text-gray-500 dark:text-gray-400">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 