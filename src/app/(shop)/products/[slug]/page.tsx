export const revalidate = 60480;

import { getProductBySlug } from "@/actions/products/get-product-by-slug.action";
import { ContentDetailTotalProduct } from "@/components";
import { Metadata } from "next";


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;
  const product = await getProductBySlug(slug); 
  return {
    title: `${product?.title}`,
  }
}


export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if(!product) return;

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-5 gap-8 container mx-auto">

      <ContentDetailTotalProduct
        product={product}
      />

    </div>
  );
}