import { Mail, BookOpen, GraduationCap, Download, FileText, User } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const directory = [
    { label: "Books", href: "/books", icon: BookOpen },
    { label: "Courses", href: "/courses", icon: GraduationCap },
    { label: "Free Resources", href: "/resources", icon: Download },
    { label: "Articles", href: "/articles", icon: FileText },
  ];

  const info = [
    { label: "About Johan", href: "/about", icon: User },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="/" className="inline-block focus:outline-none">
              <Logo variant="header" />
            </a>
            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              UsefulMall is a curated professional resource centre that helps shopping centre managers learn, understand and improve the real work of managing a shopping centre.
            </p>
          </div>

          {/* Navigation Directory */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase font-mono">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {directory.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center text-sm text-gray-600 hover:text-[#0e2145] transition-colors"
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
                    className="flex items-center text-sm text-gray-600 hover:text-[#0e2145] transition-colors"
                  >
                    <link.icon className="h-3.5 w-3.5 mr-2 text-gray-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>Where Shopping Centre Managers Learn the Real Job</p>
          <span>UsefulMall V1.0</span>
        </div>
      </div>
    </footer>
  );
}
