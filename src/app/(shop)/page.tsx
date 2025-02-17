import Image from "next/image";
import heroImgSection from "/public/images/hero-banner.svg";
import { sectionFont } from "@/config/fonts";
import Link from "next/link";
import { ProductSectionSlide } from "@/components/products/ProductSectionSlide";
import { DeportSection, FinalSection } from "@/components";
import { getProductByCategory } from "@/actions/products/get-product-by-category.action";


export const metadata = {
  title: 'Elegant figure',
  description: '',
};

export default async function Home() {

  const productsExclusive = await getProductByCategory("exclusivas");
  const productsUltimate = await getProductByCategory("ultimas");

  return (
    <>
      {/* Hero sections */}
      <section className="relative w-screen h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImgSection}
            alt="banner elegant-figure"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Elegant */}
      <section className="w-full py-10 flex flex-col items-center">
        <h1 className={`${sectionFont.className} uppercase text-3xl md:text-5xl lg:text-7xl font-extrabold text-zinc-800`}>🔥Estilos Elegant🔥</h1>
        <p className="text-gray-700 text-xl mt-2">Escoge tu estilo</p>
        <Link href="/tienda/hombre" className="rounded-2xl text-white bg-black px-5 py-1 font-bold mt-5">
          Ve ya !
        </Link>
      </section>

      {/* Slide products sections */}
      <div className={`px-5 mt-5 ${sectionFont.className}`}>

        <h3 className="text-2xl md:text-4xl md:px-3">
          Últimas llegadas
        </h3>
        <ProductSectionSlide
          products={productsUltimate}
        />
      </div>

      {/* Exclusive models */}
      <DeportSection />

      {/* Exclusive sections */}
      <div className={`px-5 mt-10 ${sectionFont.className}`}>

        <h3 className="text-2xl md:text-4xl md:px-3">
          Modelos exclusivos
        </h3>
        <ProductSectionSlide
          products={productsExclusive}
        />
      </div>




      {/* Final Section */}
      <FinalSection />

    </>
  )
}

