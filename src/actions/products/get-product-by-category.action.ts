"use server"

import { prisma } from "@/lib/prisma"
import { Category } from "@prisma/client"

export const getProductByCategory = async (category: string) => {
  try {

    const products = await prisma.product.findMany({
      where: {
        category: category as Category
      },
      include: {
        ProductImage: true
      }
    })

    return products.map(product => ({
      images: product.ProductImage.map(image=>image.url),
      code: product.code,
      stock: product.stock,
      price: product.price,
      sizes: product.sizes,
      slug: product.slug,
      type: product.type,
      title: product.title,
      category: product.category,
      gender: product.gender,
      brand: product.brand
    }));

  } catch (error) {
    throw new Error(`${error}`)
  }
}