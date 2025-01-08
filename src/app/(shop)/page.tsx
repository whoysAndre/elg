import Image from "next/image";
import heroImgSection from "/public/images/hero-banner.svg";
import { sectionFont } from "@/config/fonts";
import Link from "next/link";
import { ProductSectionSlide } from "@/components/products/ProductSectionSlide";
import { initialData } from "@/seed/seed";
import { DeportSection, FinalSection, UltimateSections } from "@/components";

export const metadata = {
  title: 'Elegant figure',
  description: '',
};

export default function Home() {

  const products = initialData.products;

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
        <Link href="/tienda" className="rounded-2xl text-white bg-black px-5 py-1 font-bold mt-5">
          Ve ya !
        </Link>
      </section>

      {/* Slide products sections */}
      <div className={`px-5 mt-5 ${sectionFont.className}`}>

        <h3 className="text-2xl md:text-4xl ">
          Últimas llegadas
        </h3>
        <ProductSectionSlide
          products={products}
        />
      </div>

      {/* Ultimate */}
      <UltimateSections />

      {/* Exclusive sections */}
      <div className={`px-5 mt-10 ${sectionFont.className}`}>

        <h3 className="text-2xl md:text-4xl ">
          Modelos exclusivos
        </h3>
        <ProductSectionSlide
          products={products}
        />
      </div>

      {/* Exclusive models */}
      <DeportSection/>


      {/* Final Section */}
      <FinalSection/>




    </>
  )
}

