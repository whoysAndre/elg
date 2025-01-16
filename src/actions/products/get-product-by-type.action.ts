"use server"

import { prisma } from "@/lib/prisma"
import { Type } from "@prisma/client"

export const getProductByTypeExclusive = async (type: string) => {
  try {

    const products = await prisma.product.findMany({
      where: {
        type: type as Type
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
      gender: product.gender,
      brand: product.brand
    }));

  } catch (error) {
    throw new Error(`${error}`)
  }
}