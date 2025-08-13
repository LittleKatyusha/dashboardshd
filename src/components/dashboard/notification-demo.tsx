"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react"

export function NotificationDemo() {
  const showSuccessToast = () => {
    toast.success("Operation completed successfully!", {
      description: "Your changes have been saved.",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo clicked"),
      },
    })
  }

  const showErrorToast = () => {
    toast.error("Something went wrong!", {
      description: "Please try again or contact support.",
    })
  }

  const showInfoToast = () => {
    toast.info("New update available!", {
      description: "Version 2.0 is now available for download.",
    })
  }

  const showWarningToast = () => {
    toast.warning("Low disk space!", {
      description: "You have less than 1GB of free space remaining.",
    })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Test Notifications</h3>
      <div className="flex flex-wrap gap-2">
        <Button onClick={showSuccessToast} variant="outline" size="sm">
          <CheckCircle className="h-4 w-4 mr-2" />
          Success
        </Button>
        <Button onClick={showErrorToast} variant="outline" size="sm">
          <AlertCircle className="h-4 w-4 mr-2" />
          Error
        </Button>
        <Button onClick={showInfoToast} variant="outline" size="sm">
          <Info className="h-4 w-4 mr-2" />
          Info
        </Button>
        <Button onClick={showWarningToast} variant="outline" size="sm">
          <Bell className="h-4 w-4 mr-2" />
          Warning
        </Button>
      </div>
    </div>
  )
} 