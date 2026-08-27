import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/useTheme.js';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Career', href: '#career' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'career', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
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

  return (
    <header
      data-reveal
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-card/80 backdrop-blur-lg border-b border-border py-3.5 shadow-xs'
          : 'py-6 bg-transparent'
      }`}
      style={{ '--reveal-delay': '40ms' }}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1440px]">
        <div className="flex items-center justify-between">
          {/* Elegant Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
              <Sparkles className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Dicky<span className="text-primary font-mono">.dev</span>
            </span>
          </a>

          {/* Nav Links in Center */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-xs uppercase tracking-widest font-semibold transition-colors relative py-1 ${
                      isActive
                        ? 'text-primary font-bold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Action Controls: Theme Toggle + Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-xs"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-foreground" />
              )}
            </button>

            <a
              href="#contact"
              className="bg-primary text-primary-foreground rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-border bg-card text-foreground flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-9 h-9 rounded-full border border-border bg-card text-foreground flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-card/95 backdrop-blur-md border border-border rounded-2xl p-5 shadow-lg flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold text-sm tracking-wide p-2.5 rounded-xl hover:bg-muted transition-colors text-foreground"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-primary-foreground rounded-full text-center px-6 py-2.5 font-bold text-xs uppercase tracking-wider mt-2 shadow-sm"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
