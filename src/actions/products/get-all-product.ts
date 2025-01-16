"use server"

import { prisma } from "@/lib/prisma"

export const getAllProducts = async()=>{

  const products = await prisma.product.findMany({
    include:{
      ProductImage: true
    }
  });
  

  const productsPlain = products.map((product)=>({
    id: product.id,
    code: product.code,
    price: product.price,
    sizes: product.sizes,
    title:product.title,
    type:product.type,
    stock: product.stock,
    brand: product.brand,
    gender: product.gender,
    image: product.ProductImage[0]?.url || ""
  }));

  return productsPlain;


}