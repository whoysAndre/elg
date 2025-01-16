import { getProductByCode } from "@/actions/products/get-product-by-code.actions";
import { FormProduct } from "@/components";
import { titleFont } from "@/config/fonts";
import { redirect } from "next/navigation";

export default async function NewProductPage({ params }: { params: Promise<{ code: string }> }) {
  
  const { code } = await params;

  const [product] = await Promise.all([
    getProductByCode(code)
  ]);

  if(!product && code !== 'new'){
    redirect('/admin/products');
  }

  const title = (code === 'new') ? 'Nuevo producto' : 'Editar producto';
  
  return (
    <div className="px-10">
      <h1 className={`${titleFont.className} text-2xl mb-10`}>{title}</h1>
      <FormProduct product={product ?? {}}/>
    </div>
  );
}