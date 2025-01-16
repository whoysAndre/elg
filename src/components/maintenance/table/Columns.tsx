"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiDotsHorizontal } from "react-icons/bi"
import { useRouter } from "next/navigation"
import { ProductImage } from "../ProductImage"


export type Product = {
  id:string
  type:string
  code: string
  image: string
  title: string
  gender:string
  price: number
  stock: number
  brand: string
  sizes: string[]
}

// Nuevo componente para la celda de acciones
const ActionCell = ({ product }: { product: Product }) => {
  const navigate = useRouter();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <BiDotsHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem 
          onClick={() => navigate.push(`/admin/products/${product.code}`)}
        >
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem
          
        >
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "code",
    header: "codigo",
  },
  {
    accessorKey: "title",
    header: "Nombre",
  },
  {
    accessorKey: "image",
    header: "imagen",
    cell: ({row}) => (
      <ProductImage
        src={row.original.image}
        alt={row.original.title}
        width={70}
        height={70}
      />
    )
  },
  {
    accessorKey: "price",
    header: "precio",
  },
  {
    accessorKey: "stock",
    header: "stock",
  },
  {
    accessorKey: "sizes",
    header: "tallas",
  },
  {
    accessorKey: "brand",
    header: "Marca",
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionCell product={row.original} />,
  },
]