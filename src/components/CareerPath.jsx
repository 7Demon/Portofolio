import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Rocket, Award, Code2, Zap } from 'lucide-react';

const careers = [
  {
  year: '2022 - 2026',
  title: 'Bachelor of Informatics',
  company: 'University of Technology',
  description: 'Completed Bachelors degree in Informatics (awaiting graduation ceremony). Thesis: "Implementation of ERC-721 Smart Contract-Based Academic Certificate Issuance and Verification System on zkSync Era Layer-2 to Prevent Academic Document Forgery."',
  icon: GraduationCap,
  tags: ['Blockchain', 'Smart Contract', 'IPFS'],
  },
  {
  year: '2025',
  title: 'Internship - Web Developer',
  company: 'Department of Communication and Informatics(Diskominfo)',
  description: 'Designed and developed web-based applications, handling frontend implementation and API integration to ensure system functionality and reliability..',
  icon: Code2,
  tags: ['Web Development', 'Laravel', 'wordpress'],
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
            visible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16'
          } ${isLeft ? '' : 'order-3'}`}
        >
          <div
            className={`glass-card-hover rounded-2xl border border-primary/35 bg-background/45 backdrop-blur-sm p-6 shadow-[0_0_24px_hsl(var(--primary)/0.16)] hover:border-primary/70 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 ${isLeft ? 'text-right' : 'text-left'}`}
          >
            <span className="text-xs font-display uppercase tracking-widest text-primary mb-2 block">
              {item.year}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-secondary font-medium mb-3">{item.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
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
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#a5f3fc_0deg,#22d3ee_120deg,#67e8f9_240deg,#a5f3fc_360deg)] p-[2.5px] shadow-[0_0_20px_rgba(34,211,238,0.7)]">
              <div className="w-full h-full rounded-full bg-[#040b17]" />
            </div>
            <Icon className="relative z-10 w-6 h-6 text-cyan-300" />
          </div>
        </div>

        {/* Empty spacer */}
        <div className={isLeft ? 'order-3' : 'order-1'} />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <div
            className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#a5f3fc_0deg,#22d3ee_120deg,#67e8f9_240deg,#a5f3fc_360deg)] p-0.5 shadow-[0_0_16px_rgba(34,211,238,0.65)]">
              <div className="w-full h-full rounded-full bg-[#040b17]" />
            </div>
            <Icon className="relative z-10 w-5 h-5 text-cyan-300" />
          </div>
          {index < careers.length - 1 && (
            <div className="w-0.5 flex-1 bg-linear-to-b from-primary/40 to-primary/10 mt-2" />
          )}
        </div>
        <div
          className={`flex-1 pb-4 transition-all duration-700 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="glass-card-hover rounded-2xl border border-primary/35 bg-background/45 backdrop-blur-sm p-5 shadow-[0_0_20px_hsl(var(--primary)/0.14)] transition-all duration-300">
            <span className="text-xs font-display uppercase tracking-widest text-primary mb-2 block">
              {item.year}
            </span>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-secondary font-medium mb-2">{item.company}</p>
            <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
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
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div data-reveal style={{ '--reveal-delay': '120ms' }} className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Career Path</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0 pointer-events-none">
              <div
                className="h-full w-0.5"
                style={{
                  background: 'linear-gradient(180deg, rgba(34,211,238,0.95), rgba(34,211,238,0.7), rgba(56,189,248,0.35))',
                  boxShadow: '0 0 16px rgba(34,211,238,0.45)',
                }}
              />
            </div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-cyan-400/20 blur-lg z-0 pointer-events-none" />

            {careers.map((item, index) => (
              <CareerItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 -left-28 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl -z-10" />
    </section>
  );
};

export default CareerPath;
