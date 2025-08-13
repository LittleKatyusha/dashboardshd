import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DataTable } from "@/components/dashboard/data-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

// Mock data untuk demo
const usersData = [
  {
    id: "USR-001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15 10:30",
    createdAt: "2024-01-01"
  },
  {
    id: "USR-002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-14 15:45",
    createdAt: "2024-01-02"
  },
  {
    id: "USR-003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Moderator",
    status: "Inactive",
    lastLogin: "2024-01-10 09:15",
    createdAt: "2024-01-03"
  },
  {
    id: "USR-004",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-13 14:20",
    createdAt: "2024-01-04"
  },
  {
    id: "USR-005",
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-12 11:00",
    createdAt: "2024-01-05"
  }
]

const userColumns = [
  { key: "id", label: "User ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
  { key: "lastLogin", label: "Last Login" },
  { key: "createdAt", label: "Created At" },
  { key: "actions", label: "Actions" }
]

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
            <p className="text-muted-foreground">
              Manage your application users and their permissions.
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <DataTable
          title="Users List"
          data={usersData}
          columns={userColumns}
          searchable={true}
          pagination={true}
        />
      </div>
    </DashboardLayout>
  )
} 