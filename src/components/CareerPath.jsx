import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Code2 } from 'lucide-react';

const careers = [
  {
    year: '2022 - 2026',
    title: 'Bachelor of Informatics',
    company: 'Universitas Muhammadiyah Surakarta',
    description: 'Completed Bachelor\'s degree in Informatics with a strong focus on software engineering and decentralized technologies. Thesis: "Implementation of ERC-721 Smart Contract-Based Academic Certificate Issuance and Verification System on zkSync Era Layer-2 to Prevent Academic Document Forgery."',
    icon: GraduationCap,
    tags: ['Blockchain', 'Solidity', 'zkSync Era', 'Smart Contracts', 'IPFS'],
  },
  {
    year: '2025',
    title: 'Internship - Web Developer',
    company: 'Department of Communication and Informatics (Diskominfo)',
    description: 'Designed and developed web applications, managing full-stack Laravel flows, API integration, and custom portal solutions to support public communication systems.',
    icon: Code2,
    tags: ['Laravel', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
  }
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
    <div ref={ref} className="relative z-10 flex items-center w-full mb-12 last:mb-0">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 w-full items-center">
        {/* Left content */}
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12'
          } ${isLeft ? '' : 'order-3'}`}
        >
          <div
            className={`glass-card p-6 border border-border hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300 ${
              isLeft ? 'text-right' : 'text-left'
            }`}
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
              {item.year}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-secondary font-semibold mb-3">{item.company}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center node */}
        <div
          className={`relative z-10 flex items-center justify-center transition-all duration-500 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          } ${!isLeft ? 'order-2' : ''}`}
        >
          <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-card border-2 border-primary shadow-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Empty spacer */}
        <div className={isLeft ? 'order-3' : 'order-1'} />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <div
            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-card border-2 border-primary shadow-md transition-all duration-500 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          >
            <Icon className="w-5 h-5 text-primary" />
          </div>
          {index < careers.length - 1 && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-border mt-2" />
          )}
        </div>
        <div
          className={`flex-1 pb-4 transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="glass-card p-5 border border-border hover:border-primary/40 shadow-sm transition-all duration-300">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
              {item.year}
            </span>
            <h3 className="font-display text-base font-bold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-secondary font-medium mb-2">{item.company}</p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20"
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
  return (
    <section id="career" data-reveal style={{ '--reveal-delay': '80ms' }} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div data-reveal style={{ '--reveal-delay': '120ms' }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 mb-4">
              <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">02 / Experience</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Career &</span>
              <span className="text-gradient ml-2">Education</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0 pointer-events-none">
              <div className="h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />
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
