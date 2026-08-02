"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Knowledge Hub", href: "/knowledge-hub" },
    { name: "Resources", href: "/resources" },
    { name: "The Book", href: "/the-book" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-16 bg-white border-b border-border-grey">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-full">
        <a href="/" className="text-navy font-bold text-xl hover:text-gold transition-colors font-serif">
          UsefulMall
        </a>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors uppercase tracking-wider ${
                  isActive
                    ? "text-gold font-semibold"
                    : "text-mid-grey hover:text-navy font-medium"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-navy hover:text-gold focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border-grey shadow-md flex flex-col py-4 px-6 space-y-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm py-1 transition-colors uppercase tracking-wider ${
                  isActive
                    ? "text-gold font-semibold"
                    : "text-mid-grey hover:text-navy font-medium"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
