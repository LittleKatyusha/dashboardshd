# DataTable Components Documentation

## Overview

Proyek ini menggunakan komponen DataTable yang konsisten untuk semua tabel. Ada dua jenis komponen tabel yang tersedia:

1. **DataTable** - Komponen tabel lengkap dengan fitur pencarian, sorting, filtering, dan pagination
2. **SimpleDataTable** - Komponen tabel sederhana tanpa fitur tambahan

## 1. DataTable (Full Featured)

Komponen tabel lengkap dengan semua fitur yang diperlukan untuk tabel data yang kompleks.

### Import
```tsx
import { DataTable } from "@/components/dashboard/data-table"
```

### Props
```tsx
interface DataTableProps {
  title: string                    // Judul tabel
  data: Array<Record<string, any>> // Data yang akan ditampilkan
  columns: Array<{                 // Konfigurasi kolom
    key: string                    // Key untuk data
    label: string                  // Label yang ditampilkan
    sortable?: boolean             // Apakah kolom bisa di-sort (default: true)
    filterable?: boolean           // Apakah kolom bisa di-filter (default: true)
    width?: string                 // Lebar kolom (opsional)
  }>
  searchable?: boolean             // Fitur pencarian (default: true)
  pagination?: boolean             // Fitur pagination (default: true)
  sortable?: boolean               // Fitur sorting (default: true)
  filterable?: boolean             // Fitur filtering (default: true)
  pageSize?: number                // Jumlah item per halaman (default: 10)
  showPageSizeSelector?: boolean   // Tampilkan selector ukuran halaman (default: true)
}
```

### Contoh Penggunaan
```tsx
const productColumns = [
  { key: "id", label: "Product ID", width: "120px" },
  { key: "name", label: "Product Name", sortable: true, filterable: true },
  { key: "category", label: "Category", sortable: true, filterable: true },
  { key: "price", label: "Price", sortable: true },
  { key: "stock", label: "Stock", sortable: true },
  { key: "status", label: "Status", filterable: true },
  { key: "actions", label: "Actions", sortable: false, filterable: false }
]

<DataTable
  title="Products List"
  data={productsData}
  columns={productColumns}
  searchable={true}
  pagination={true}
  sortable={true}
  filterable={true}
  pageSize={20}
  showPageSizeSelector={true}
/>
```

### Fitur
- **Pencarian**: Pencarian global di semua kolom
- **Sorting**: Klik header kolom untuk sorting (asc/desc)
- **Filtering**: Dropdown filter untuk setiap kolom yang filterable
- **Pagination**: Navigasi halaman dengan selector ukuran halaman
- **Responsive**: Tabel responsive dengan overflow handling
- **Dark Mode**: Support untuk tema gelap dan terang
- **Status Rendering**: Render khusus untuk status, role, dan actions

## 2. SimpleDataTable

Komponen tabel sederhana tanpa fitur tambahan, cocok untuk tabel statis atau tabel kecil.

### Import
```tsx
import { SimpleDataTable } from "@/components/dashboard/simple-data-table"
```

### Props
```tsx
interface SimpleDataTableProps {
  data: Array<Record<string, any>> // Data yang akan ditampilkan
  columns: Array<{                 // Konfigurasi kolom
    key: string                    // Key untuk data
    label: string                  // Label yang ditampilkan
    width?: string                 // Lebar kolom (opsional)
  }>
  className?: string               // CSS class tambahan (opsional)
}
```

### Contoh Penggunaan
```tsx
const simpleColumns = [
  { key: "name", label: "Name" },
  { key: "value", label: "Value" },
  { key: "status", label: "Status" }
]

<SimpleDataTable
  data={simpleData}
  columns={simpleColumns}
  className="mt-4"
/>
```

## 3. Konfigurasi Kolom

### Kolom Dasar
```tsx
{ key: "id", label: "ID" }
```

### Kolom dengan Lebar Kustom
```tsx
{ key: "id", label: "ID", width: "100px" }
```

### Kolom yang Tidak Bisa Di-sort
```tsx
{ key: "actions", label: "Actions", sortable: false }
```

