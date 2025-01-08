import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contact Info Section */}
        <div className="md:col-span-1">
          <h3 className="text-white uppercase text-sm font-medium mb-4">
            Contáctanos
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-sm">+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span className="text-sm">info@tutienda.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm">123 Calle Principal, Ciudad</span>
            </div>
            <div className="flex gap-4 pt-4">
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-white uppercase text-sm font-medium mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-white">Ofertas</a></li>
            <li><a href="#" className="text-sm hover:text-white">Zapatillas</a></li>
          </ul>
        </div>

        {/* Mujer Section */}
        <div>
          <h3 className="text-white uppercase text-sm font-medium mb-4">Mujer</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-white">Zapatillas</a></li>
            <li><a href="#" className="text-sm hover:text-white">Indumentarias</a></li>
            <li><a href="#" className="text-sm hover:text-white">Nike</a></li>
            <li><a href="#" className="text-sm hover:text-white">Adidas</a></li>
            <li><a href="#" className="text-sm hover:text-white">Jordan</a></li>
            <li><a href="#" className="text-sm hover:text-white">New Balance</a></li>
          </ul>
        </div>

        {/* Hombre Section */}
        <div>
          <h3 className="text-white uppercase text-sm font-medium mb-4">Hombre</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-white">Zapatillas</a></li>
            <li><a href="#" className="text-sm hover:text-white">Indumentaria</a></li>
            <li><a href="#" className="text-sm hover:text-white">Nike</a></li>
            <li><a href="#" className="text-sm hover:text-white">Adidas</a></li>
            <li><a href="#" className="text-sm hover:text-white">Jordan</a></li>
            <li><a href="#" className="text-sm hover:text-white">New Balance</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2024 Todos los derechos reservados - Elegant Figure</p>
          <a href="#" className="text-sm hover:text-white">Libro de reclamaciones</a>
        </div>
      </div>
    </footer>
  )
}
