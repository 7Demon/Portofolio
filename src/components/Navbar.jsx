import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
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
      setScrolled(window.scrollY > 40);

      // ScrollSpy logic
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
          ? 'glass-card py-3.5 shadow-md border-b border-border/80'
          : 'py-5 bg-transparent'
      }`}
      style={{ '--reveal-delay': '40ms' }}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-primary-foreground font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
              DR
            </div>
            <span className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Dicky<span className="text-primary font-mono">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-widest font-mono font-bold transition-all duration-300 ${
                      isActive
                        ? 'text-primary font-black'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="w-px h-5 bg-border" />

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-card border border-border text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Toggle dark and light theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-amber-400 animate-[spin_10s_linear_infinite]" />
              ) : (
                <Moon size={18} className="text-indigo-600" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls (Theme toggle & Hamburger) */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-xl border border-border bg-card/95 backdrop-blur-md p-4 flex flex-col gap-2 shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs uppercase tracking-widest font-mono font-bold px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
