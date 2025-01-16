'use server'
import {prisma} from '../../lib/prisma'

export const getProductByCode = async(code:string)=>{

  try {

    const product = await prisma.product.findFirst({
      include:{
        ProductImage: true
      },
      where:{
        code: code
      }
    });

    if(!product) return null;

    return {
      ...product,
      images:product.ProductImage.map(image=>image.url)
    }


  } catch (error) {
    console.log(error);
    throw new Error('ERROR');
  }

}