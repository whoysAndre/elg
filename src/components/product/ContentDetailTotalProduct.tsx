"use client"
import { sectionFont } from "@/config/fonts";
import { ProductSlideShow } from "./ProductSlideShow";
import { QuantitySelector } from "./QuantitySelector";
import { SizeSelector } from "./SizeSelector";
import { StockLabel } from "./StockLabel";

import { useState } from "react";
import { OtherProduct } from "@/types/products";
import { ProductSlideShowMobile } from "./ProductSlideShowMobile";



interface Props {
  product:OtherProduct;
}

export const ContentDetailTotalProduct = ({ product }: Props) => {

  // Estados para talla y cantidad seleccionada
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  // Función para enviar datos a WhatsApp
  const handleSendToWhatsApp = () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla.");
      return;
    }

    const message = `Hola, estoy interesado en el producto:\n\n` +
      `Codigo: ${product.code}` +
      `📦 Producto: ${product.title}\n` +
      `📏 Talla: ${selectedSize}\n` +
      `💵 Precio: s/.${product.price}\n` +
      `🛒 Cantidad: ${quantity}\n` +
      `🖼️ Imagen: ${product.images[0]}\n\n` +
      `¿Está disponible?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/51924998757?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="col-span-1 md:col-span-3">
        {/* Slideshow mobile */}
        <ProductSlideShowMobile
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Slideshow */}
        <ProductSlideShow 
          images={product.images} 
          title={product.title} 
          className="hidden md:block" 
        />
      </div>



      <div className="col-span-2 px-5">
        <StockLabel slug={product.slug} />
        <h1 className={`${sectionFont.className} antialiased font-normal text-2xl`}>
          {product.title}
        </h1>
        <p className="text-lg mt-2">s/.{product.price}</p>

        {/* Sizes Selector */}
        <SizeSelector
          avaibleSize={product.sizes}
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
        />

        <div>
          <p className="mb-2">Cantidad:</p>
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>

        <button
          className={`bg-black text-white w-full rounded-xl py-2 hover:bg-zinc-900 my-5 ${sectionFont.className}`}
          onClick={handleSendToWhatsApp}
        >
          Obtener producto
        </button>
      </div>
    </>
  );
};
