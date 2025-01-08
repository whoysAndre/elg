"use client"

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./header.module.css";
import { sectionFont } from "@/config/fonts";
import { PiTiktokLogoLight, PiFacebookLogoLight, PiInstagramLogoLight } from "react-icons/pi";
import { SiNike, SiAdidas, SiReebok, SiJordan } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { ChevronDown, Search } from 'lucide-react';
import { Input } from "../ui/Input";
import { SideMenu } from "./SideMenu";
import { useUIStore } from "@/store";

export const Header = () => {
  const openMenu = useUIStore(state => state.openSideMenu);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Verificar si la pantalla es mayor a 1024px (lg en Tailwind)
        const isLargeScreen = window.innerWidth >= 1024;

        if (isLargeScreen) {
          if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          // En dispositivos móviles, siempre mostrar el header
          setIsVisible(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    // También verificamos el resize de la ventana
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setIsVisible(true);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-sm ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Pre nav */}
      <div className="hidden w-full bg-gray-100 px-14 py-3 md:flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Link href="#">
            <PiFacebookLogoLight size={20} />
          </Link>
          <Link href="#">
            <PiInstagramLogoLight size={20} />
          </Link>
          <Link href="#">
            <PiTiktokLogoLight size={20} />
          </Link>
        </div>

        <div>
          <Link href="#" className="text-sm font-semibold">
            Iniciar sesión
          </Link>
        </div>
      </div>

      {/* Nav */}
      <nav className="px-5 lg:px-14 py-5 flex justify-between items-center bg-white/95 backdrop-blur-sm">
        <Link href="/" className={`${sectionFont.className} font-extrabold text-5xl`}>
          EF
        </Link>

        <div className="hidden lg:flex items-center gap-x-5">
          <Link href="/tienda/hombre" className={styles.fancyLink}>
            Hombre
          </Link>

          <Link href="/tienda/mujer" className={styles.fancyLink}>
            Mujer
          </Link>

          <Link href="/tienda/nino" className={styles.fancyLink}>
            Niño
          </Link>

          {/* Marcas link con dropdown */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="#"
              className={`${styles.fancyLink} flex items-center gap-x-1 ${isHovered ? styles.activeLink : ""}`}
            >
              Marcas
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`}
              />
            </Link>

            {isHovered && (
              <div
                className={styles.fullScreenModule}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.moduleContent}>
                  <Link href="">
                    <SiNike size={100} />
                  </Link>
                  <Link href="">
                    <SiAdidas size={100} />
                  </Link>
                  <Link href="">
                    <SiReebok size={100} />
                  </Link>
                  <Link href="">
                    <SiJordan size={100} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:relative lg:block">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar"
            className="pl-8"
          />
        </div>

        {/* reponsive */}
        <div className="lg:hidden flex items-center gap-x-5">
          <Search className="text-muted-foreground" size={25} />
          <RxHamburgerMenu size={25} onClick={openMenu} />
        </div>

        <SideMenu />
      </nav>

    </header>
  );
};

