'use server'

import {prisma} from "@/lib/prisma"
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from "next/cache";

cloudinary.config( process.env.CLOUDINARY_URL ?? '' );

export const deleteProduct = async(code:string)=>{
  
  try {
    
    const product = await prisma.product.findUnique({
      where:{
        code
      },
      include:{
        ProductImage:true
      }
    });
    
    if (!product) {
      return { success: false, message: 'Producto no encontrado' }
    }

    // Eliminar imágenes de Cloudinary
    for (const image of product.ProductImage) {
      const publicId = image.url.split('/').pop()?.split('.')[0]
      if (publicId) {
        await cloudinary.uploader.destroy(publicId)
      }
    }

    // Eliminar las imágenes asociadas
    await prisma.productImage.deleteMany({
      where: { productId: product.id },
    })

    // Eliminar el producto
    await prisma.product.delete({
      where: { code },
    })

    revalidatePath('/admin/products')

    return { success: true, message: 'Producto y sus imágenes eliminados correctamente' }

  } catch (error) {
    console.error('Error al eliminar el producto:', error)
    return { success: false, message: 'Error al eliminar el producto y sus imágenes' }
  }
  
}