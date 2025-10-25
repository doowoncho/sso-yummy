import { useState } from "react"
import logo from "../assets/logonobg.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-10 bg-white">
      <div className="flex items-center justify-between py-2 px-4 md:px-12 mx-auto max-w-4xl">
        {/* Hamburger button - mobile only */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-center gap-20 w-full">
          <ul className="flex space-x-20 text-lg font-medium">
            <li><a href="/" className="text-gray-700 hover:text-red-500 transition">Home</a></li>
            <li><a href="/menu" className="text-gray-700 hover:text-red-500 transition">Menu</a></li>
          </ul>
          
          <img 
            src={logo}
            alt="Sso Yummy Logo" 
            className="h-11"
          />
          
          <ul className="flex space-x-20 text-lg font-medium">
            <li><a href="/contact" className="text-gray-700 hover:text-red-500 transition">Contact</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-red-500 transition">About</a></li>
          </ul>
        </div>

        {/* Mobile logo */}
        <img 
          src={logo}
          alt="Sso Yummy Logo" 
          className="h-8 md:hidden"
        />
        
        {/* Spacer for mobile */}
        <div className="w-8 md:hidden"></div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center py-4 space-y-3 text-lg font-medium">
            <li><a href="/" className="text-gray-700 hover:text-red-500 transition">Home</a></li>
            <li><a href="/menu" className="text-gray-700 hover:text-red-500 transition">Menu</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-red-500 transition">Contact</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-red-500 transition">About</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}