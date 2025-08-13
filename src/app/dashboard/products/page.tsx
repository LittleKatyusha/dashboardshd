import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

// Mock data untuk demo
const productsData = [
  {
    id: "PRD-001",
    name: "Laptop Pro",
    category: "Electronics",
    price: "$1,299",
    stock: 45,
    status: "In Stock",
    rating: 4.8,
    sales: 156
  },
  {
    id: "PRD-002",
    name: "Smartphone X",
    category: "Electronics",
    price: "$899",
    stock: 23,
    status: "Low Stock",
    rating: 4.6,
    sales: 89
  },
  {
    id: "PRD-003",
    name: "Wireless Headphones",
    category: "Audio",
    price: "$199",
    stock: 67,
    status: "In Stock",
    rating: 4.7,
    sales: 234
  },
  {
    id: "PRD-004",
    name: "Tablet Air",
    category: "Electronics",
    price: "$599",
    stock: 12,
    status: "Low Stock",
    rating: 4.5,
    sales: 78
  },
  {
    id: "PRD-005",
    name: "Smart Watch",
    category: "Wearables",
    price: "$299",
    stock: 0,
    status: "Out of Stock",
    rating: 4.3,
    sales: 45
  }
]

const productColumns = [
  { key: "id", label: "Product ID" },
  { key: "name", label: "Product Name" },
  { key: "category", label: "Category" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
  { key: "status", label: "Status" },
  { key: "rating", label: "Rating" },
  { key: "sales", label: "Sales" },
  { key: "actions", label: "Actions" }
]

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products Management</h1>
            <p className="text-muted-foreground">
              Manage your product catalog and inventory.
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>

        <DataTable
          title="Products List"
          data={productsData}
          columns={productColumns}
          searchable={true}
          pagination={true}
        />
      </div>
    </DashboardLayout>
  )
} 