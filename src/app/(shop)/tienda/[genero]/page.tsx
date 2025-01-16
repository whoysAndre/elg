import { getProductByGender } from "@/actions/products/get-product-by-gender";
import { ProductsFiltered } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(
  { params }: { params: Promise<{ genero: string }> }
): Promise<Metadata> {
  // read route params
  const gender = (await params).genero; 
  return {
    title: `Elegant | ${gender}`,
  }
}


export default async function GeneroPage({ params }: { params: Promise<{ genero: string }> }) {

  const { genero } = await params;
  const products = await getProductByGender(genero);


  return (
    <div className="mx-auto min-h-screen max-w-7xl lg:px-16 xl:px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
          </Link>
            Inicio
          <span>/</span>
          <span>{genero}</span>
        </nav>
        <h1 className="mt-2 text-2xl font-bold">Productos</h1>
      </div>
      <ProductsFiltered products={products} />
    </div>
  );
}