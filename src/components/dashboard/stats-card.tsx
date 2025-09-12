import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import styles from "@/styles/components/stats-card.module.css"

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
  const getCardVariant = () => {
    switch (variant) {
      case "gradient":
        return styles.cardGradient
      case "elevated":
        return styles.cardElevated
      default:
        return styles.cardDefault
    }
  }

  const getIconVariant = () => {
    switch (variant) {
      case "gradient":
        return styles.iconGradient
      case "elevated":
        return styles.iconElevated
      default:
        return styles.iconDefault
    }
  }

  const getIconContainerVariant = () => {
    switch (variant) {
      case "gradient":
        return styles.iconContainerGradient
      default:
        return styles.iconContainerDefault
    }
  }

  return (
    <Card className={cn(styles.card, getCardVariant())}>
      <CardHeader className={styles.cardHeader}>
        <CardTitle className={styles.cardTitle}>
          {title}
        </CardTitle>
        <div className={cn(styles.iconContainer, getIconContainerVariant())}>
          <Icon className={cn("h-4 w-4", getIconVariant())} />
        </div>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <div className={styles.value}>
          {value}
        </div>
        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}
        {trend && (
          <div className={styles.trendContainer}>
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
            <span className={styles.trendLabel}>from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 