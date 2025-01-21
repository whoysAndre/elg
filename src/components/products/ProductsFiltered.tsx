'use client'

import React from 'react'
import { Filters, OtherProduct, ValidBrands, ValidTypes, ValidCategories } from '@/types/products'
import { ProductFilters } from '../filters/ProductFilters'
import { ProductCard } from './ProductCard'
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  products: OtherProduct[]
}

export const ProductsFiltered = ({ products }: Props) => {
  const [filters, setFilters] = React.useState<Filters>({
    types: ['zapatillas'], // Siempre iniciado con zapatillas
    brands: [],
    categories: []
  })

  const filteredProducts = React.useMemo(() => {
    return products.filter(product => {
      const typeMatch = filters.types.length === 0 || filters.types.includes(product.type as ValidTypes)
      const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand as ValidBrands)
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category as ValidCategories)
      
      return typeMatch && brandMatch && categoryMatch
    })
  }, [filters, products])

  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-x-8 px-5 md:px-0">
      {/* Filters */}
      <div className="mb-8 lg:mb-0 sticky top-0 self-start">
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