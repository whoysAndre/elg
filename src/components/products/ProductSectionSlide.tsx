"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./productsectionslide.css";
// Import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { ProductImage } from "../maintenance/ProductImage";

interface Product {
  images: string[];
  stock: number;
  price: number;
  sizes: string[];
  slug: string;
  title: string;
  type: string;
  gender: string;
  brand: string;
  code:string;
}

interface Props {
  products: Product[];
}

export const ProductSectionSlide = ({ products }: Props) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={2}
      spaceBetween={10} // Reducido el espacio entre slides
      className="mt-10" // Asegura que el Swiper tome el ancho del contenedor
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 15, // Reducido para pantallas pequeñas
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10, // Reducido para pantallas grandes
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.slug} className="flex flex-col md:px-10"> {/* Ancho máximo por slide */}
          <Link href={`/products/${product.slug}`} className="">
            <ProductImage
              src={`${product.images[0]}`}
              alt={product.title}
              width={800} // Reducido
              height={800} // Reducido
            />
            <div className="md:pl-10 flex flex-col gap-y-1">
              <p className="md:text-2xl md:mt-5">{product.title}</p>
              <p className="text-gray-700">{product.type}, {product.gender}</p>
              <p className="font-bold md:text-xl">s/.{product.price}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};
