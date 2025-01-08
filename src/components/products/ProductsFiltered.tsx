"use client"
import React from 'react'
import { SeedProduct } from '@/seed/seed'
import { Filters } from '@/types/products'
import { ProductFilters } from '../filters/ProductFilters'
import { ProductCard } from './ProductCard'
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  products: SeedProduct[];
}

export const ProductsFiltered = ({ products }: Props) => {

  const [filters, setFilters] = React.useState<Filters>({
    types: [],
    brands: []
  })


  const filteredProducts = React.useMemo(() => {
    return products.filter(product => {
      const typeMatch = filters.types.length === 0 || filters.types.includes(product.type)
      const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand)
      return typeMatch && brandMatch
    })
  }, [filters])

  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-x-8">
      {/* Filters */}
      <div className="mb-8 lg:mb-0">
        <ProductFilters filters={filters} onFilterChange={setFilters} />
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
