import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-card py-4' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-70 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-gradient">
          DEV<span className="text-primary">.</span>FOLIO
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-sm uppercase tracking-wider font-medium transition-all duration-300 group neon-link"
              style={{
                color: 'hsl(175 80% 50%)',
              }}
            >
              {link}
              <span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-cyan-300 transition-all duration-300 group-hover:w-full"
                style={{
                  boxShadow: '0 0 10px hsl(175 80% 50% / 0.6)'
                }}
              />
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;