import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export const LogoWapp = () => {
  return (
    <Link href="/" className="fixed bottom-10 right-7 flex items-center gap-2 z-[10000]">
      <p className="bg-gray-100 text-sm rounded-md px-3 py-1 text-gray-800">Consulta</p>
      <IoLogoWhatsapp size={60} color="green"/>
    </Link>
  )
}
