"use server"
import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";

export const getProductByGender = async(gender:string)=>{
  try {
    
    const products = await prisma.product.findMany({
      where:{
        gender: gender as Gender
      },
      include:{
        ProductImage: true
      }
    });

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
    throw new Error(`${error}`);
  }
}