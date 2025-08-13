"use client"

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

interface SimpleChartProps {
  data: Array<{ name: string; value: number }>
  color?: string
}

export function SimpleChart({ data, color = "#3b82f6" }: SimpleChartProps) {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:stroke-gray-700" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#64748b' }}
            className="dark:text-gray-400"
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#64748b' }}
            className="dark:text-gray-400"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              color: '#1e293b'
            }}
            labelStyle={{ fontWeight: 'bold', color: '#1e293b' }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            fill={`url(#gradient-${color})`}
            dot={{ 
              fill: color, 
              strokeWidth: 2, 
              r: 4,
              stroke: 'white'
            }}
            activeDot={{ 
              r: 6, 
              stroke: color, 
              strokeWidth: 2,
              fill: 'white'
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
} 