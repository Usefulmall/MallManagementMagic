"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search, BookOpen, GraduationCap, Download, FileText, User, Mail } from "lucide-react";
import Logo from "./Logo";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books", icon: BookOpen },
    { name: "Courses", href: "/courses", icon: GraduationCap },
    { name: "Free Resources", href: "/resources", icon: Download },
    { name: "Articles", href: "/articles", icon: FileText },
    { name: "About Johan", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="focus:outline-none">
          <Logo variant="header" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-[#0e2145] bg-gray-100 font-semibold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 py-3 space-y-1 shadow-inner">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex w-full items-center px-4 py-3 text-base font-medium rounded-lg transition-all ${
                  isActive
                    ? "text-[#0e2145] bg-gray-100 font-semibold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {Icon && <Icon className="mr-3 h-5 w-5 text-gray-400" />}
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
