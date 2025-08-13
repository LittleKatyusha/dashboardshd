"use client"

import * as React from "react"
import { ClockIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface TimePickerProps {
  time?: Date
  onTimeChange?: (time: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

export function TimePicker({
  time,
  onTimeChange,
  placeholder = "Pick a time",
  disabled = false,
}: TimePickerProps) {
  const [selectedHour, setSelectedHour] = React.useState<number>(time?.getHours() || 12)
  const [selectedMinute, setSelectedMinute] = React.useState<number>(time?.getMinutes() || 0)
  const [isAM, setIsAM] = React.useState<boolean>((time?.getHours() || 12) < 12)

  const hours = Array.from({ length: 12 }, (_, i) => i + 1)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  const handleTimeChange = () => {
    let hour = selectedHour
    if (!isAM && hour !== 12) hour += 12
    if (isAM && hour === 12) hour = 0
    
    const newTime = new Date()
    newTime.setHours(hour, selectedMinute, 0, 0)
    onTimeChange?.(newTime)
  }

  React.useEffect(() => {
    if (time) {
      setSelectedHour(time.getHours() === 0 ? 12 : (time.getHours() > 12 ? time.getHours() - 12 : time.getHours()))
      setSelectedMinute(time.getMinutes())
      setIsAM(time.getHours() < 12)
    }
  }, [time])

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !time && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <ClockIcon className="mr-2 h-4 w-4" />
          {time ? formatTime(time) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="grid grid-cols-3 gap-2">
              {hours.map((hour) => (
                <Button
                  key={hour}
                  variant={selectedHour === hour ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedHour(hour)}
                  className="h-8 w-8"
                >
                  {hour}
                </Button>
              ))}
            </div>
            <span className="text-lg font-bold">:</span>
            <div className="grid grid-cols-3 gap-2">
              {minutes.filter(m => m % 5 === 0).map((minute) => (
                <Button
                  key={minute}
                  variant={selectedMinute === minute ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedMinute(minute)}
                  className="h-8 w-8"
                >
                  {minute.toString().padStart(2, '0')}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant={isAM ? "default" : "outline"}
              size="sm"
              onClick={() => setIsAM(true)}
            >
              AM
            </Button>
            <Button
              variant={!isAM ? "default" : "outline"}
              size="sm"
              onClick={() => setIsAM(false)}
            >
              PM
            </Button>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onTimeChange?.(undefined)}
            >
              Clear
            </Button>
            <Button
              size="sm"
              onClick={handleTimeChange}
            >
              Set Time
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
} 