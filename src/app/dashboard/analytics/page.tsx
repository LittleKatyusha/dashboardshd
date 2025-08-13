import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { SimpleDataTable } from "@/components/dashboard/simple-data-table"
import { SimpleChart } from "@/components/charts/simple-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Eye,
  Star,
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
  { name: "Jul", value: 700 },
  { name: "Aug", value: 650 },
  { name: "Sep", value: 800 },
  { name: "Oct", value: 750 },
  { name: "Nov", value: 900 },
  { name: "Dec", value: 850 }
]

const userGrowthData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1350 },
  { name: "Mar", value: 1500 },
  { name: "Apr", value: 1650 },
  { name: "May", value: 1800 },
  { name: "Jun", value: 1950 },
  { name: "Jul", value: 2100 },
  { name: "Aug", value: 2250 },
  { name: "Sep", value: 2400 },
  { name: "Oct", value: 2550 },
  { name: "Nov", value: 2700 },
  { name: "Dec", value: 2850 }
]

const conversionData = [
  { name: "Jan", value: 2.1 },
  { name: "Feb", value: 2.3 },
  { name: "Mar", value: 2.8 },
  { name: "Apr", value: 3.1 },
  { name: "May", value: 3.4 },
  { name: "Jun", value: 3.2 },
  { name: "Jul", value: 3.6 },
  { name: "Aug", value: 3.8 },
  { name: "Sep", value: 4.1 },
  { name: "Oct", value: 4.3 },
  { name: "Nov", value: 4.5 },
  { name: "Dec", value: 4.7 }
]

const topProducts = [
  { rank: 1, name: "Laptop Pro", sales: 156, revenue: "$202,644" },
  { rank: 2, name: "Smartphone X", sales: 89, revenue: "$80,011" },
  { rank: 3, name: "Wireless Headphones", sales: 234, revenue: "$46,566" },
  { rank: 4, name: "Tablet Air", sales: 78, revenue: "$46,722" },
  { rank: 5, name: "Smart Watch", sales: 45, revenue: "$13,455" }
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Detailed insights and analytics about your business performance.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$1,234,567"
            description="This year"
            icon={DollarSign}
            trend={{ value: 23.5, isPositive: true }}
          />
          <StatsCard
            title="Total Orders"
            value="15,432"
            description="This year"
            icon={ShoppingCart}
            trend={{ value: 18.2, isPositive: true }}
          />
          <StatsCard
            title="Active Users"
            value="8,945"
            description="This month"
            icon={Users}
            trend={{ value: 12.7, isPositive: true }}
          />
          <StatsCard
            title="Conversion Rate"
            value="4.7%"
            description="This month"
            icon={TrendingUp}
            trend={{ value: 2.1, isPositive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          <SimpleChart
            title="Revenue Trend"
            data={salesData}
            color="#10b981"
          />
          <SimpleChart
            title="User Growth"
            data={userGrowthData}
            color="#3b82f6"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SimpleChart
            title="Conversion Rate"
            data={conversionData}
            color="#f59e0b"
          />
          
          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleDataTable
                data={topProducts}
                columns={[
                  { key: "rank", label: "Rank", width: "60px" },
                  { key: "name", label: "Product Name" },
                  { key: "sales", label: "Sales" },
                  { key: "revenue", label: "Revenue" }
                ]}
                className="mt-4"
              />
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">
                +0.2 from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 