import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full glass-card border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <ArrowUp size={20} className="transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};

export default BackToTop;
