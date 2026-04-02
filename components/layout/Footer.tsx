export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-20 pb-10 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo + About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded shadow-sm border border-gray-100">
                <img 
                  src="/images/ske.png" 
                  alt="Logo" 
                  className="h-[6rem] md:h-[7.5rem] w-auto object-contain" 
                />
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Trusted Specialty Chemical Solutions Since 1990. Providing high-performance pigments, emulsions, and additives across South India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 flex flex-col">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Management', href: '/management' },
                { name: 'Products', href: '/#products' },
                { name: 'Industries', href: '/#industries' },
                { name: 'Principals', href: '/#principals' },
                { name: 'Awards and Recognition', href: '/awards' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-red-500 font-medium transition-colors text-sm flex items-center gap-2 group">
                    <span className="h-px w-2 bg-gray-300 transition-all group-hover:w-4 group-hover:bg-red-500"/>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Product Range</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Titanium Dioxide</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Calcium Carbonate</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Paint Additives</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Paint Emulsions</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Organic & Inorganic Pigments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>5-9-225, 3rd Floor, Sanali Estate, Chirag Ali Lane, Abids, Hyderabad – 500001</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+91 97015 52221</span>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>kartikeya999@yahoo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span>⏰</span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs font-bold text-gray-500">
          <p>© {new Date().getFullYear()} Sri Kartikeya Enterprises. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Business Experience</p>
        </div>
      </div>
    </footer>
  );
}
