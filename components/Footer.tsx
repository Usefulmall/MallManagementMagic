export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-gold font-bold text-xl font-serif block mb-3">UsefulMall</span>
            <p className="text-white/60 text-sm leading-relaxed">
              The professional knowledge platform for shopping centre managers.
            </p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-4">Learn</h4>
            <ul className="space-y-2">
              {[
                { name: "Articles", href: "/articles" },
                { name: "Knowledge Hub", href: "/knowledge-hub" },
                { name: "Free Resources", href: "/resources" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* UsefulMall */}
          <div>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-4">UsefulMall</h4>
            <ul className="space-y-2">
              {[
                { name: "The Book", href: "/the-book" },
                { name: "About Johan", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-widest mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-white/60 hover:text-gold text-sm transition-colors">
                  Send a Message
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm">Langebaan, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            Johan Olwage &copy; {year}, Langebaan, South Africa
          </p>
          <p className="text-white/30 text-xs text-center">
            UsefulMall exists to help shopping centre managers learn the real job.
          </p>
        </div>
      </div>
    </footer>
  );
}
