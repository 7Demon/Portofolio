import { useEffect } from 'react';
import FloatingOrb from '../components/floatingOrb';
import Navbar from '../components/Navbar.jsx';
import Home from '../components/home.jsx';
import BackToTop from '../components/BackToTop.jsx';

const Index = () => {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (revealElements.length === 0) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      revealElements.forEach((el) => el.classList.add('reveal-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          element.classList.add('reveal-visible');
          obs.unobserve(element);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative transition-colors duration-300">
      <FloatingOrb />
      <Navbar />
      <main className="relative z-10">
        <Home />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
