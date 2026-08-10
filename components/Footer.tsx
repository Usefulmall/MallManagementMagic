import { Mail, Linkedin, Facebook, Youtube, Instagram, BookOpen, Download, FileText, User } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const directory = [
    { label: "Articles", href: "/articles", icon: FileText },
    { label: "Knowledge Hub", href: "/knowledge-hub", icon: BookOpen },
    { label: "Free Resources", href: "/resources", icon: Download },
    { label: "The Book", href: "/the-book", icon: BookOpen },
  ];

  const info = [
    { label: "About Johan", href: "/about", icon: User },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50/60 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="/" className="inline-block focus:outline-none">
              <Logo variant="header" />
            </a>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              The premier practical resource platform dedicated exclusively to helping shopping centre managers build deep operational competence, commercial intelligence, and long-term asset value.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-[#1e4285] transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1e4285] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1e4285] transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1e4285] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:boss@usefulmall.com" className="text-gray-400 hover:text-[#1e4285] transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Directory */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase font-mono">
              Directory
            </h3>
            <ul className="mt-4 space-y-2">
              {directory.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center text-sm text-gray-500 hover:text-[#1e4285] transition-colors"
                  >
                    <link.icon className="h-3.5 w-3.5 mr-2 text-gray-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* UsefulMall */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase font-mono">
              UsefulMall
            </h3>
            <ul className="mt-4 space-y-2">
              {info.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center text-sm text-gray-500 hover:text-[#1e4285] transition-colors"
                  >
                    <link.icon className="h-3.5 w-3.5 mr-2 text-gray-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <span className="text-[11px] font-mono text-gray-400 block">
                Johan Olwage © {new Date().getFullYear()}
              </span>
              <span className="text-[11px] font-mono text-gray-400 block">
                Langebaan, South Africa
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <p>UsefulMall exists to help shopping centre managers learn the real job.</p>
          <span>v1.0 — Phase 1</span>
        </div>
      </div>
    </footer>
  );
}
