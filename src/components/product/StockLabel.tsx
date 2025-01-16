'use client'
import { getStockSlug } from "@/actions/products/get-stock-by-slug.action"
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react"

interface Props {
  slug: string
}
export const StockLabel = ({ slug }: Props) => {

  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const getStock = async () => {
      const inStock = await getStockSlug(slug);
      setStock(inStock);
      setIsLoading(false);
    }
    getStock();
  }, [slug]);

  return (

    <>

      {
        isLoading ?
          (
            <h1 className={`${titleFont.className} antialiased text-sm bg-gray-200 animate-pulse`}>
              &nbsp;
            </h1>

          ) : (
            <h1 className={`${titleFont.className} antialiased text-sm`}>
              stock: {stock}
            </h1>

          )
      }


    </>
  )
}