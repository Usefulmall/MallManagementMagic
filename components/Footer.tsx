export default function Footer() {
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
    <footer className="bg-navy text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <span className="block text-white font-bold text-xl font-serif mb-3">UsefulMall</span>
            <p className="text-[#A0B4C8] text-sm leading-relaxed">
              The professional knowledge platform for shopping centre managers.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <span className="block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </span>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A0B4C8] hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <span className="block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </span>
            <div className="flex gap-4 flex-wrap">
              {[
                { label: "Facebook", href: "#" },
                { label: "YouTube", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[#A0B4C8] hover:text-white text-sm transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#FFFFFF20] mt-12 pt-8 text-center text-[#A0B4C8] text-sm">
          © 2025 UsefulMall. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
