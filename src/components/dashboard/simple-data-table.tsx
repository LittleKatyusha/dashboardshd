"use client"

import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface SimpleDataTableProps {
  data: Array<Record<string, any>>
  columns: Array<{
    key: string
    label: string
    width?: string
  }>
  className?: string
}

export function SimpleDataTable({ data, columns, className }: SimpleDataTableProps) {
  const renderCell = (item: any, column: any) => {
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
          <button className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors">
            Edit
          </button>
          <button className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800 hover:bg-red-200 dark:hover:bg-red-900/70 transition-colors">
            Delete
          </button>
        </div>
      )
    }
    
    return <span className="text-gray-900 dark:text-gray-100">{value}</span>
  }

  return (
    <div className={`rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden shadow-sm ${className || ''}`}>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
            {columns.map((column) => (
              <TableHead 
                key={column.key} 
                className={`text-gray-700 dark:text-gray-300 font-semibold py-4 px-6 ${column.width || ''}`}
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
              <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                {columns.map((column) => (
                  <TableCell key={column.key} className="py-4 px-6">
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
  )
} 