import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [mobileMenuOpen]);

  const navLinks = ['About', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? 'glass-card py-4' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-10 sm:px-30 lg:px-40">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold text-gradient">
            DEV<span className="text-primary">.</span>FOLIO
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-sm uppercase tracking-wider font-medium transition-all duration-300 group neon-link"
                style={{ color: 'hsl(175 80% 50%)' }}
              >
                {link}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-cyan-300 transition-all duration-300 group-hover:w-full"
                  style={{ boxShadow: '0 0 10px hsl(175 80% 50% / 0.6)' }}
                />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-xl border border-primary/25 bg-background/80 backdrop-blur-md p-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium text-primary hover:text-cyan-300 transition-colors px-2 py-2 rounded-md hover:bg-primary/10"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
