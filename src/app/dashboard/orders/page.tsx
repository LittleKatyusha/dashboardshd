import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"

// Mock data untuk demo
const ordersData = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john.doe@example.com",
    products: "Laptop Pro, Wireless Mouse",
    total: "$1,349",
    status: "Completed",
    payment: "Credit Card",
    date: "2024-01-15"
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane.smith@example.com",
    products: "Smartphone X, Case",
    total: "$949",
    status: "Pending",
    payment: "PayPal",
    date: "2024-01-14"
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    email: "bob.johnson@example.com",
    products: "Wireless Headphones",
    total: "$199",
    status: "Shipped",
    payment: "Credit Card",
    date: "2024-01-13"
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    email: "alice.brown@example.com",
    products: "Tablet Air, Keyboard",
    total: "$699",
    status: "Completed",
    payment: "Bank Transfer",
    date: "2024-01-12"
  },
  {
    id: "ORD-005",
    customer: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    products: "Smart Watch",
    total: "$299",
    status: "Cancelled",
    payment: "Credit Card",
    date: "2024-01-11"
  }
]

const orderColumns = [
  { key: "id", label: "Order ID" },
  { key: "customer", label: "Customer" },
  { key: "email", label: "Email" },
  { key: "products", label: "Products" },
  { key: "total", label: "Total" },
  { key: "status", label: "Status" },
  { key: "payment", label: "Payment Method" },
  { key: "date", label: "Order Date" },
  { key: "actions", label: "Actions" }
]

export default function OrdersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Orders Management</h1>
            <p className="text-muted-foreground">
              View and manage customer orders and their status.
            </p>
          </div>
        </div>

        <DataTable
          title="Orders List"
          data={ordersData}
          columns={orderColumns}
          searchable={true}
          pagination={true}
        />
      </div>
    </DashboardLayout>
  )
} 