import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: "default" | "gradient" | "elevated"
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  variant = "default" 
}: StatsCardProps) {
  const variants = {
    default: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600",
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-800 hover:border-blue-200 dark:hover:border-blue-700",
    elevated: "bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl dark:shadow-gray-900/50"
  }

  const iconVariants = {
    default: "text-muted-foreground dark:text-gray-400",
    gradient: "text-blue-600 dark:text-blue-400",
    elevated: "text-blue-600 dark:text-blue-400"
  }

  return (
    <Card className={cn(
      "transition-all duration-300 hover:scale-105 group",
      variants[variant]
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
          {title}
        </CardTitle>
        <div className={cn(
          "p-2 rounded-lg transition-all duration-300 group-hover:scale-110",
          variant === "gradient" 
            ? "bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/70" 
            : "bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
        )}>
          <Icon className={cn("h-4 w-4", iconVariants[variant])} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {value}
        </div>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        )}
        {trend && (
          <div className="flex items-center pt-3">
            <div className={cn(
              "flex items-center px-2 py-1 rounded-full text-xs font-medium",
              trend.isPositive 
                ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-900/70" 
                : "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400 group-hover:bg-red-200 dark:group-hover:bg-red-900/70"
            )}>
              <span className="mr-1">
                {trend.isPositive ? "↗" : "↘"}
              </span>
              {trend.isPositive ? "+" : ""}{trend.value}%
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 