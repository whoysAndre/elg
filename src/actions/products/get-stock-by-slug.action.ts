'use server'
import { prisma } from '@/lib/prisma';
import { sleep } from '@/utils/sleep';




export const getStockSlug = async(slug:string):Promise<number>=>{
  try {
    
    await sleep(3);
    
    const stock = await prisma.product.findFirst({
      where: {
        slug
      },
      select: {
        stock: true
      }
    })
    return stock?.stock ?? 0;
  } catch (error) {
    throw new Error(`${error}`);
  }


}