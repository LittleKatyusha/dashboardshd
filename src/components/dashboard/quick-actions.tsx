import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { 
  Users, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  FileText,
  Settings,
  ArrowUpRight
} from "lucide-react"

const quickActions = [
  {
    title: "Add User",
    description: "Create new user account",
    icon: Users,
    href: "/dashboard/users",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
    darkBgColor: "dark:from-blue-950/30 dark:to-indigo-950/30",
    borderColor: "border-blue-200",
    darkBorderColor: "dark:border-blue-800"
  },
  {
    title: "Add Product",
    description: "Add new product to catalog",
    icon: Package,
    href: "/dashboard/products",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    darkBgColor: "dark:from-emerald-950/30 dark:to-teal-950/30",
    borderColor: "border-emerald-200",
    darkBorderColor: "dark:border-emerald-800"
  },
  {
    title: "View Orders",
    description: "Check recent orders",
    icon: ShoppingCart,
    href: "/dashboard/orders",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    darkBgColor: "dark:from-orange-950/30 dark:to-red-950/30",
    borderColor: "border-orange-200",
    darkBorderColor: "dark:border-orange-800"
  },
  {
    title: "Analytics",
    description: "View detailed analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    darkBgColor: "dark:from-purple-950/30 dark:to-pink-950/30",
    borderColor: "border-purple-200",
    darkBorderColor: "dark:border-purple-800"
  },
  {
    title: "Generate Report",
    description: "Create new report",
    icon: FileText,
    href: "/dashboard/reports",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50",
    darkBgColor: "dark:from-cyan-950/30 dark:to-blue-950/30",
    borderColor: "border-cyan-200",
    darkBorderColor: "dark:border-cyan-800"
  },
  {
    title: "Settings",
    description: "Configure application",
    icon: Settings,
    href: "/dashboard/settings",
    color: "from-gray-500 to-slate-500",
    bgColor: "from-gray-50 to-slate-50",
    darkBgColor: "dark:from-gray-800/50 dark:to-slate-800/50",
    borderColor: "border-gray-200",
    darkBorderColor: "dark:border-gray-700"
  }
]

export function QuickActions() {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          Quick Actions
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">• Get things done faster</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group block"
            >
              <div className={`
                relative overflow-hidden rounded-2xl bg-gradient-to-br ${action.bgColor} ${action.darkBgColor}
                border ${action.borderColor} ${action.darkBorderColor} p-6 hover:shadow-lg transition-all duration-300 
                transform hover:-translate-y-1 group-hover:scale-[1.02]
              `}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors leading-relaxed">
                    {action.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/20 dark:to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 