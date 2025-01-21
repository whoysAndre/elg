"use server"

import { prisma } from "@/lib/prisma";

export const getProductBySlug = async(slug:string)=>{
  try {
    
    const product = await prisma.product.findUnique({
      where:{
        slug
      },
      include:{
        ProductImage: true
      }
    });

    if(!product) return;

    const  productPlain = {
      images: product.ProductImage.map(img=>img.url),
      code: product.code,
      stock: product.stock,
      price: product.price,
      sizes: product.sizes,
      slug: product.slug,
      type: product.type,
      title: product.title,
      gender: product.gender,
      brand: product.gender,
      category: product.category
    }

    return productPlain;
  } catch (error) {
    
    throw new Error(`${error}`);
  }
}