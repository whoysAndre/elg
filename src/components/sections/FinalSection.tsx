"use client"
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { sectionFont } from '@/config/fonts'


export const FinalSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4" ref={ref}>
      <motion.div
        className="relative aspect-[2/1] sm:aspect-[2.5/1] md:aspect-[3/1] lg:aspect-[3.5/1] rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/banner-final.svg"
          alt="modelo-exclusivos-nike-adidas"
          fill
          priority
          className="object-cover w-full"
          sizes="100vw"
        />

        <h4 className={`absolute bottom-5 left-5 lg:left-16 text-3xl lg:text-7xl uppercase font-extrabold text-gray-500 flex flex-col ${sectionFont.className}`}>
          Modelos 
          <span className='text-white ml-10 lg:ml-20'>Exclusivos</span>
        </h4>
    
      </motion.div>
    </div>
  )
}
