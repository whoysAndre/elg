import { initialData } from "@/seed/seed";
import { ProductsFiltered } from "@/components";

export default async function GeneroPage({ params }: { params: Promise<{ genero: string }> }) {
  const { genero } = await params;
  const products = initialData.products.filter(product => product.gender === genero);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Inicio
          </a>
          <span>/</span>
          <span>{genero}</span>
        </nav>
        <h1 className="mt-2 text-2xl font-bold">Productos</h1>
      </div>

      <ProductsFiltered products={products} />
    </div>
  );
}