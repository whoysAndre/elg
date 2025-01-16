"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Filter } from 'lucide-react'
import type { Filters, ValidTypes, ValidBrands } from "@/types/products"
import { Button } from "@/components/ui/Button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet"

interface FilterSection {
  title: string
  options: string[]
}

const filterSections: FilterSection[] = [
  {
    title: "Tipo",
    options: ["polos", "pantalones", "gorros", "zapatillas", "deportivas", "conjuntos","exclusivas"]
  },
  {
    title: "Marca",
    options: ["nike", "adidas", "jordan","reebok"]
  }
]

interface ProductFiltersProps {
  filters: Filters
  onFilterChange: (filters: Filters) => void
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const [openSections, setOpenSections] = React.useState<string[]>(["Tipo", "Marca"])

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleCheckboxChange = (section: string, option: string) => {
    if (section === "Tipo") {
      const newTypes = filters.types.includes(option as ValidTypes)
        ? filters.types.filter((type:string) => type !== option)
        : [...filters.types, option as ValidTypes]

      onFilterChange({
        ...filters,
        types: newTypes
      })
    } else if (section === "Marca") {
      const newBrands = filters.brands.includes(option as ValidBrands)
        ? filters.brands.filter((brand:string) => brand !== option)
        : [...filters.brands, option as ValidBrands]

      onFilterChange({
        ...filters,
        brands: newBrands
      })
    }
  }

  const FilterContent = () => (
    <div className="space-y-4 ">
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
                          : filters.brands.includes(option as ValidBrands)
                      }
                      onChange={() => handleCheckboxChange(section.title, option)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600 capitalize">{option}</span>
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
      {/* Mobile Filter Sheet */}
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

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <h2 className="text-lg font-semibold mb-4">Filtros</h2>
        <FilterContent />
      </div>
    </>
  )
}

