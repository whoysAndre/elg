"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Product } from "@/types/products"

export function ProductCard({ title, price, images, inStock, sizes, brand }: Product) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group cursor-pointer"
    >
      <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg relative">
        <Image
          src={`/assets/${images[0]}`} // Replace with actual image path
          alt={title}
          width={500}
          height={500}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {inStock < 3 && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-xs">
            ¡Últimas {inStock} unidades!
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">{price} PEN</p>
          <span className="text-xs text-gray-500 capitalize">{brand}</span>
        </div>
        {sizes.length > 0 && (
          <div className="flex gap-1 flex-wrap">
            {sizes.map(size => (
              <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

