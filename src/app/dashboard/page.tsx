import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { SimpleChart } from "@/components/charts/simple-chart"
import { DataTable } from "@/components/dashboard/data-table"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Package,
  Eye,
  Star,
  ArrowUpRight,
  Activity
} from "lucide-react"

// Mock data untuk demo
const salesData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 450 },
  { name: "May", value: 600 },
  { name: "Jun", value: 550 },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "Laptop Pro",
    amount: "$1,299",
    status: "Completed",
    date: "2024-01-15"
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "Smartphone X",
    amount: "$899",
    status: "Pending",
    date: "2024-01-14"
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    product: "Wireless Headphones",
    amount: "$199",
    status: "Shipped",
    date: "2024-01-13"
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    product: "Tablet Air",
    amount: "$599",
    status: "Completed",
    date: "2024-01-12"
  },
  {
    id: "ORD-005",
    customer: "Charlie Wilson",
    product: "Smart Watch",
    amount: "$299",
    status: "Cancelled",
    date: "2024-01-11"
  }
]

const orderColumns = [
  { key: "id", label: "Order ID" },
  { key: "customer", label: "Customer" },
  { key: "product", label: "Product" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "date", label: "Date" }
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-6 md:p-8 text-white">
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 sm:mb-2">
              Welcome back, Admin! 👋
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl">
              Here&apos;s what&apos;s happening with your business today. Monitor your key metrics and stay on top of everything.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl sm:blur-2xl"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:gap-6 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Users"
            value="2,543"
            description="Active users this month"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
            variant="gradient"
          />
          <StatsCard
            title="Total Orders"
            value="1,234"
            description="Orders this month"
            icon={ShoppingCart}
            trend={{ value: 8, isPositive: true }}
            variant="elevated"
          />
          <StatsCard
            title="Revenue"
            value="$45,231"
            description="Total revenue this month"
            icon={DollarSign}
            trend={{ value: 15, isPositive: true }}
            variant="gradient"
          />
          <StatsCard
            title="Growth"
            value="+23.5%"
            description="Compared to last month"
            icon={TrendingUp}
            trend={{ value: 23.5, isPositive: true }}
            variant="elevated"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Charts and Additional Stats */}
        <div className="grid gap-6 sm:gap-8 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Sales Overview</h3>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1 transition-colors">
                View Details
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow mobile-card">
              <SimpleChart
                data={salesData}
                color="#3b82f6"
              />
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Performance Metrics</h3>
            <div className="grid gap-3 sm:gap-4">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl sm:rounded-2xl border border-emerald-100 dark:border-emerald-800 p-4 sm:p-6 hover:shadow-md transition-shadow mobile-card">
                <StatsCard
                  title="Products"
                  value="156"
                  description="Total products in catalog"
                  icon={Package}
                  variant="default"
                />
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl sm:rounded-2xl border border-purple-100 dark:border-purple-800 p-4 sm:p-6 hover:shadow-md transition-shadow mobile-card">
                <StatsCard
                  title="Page Views"
                  value="12.5K"
                  description="Views today"
                  icon={Eye}
                  variant="default"
                />
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl sm:rounded-2xl border border-orange-100 dark:border-orange-800 p-4 sm:p-6 hover:shadow-md transition-shadow mobile-card">
                <StatsCard
                  title="Rating"
                  value="4.8"
                  description="Average customer rating"
                  icon={Star}
                  variant="default"
                />
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl sm:rounded-2xl border border-blue-100 dark:border-blue-800 p-4 sm:p-6 hover:shadow-md transition-shadow mobile-card">
                <StatsCard
                  title="Conversion"
                  value="3.2%"
                  description="Conversion rate"
                  icon={Activity}
                  variant="default"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow mobile-card">
          <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">Recent Orders</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">Latest orders from your customers</p>
          </div>
          <div className="mobile-table-responsive">
            <DataTable
              title=""
              data={recentOrders}
              columns={orderColumns}
              searchable={true}
              pagination={true}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 