### Kolom yang Tidak Bisa Di-filter
```tsx
{ key: "id", label: "ID", filterable: false }
```

## 4. Render Khusus

### Status Fields
Komponen secara otomatis merender status dengan warna yang sesuai:
- **Completed/Active/In Stock**: Hijau
- **Pending/Low Stock**: Kuning  
- **Shipped**: Biru
- **Cancelled/Inactive/Out of Stock**: Merah

### Role Fields
- **Admin**: Merah
- **Moderator**: Biru
- **User**: Abu-abu

### Actions
Tombol Edit dan Delete dengan styling yang konsisten.

## 5. Styling

### Tema
- Support untuk light dan dark mode
- Warna yang konsisten dengan design system
- Hover effects dan transitions

### Responsive
- Overflow handling untuk tabel lebar
- Mobile-friendly design
- Flexible column widths

## 6. Best Practices

### Gunakan DataTable untuk:
- Tabel dengan data banyak (>10 baris)
- Tabel yang memerlukan pencarian
- Tabel yang memerlukan sorting
- Tabel yang memerlukan filtering
- Tabel yang memerlukan pagination

### Gunakan SimpleDataTable untuk:
- Tabel statis
- Tabel dengan data sedikit (<10 baris)
- Tabel yang tidak memerlukan interaksi
- Tabel dalam card atau sidebar

### Struktur Data
```tsx
const data = [
  {
    id: "1",
    name: "Product Name",
    status: "In Stock",  // Akan di-render sebagai badge
    role: "Admin",       // Akan di-render sebagai badge
    actions: "actions"   // Akan di-render sebagai tombol
  }
]
```

## 7. Contoh Lengkap

```tsx
import { DataTable } from "@/components/dashboard/data-table"

export default function ProductsPage() {
  const productsData = [
    {
      id: "PRD-001",
      name: "Laptop Pro",
      category: "Electronics",
      price: "$1,299",
      stock: 45,
      status: "In Stock",
      rating: 4.8,
      sales: 156
    }
    // ... more data
  ]

  const productColumns = [
    { key: "id", label: "Product ID", width: "120px" },
    { key: "name", label: "Product Name", sortable: true, filterable: true },
    { key: "category", label: "Category", sortable: true, filterable: true },
    { key: "price", label: "Price", sortable: true },
    { key: "stock", label: "Stock", sortable: true },
    { key: "status", label: "Status", filterable: true },
    { key: "rating", label: "Rating", sortable: true },
    { key: "sales", label: "Sales", sortable: true },
    { key: "actions", label: "Actions", sortable: false, filterable: false }
  ]

  return (
    <div>
      <h1>Products Management</h1>
      <DataTable
        title="Products List"
        data={productsData}
        columns={productColumns}
        searchable={true}
        pagination={true}
        sortable={true}
        filterable={true}
        pageSize={20}
        showPageSizeSelector={true}
      />
    </div>
  )
}
```

## 8. Migration dari Tabel HTML

Jika Anda memiliki tabel HTML biasa, ganti dengan:

```tsx
// Sebelum (HTML Table)
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product 1</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>

// Sesudah (DataTable)
<DataTable
  title="Products"
  data={productsData}
  columns={[
    { key: "name", label: "Name" },
    { key: "status", label: "Status" }
  ]}
/>
```

## 9. Troubleshooting

### Tabel Tidak Muncul
- Pastikan data tidak kosong
- Periksa struktur columns array
- Pastikan key di columns sesuai dengan key di data

### Sorting Tidak Berfungsi
- Pastikan `sortable={true}` di DataTable
- Pastikan `sortable: true` di kolom yang ingin di-sort

### Filter Tidak Muncul
- Pastikan `filterable={true}` di DataTable
- Pastikan `filterable: true` di kolom yang ingin di-filter
- Pastikan kolom memiliki nilai yang berbeda-beda

### Styling Tidak Konsisten
- Pastikan menggunakan komponen yang benar
- Periksa className yang diberikan
- Pastikan tidak ada CSS custom yang konflik 