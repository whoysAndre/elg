"use client"

import { IoLogoWhatsapp } from "react-icons/io";
export const LogoWapp = () => {
  
  const onOpenWapp = ()=>{
    const whatsappURL = `https://wa.me/51984723637`;
    window.open(whatsappURL, "_blank");
  }
  
  return (
    <button
      onClick={onOpenWapp} 
      className="fixed bottom-10 right-7 flex items-center gap-2 z-[10000]">
      <p className="bg-gray-100 text-sm rounded-md px-3 py-1 text-gray-800">Consulta</p>
      <IoLogoWhatsapp size={60} color="green"/>
    </button>
  )
}
