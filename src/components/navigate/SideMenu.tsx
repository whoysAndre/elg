"use client"

import Link from "next/link";
import clsx from "clsx";
import { useUIStore } from "@/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"

import { IoCloseOutline } from "react-icons/io5";

export const SideMenu = () => {

  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);


  return (
    <>
      {/* Background black */}

      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />
        )
      }


      {/* Blur */}

      {
        isSideMenuOpen && (
          <div
            onClick={closeMenu}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        )
      }

      <nav
        className={
          clsx(
            "fixed bg-gray-100 w-[250px]  md:w-[500px] h-screen z-20 top-0 right-0 shadow-2xl transform transition-all duration-300 p-5",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }
      >

        <IoCloseOutline
          size={40}
          className="absolute right-2 top-5 cursor-pointer"
          onClick={() => closeMenu()}
        />


        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Link href="/tienda/hombre" className="font-semibold text-[1.3rem]">
                  Hombre
                </Link>
              </AccordionTrigger>
              <AccordionContent className="pl-8">
                <ul className="flex flex-col gap-4">
                  <li><Link href="">Zapatillas</Link></li>
                  <li><Link href="">Polos</Link></li>
                  <li><Link href="">Pantalones</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <Link href="/tienda/mujer" className="font-semibold text-[1.3rem]">
                  Mujer
                </Link>
              </AccordionTrigger>
              <AccordionContent className="pl-8">
                <ul className="flex flex-col gap-4">
                  <li><Link href="">Zapatillas</Link></li>
                  <li><Link href="">Polos</Link></li>
                  <li><Link href="">Pantalones</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <Link href="/tienda/niño" className="font-semibold text-[1.3rem]">
                  Niño
                </Link>
              </AccordionTrigger>
              <AccordionContent className="pl-8">
                <ul className="flex flex-col gap-4">
                  <li><Link href="">Zapatillas</Link></li>
                  <li><Link href="">Polos</Link></li>
                  <li><Link href="">Pantalones</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>



      </nav>

    </>
  )
}
