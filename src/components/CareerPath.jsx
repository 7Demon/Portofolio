import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Code2, Server } from 'lucide-react';

const careers = [
  {
    year: 'Aug 2026 - Present',
    title: 'Internship - Software Developer & IT Support',
    company: 'PT Tri Usaha Sejahtera Pratama',
    description:
      'Developed and integrated core Enterprise Resource Planning (ERP) system modules, optimized database performance, managed internal system workflows, and provided technical IT infrastructure support.',
    icon: Server,
    tags: ['ERP System', 'Python', 'Flet', 'SQLite', 'IT Infrastructure'],
  },
  {
    year: '2022 - 2026',
    title: 'Bachelor of Informatics',
    company: 'Universitas Muhammadiyah Surakarta',
    description:
      'Completed Bachelor\'s degree in Informatics with a strong focus on software engineering and decentralized technologies. Thesis: "Implementation of ERC-721 Smart Contract-Based Academic Certificate Issuance and Verification System on zkSync Era Layer-2 to Prevent Academic Document Forgery."',
    icon: GraduationCap,
    tags: ['Blockchain', 'Solidity', 'zkSync Era', 'Smart Contracts', 'IPFS'],
  },
  {
    year: '2025',
    title: 'Internship - Web Developer',
    company: 'Department of Communication and Informatics (Diskominfo)',
    description:
      'Designed and developed web applications, managing full-stack Laravel flows, API integration, and custom portal solutions to support public communication systems.',
    icon: Code2,
    tags: ['Laravel', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
  },
];

const CareerItem = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = item.icon;

  return (
    <div ref={ref} className="relative z-10 flex items-center w-full mb-16 last:mb-0">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 w-full items-center">
        {/* Left content */}
        <div
          className={`transition-all duration-500 ${
            visible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
          } ${isLeft ? '' : 'order-3'}`}
        >
          <div
            className={`clean-card clean-card-hover p-7 ${
              isLeft ? 'text-right' : 'text-left'
            }`}
          >
            <span className="inline-block text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 border border-primary/20">
              {item.year}
            </span>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm font-semibold text-primary mb-3">{item.company}</p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-5">{item.description}</p>
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center node */}
        <div
          className={`relative z-10 flex items-center justify-center transition-all duration-300 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          } ${!isLeft ? 'order-2' : ''}`}
        >
          <div className="w-14 h-14 bg-card border-2 border-primary rounded-full shadow-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        {/* Empty spacer */}
        <div className={isLeft ? 'order-3' : 'order-1'} />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <div
            className={`w-11 h-11 bg-card border-2 border-primary rounded-full shadow-xs flex items-center justify-center shrink-0 text-primary transition-all duration-300 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          >
            <Icon className="w-5 h-5 stroke-[2]" />
          </div>
          {index < careers.length - 1 && (
            <div className="w-0.5 flex-1 bg-border mt-2" />
          )}
        </div>
        <div
          className={`flex-1 pb-4 transition-all duration-500 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="clean-card p-6">
            <span className="inline-block text-[11px] font-mono font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-2 border border-primary/20">
              {item.year}
            </span>
            <h3 className="font-display text-base font-bold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-xs font-semibold text-primary mb-2">{item.company}</p>
            <p className="text-xs leading-relaxed text-muted-foreground mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareerPath = () => {
  const containerRef = useRef(null);
  const activePathRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const pathD = "M20 0 C20 120 10 240 20 380 C30 520 10 660 20 800 C30 920 20 1000 20 1100";

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = rect.height;
      const currentScroll = windowHeight * 0.6 - rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalHeight));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activePathRef.current) {
      const length = activePathRef.current.getTotalLength();
      activePathRef.current.style.strokeDasharray = `${length}`;
      activePathRef.current.style.strokeDashoffset = `${length * (1 - scrollProgress)}`;
    }
  }, [scrollProgress]);

  return (
    <section id="career" data-reveal style={{ '--reveal-delay': '80ms' }} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1440px]">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div data-reveal style={{ '--reveal-delay': '120ms' }} className="text-center mb-16">
            <div className="teal-badge mb-3">
              02 / Experience
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Career & <span className="text-gradient">Education</span>
            </h2>
            <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto" />
          </div>

          {/* Timeline Container */}
          <div ref={containerRef} className="relative">
            {/* Animated SVG Journey Path Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-10 z-0 pointer-events-none">
              <svg
                className="h-full w-full overflow-visible"
                viewBox="0 0 40 1100"
                preserveAspectRatio="none"
                aria-label="Animated career journey line path"
              >
                {/* Background Line Path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Active Animated Progress Line Path */}
                <path
                  ref={activePathRef}
                  d={pathD}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-[stroke-dashoffset] duration-150 ease-out"
                />
              </svg>
            </div>

            {careers.map((item, index) => (
              <CareerItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
