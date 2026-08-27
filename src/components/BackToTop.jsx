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
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md cursor-pointer group"
    >
      <ArrowUp size={18} className="stroke-[2.2] transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};

export default BackToTop;
