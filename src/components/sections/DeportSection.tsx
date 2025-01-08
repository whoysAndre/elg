"use client"
import {motion} from "framer-motion"
import { sectionFont } from "@/config/fonts"

import Link from "next/link"
import Image from "next/image"


const categories = [
  {
    id: 'hombre',
    title: 'Hombre',
    image: '/images/adidas-2.svg',
    href: '/tienda/hombre'
  },
  {
    id: 'mujer',
    title: 'Mujer',
    image: '/images/adidas-1.svg',
    href: '/tienda/hombre'
  },
  {
    id: 'nino',
    title: 'Niño/a',
    image: '/images/puma.svg',
    href: '/tienda/hombre'
  }
]

export const DeportSection = () => {
  return (
    <section className="px-4 py-10 pt-16 lg:pt-28 sm:px-6 lg:px-8">
      <h2 className={`text-2xl md:text-4xl ${sectionFont.className}`}>Modelos deportivos</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block aspect-[3/4] overflow-hidden  bg-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <Image
                  src={category.image}
                  alt={`Categoría ${category.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm"
                  >
                    {category.title}
                  </motion.div>
                </div>
              </motion.div>

              
            </Link>
          ))}
        </div>


    </section>
  )  
}
