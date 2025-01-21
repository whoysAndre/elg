'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Filter } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet"
import { Filters, ValidTypes, ValidBrands, ValidCategories } from '@/types/products'

interface FilterSection {
  title: string
  options: string[]
}

const filterSections: FilterSection[] = [
  {
    title: "Tipo",
    options: ["zapatillas"]
  },
  {
    title: "Categoría",
    options: ["chimpunes", "deportivas", "exclusivas", "ultimas"]
  },
  {
    title: "Marca",
    options: ["nike", "adidas", "puma", "reebok", "jordan"]
  }
]

interface ProductFiltersProps {
  filters: Filters
  onFilterChange: (filters: Filters) => void
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const [openSections, setOpenSections] = React.useState<string[]>(["Tipo", "Categoría", "Marca"])

  // Establecer "zapatillas" como valor por defecto al montar el componente
  React.useEffect(() => {
    if (filters.types.length === 0) {
      onFilterChange({
        ...filters,
        types: ['zapatillas']
      })
    }
  }, [])

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleCheckboxChange = (section: string, option: string) => {
    if (section === "Tipo") {
      // Para Type, siempre mantenemos "zapatillas" seleccionado
      onFilterChange({ ...filters, types: ['zapatillas'] })
    } else if (section === "Marca") {
      const newBrands = filters.brands.includes(option as ValidBrands)
        ? filters.brands.filter((brand) => brand !== option)
        : [...filters.brands, option as ValidBrands]
      onFilterChange({ ...filters, brands: newBrands })
    } else if (section === "Categoría") {
      const newCategories = filters.categories.includes(option as ValidCategories)
        ? filters.categories.filter((category) => category !== option)
        : [...filters.categories, option as ValidCategories]
      onFilterChange({ ...filters, categories: newCategories })
    }
  }

  const FilterContent = () => (
    <div className="space-y-4">
      {filterSections.map((section) => (
        <div key={section.title}>
          <div
            className="flex cursor-pointer items-center justify-between py-2"
            onClick={() => toggleSection(section.title)}
          >
            <span className="font-medium">{section.title}</span>
            <motion.div
              animate={{ rotate: openSections.includes(section.title) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>
          <AnimatePresence>
            {openSections.includes(section.title) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                {section.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={
                        section.title === "Tipo"
                          ? filters.types.includes(option as ValidTypes)
                          : section.title === "Marca"
                          ? filters.brands.includes(option as ValidBrands)
                          : filters.categories.includes(option as ValidCategories)
                      }
                      onChange={() => handleCheckboxChange(section.title, option)}
                      className="h-4 w-4 rounded border-gray-300"
                      disabled={section.title === "Tipo"} // Deshabilitar la opción de tipo ya que siempre será "zapatillas"
                    />
                    <span className="text-sm text-gray-600 capitalize">
                      {option}
                    </span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile filters sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>
                Ajusta los filtros para encontrar los productos que buscas.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block">
        <h2 className="text-lg font-semibold mb-4">Filtros</h2>
        <FilterContent />
      </div>
    </>
  )
}