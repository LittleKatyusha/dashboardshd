import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  FileText, 
  BarChart3, 
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Calendar
} from "lucide-react"

const reportTypes = [
  {
    id: "sales",
    name: "Sales Report",
    description: "Detailed sales analysis and revenue breakdown",
    icon: DollarSign,
    lastGenerated: "2024-01-15",
    status: "Available"
  },
  {
    id: "users",
    name: "User Analytics",
    description: "User growth, engagement, and behavior metrics",
    icon: Users,
    lastGenerated: "2024-01-14",
    status: "Available"
  },
  {
    id: "orders",
    name: "Order Summary",
    description: "Order processing and fulfillment statistics",
    icon: ShoppingCart,
    lastGenerated: "2024-01-13",
    status: "Available"
  },
  {
    id: "inventory",
    name: "Inventory Report",
    description: "Stock levels, turnover, and product performance",
    icon: BarChart3,
    lastGenerated: "2024-01-12",
    status: "Processing"
  },
  {
    id: "trends",
    name: "Market Trends",
    description: "Industry trends and competitive analysis",
    icon: TrendingUp,
    lastGenerated: "2024-01-11",
    status: "Available"
  },
  {
    id: "customers",
    name: "Customer Insights",
    description: "Customer segmentation and lifetime value analysis",
    icon: Users,
    lastGenerated: "2024-01-10",
    status: "Available"
  }
]

const recentReports = [
  {
    id: "RPT-001",
    name: "Monthly Sales Report",
    type: "Sales",
    generated: "2024-01-15 10:30",
    size: "2.4 MB",
    format: "PDF"
  },
  {
    id: "RPT-002",
    name: "User Growth Analysis",
    type: "Users",
    generated: "2024-01-14 15:45",
    size: "1.8 MB",
    format: "Excel"
  },
  {
    id: "RPT-003",
    name: "Q4 Revenue Summary",
    type: "Sales",
    generated: "2024-01-13 09:15",
    size: "3.2 MB",
    format: "PDF"
  }
]

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground">
              Generate and download various business reports and analytics.
            </p>
          </div>
          <Button>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
        </div>

        {/* Report Types */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reportTypes.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <report.icon className="h-8 w-8 text-primary" />
                  <Badge variant={
                    report.status === "Available" ? "default" : "secondary"
                  }>
                    {report.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{report.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {report.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>Last generated: {report.lastGenerated}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">{report.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {report.type} • Generated {report.generated}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{report.size}</p>
                      <p className="text-xs text-muted-foreground">{report.format}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Export Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export Products
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export Orders
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p>Weekly Sales Report</p>
                <p className="text-xs">Every Monday at 9:00 AM</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Monthly Analytics</p>
                <p className="text-xs">1st of every month</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Manage Schedule
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Report Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Executive Summary
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Marketing Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Financial Summary
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 