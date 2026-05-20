import { Button } from './ui/Button';
import { ArrowDown, Github, Twitter, Linkedin, Mail, MapPin, Send, Heart, Award } from 'lucide-react';
import { createElement, useEffect, useState } from 'react';
import CareerPath from './CareerPath';


const projects = [
  {
    name: 'UMSChain',
    tagline: 'Blockchain-Based Diploma Verification',
    image: '/project1.png',
    tags: ['Solidity', 'zkSync Era', 'React.js', 'Ethers.js', 'Hardhat', 'IPFS'],
    description: 'UMSChain is a web-based decentralized application (dApp) for issuing, storing, and verifying digital academic diplomas. It leverages zkSync Era (Ethereum Layer-2) for immutable on-chain records and IPFS (via Pinata) for decentralized storage, minting each diploma as an ERC-721 NFT.',
    link: 'https://umschain.vercel.app/',
    github: 'https://github.com/7Demon/ums-chain'
  },
  {
    name: 'Laravel News Portal',
    tagline: 'Full-Stack MVC News Application',
    image: '/project2.png',
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'MVC Architecture'],
    description: 'A robust web application featuring complete administrative CRUD, dynamic article management, category indexing, secure user authentication, and comments flow, structured strictly under Laravel MVC pattern.',
    link: 'https://github.com/7Demon/web_news',
    github: 'https://github.com/7Demon/web_news'
  },
  {
    name: 'TaskFlow Mobile',
    tagline: 'Java-Based Offline Task Organizer',
    image: '/project3.png',
    tags: ['Java', 'Android SDK', 'SQLite', 'XML Layouts'],
    description: 'An offline-first Android task manager built with native Java. Utilizes SQLite for robust CRUD operations, categorization, priority sorting, and local notification alerts.',
    link: 'https://github.com/7Demon/capstone',
    github: 'https://github.com/7Demon/capstone'
  },
  {
    name: 'E-commerce',
    tagline: 'Laravel-Based Online Store Platform',
    image: '/project4.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    description: 'A web-based e-commerce platform built with Laravel and MySQL. Features product management, shopping cart functionality, order processing, authentication, and responsive UI for seamless online shopping experiences',
    link: 'https://github.com/7Demon/Ecommerce-Hoodie',
    github: 'https://github.com/7Demon/Ecommerce-Hoodie'
  },
  {
    name: 'Bun REST API',
    tagline: 'High-Performance Backend API with Bun & Swagger',
    image: '/project5.png',
    tags: ['Bun', 'JavaScript', 'Swagger', 'REST API', 'MySQL'],
    description: 'A lightweight and high-performance RESTful API project built using Bun and JavaScript. Integrated Swagger documentation for interactive API testing and endpoint visualization, with structured routing and efficient backend architecture.',
    link: 'https://github.com/7Demon/bunProjects',
    github: 'https://github.com/7Demon/bunProjects'
  }
];

const certificates = [
  {
    title: 'Solidity Smart Contract Developer',
    issuer: 'Decentralized Academic Systems',
    date: '2025',
    description: 'Credential for advanced smart contract programming, security analysis, and decentralized application architecture.'
  },
  {
    title: 'EF SET English Certificate',
    issuer: 'EF Education First',
    date: '2025',
    description: 'C2 Proficient English language level verification, showing professional-grade communication skills.'
  },
  {
    title: 'Bachelor of Informatics',
    issuer: 'Universitas Muhammadiyah Surakarta',
    date: '2026',
    description: 'Completed Bachelor\'s degree focusing on software engineering, blockchain systems, and system security.'
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Coursera / Google',
    date: '2024',
    description: 'Covers troubleshooting, customer service, networking, operating systems, system administration, and security.'
  }
];

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollbar-slot');
    if (!scrollContainer) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = scrollContainer.querySelectorAll('.skill-card');
          const containerRect = scrollContainer.getBoundingClientRect();
          const containerCenter = containerRect.height / 2 + containerRect.top;

          cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.top + cardRect.height / 2;
            const distance = Math.abs(cardCenter - containerCenter);
            const maxDistance = containerRect.height / 2;
            const ratio = Math.max(0, 1 - distance / maxDistance);

            // Scale and opacity based on distance from center
            const scale = 0.8 + ratio * 0.3;
            const opacity = 0.4 + ratio * 0.6;

            card.style.transform = `scale(${scale})`;
            card.style.opacity = opacity;

            // Highlight center item
            if (ratio > 0.9) {
              card.parentElement.classList.add('center-item');
            } else {
              card.parentElement.classList.remove('center-item');
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollContainerCert = document.querySelector('.scrollbar-slot-horizontal');
    if (!scrollContainerCert) return;

    let ticking = false;

    const handleScrollCert = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = scrollContainerCert.querySelectorAll('.cert-card');
          const containerRect = scrollContainerCert.getBoundingClientRect();
          const containerCenter = containerRect.width / 2 + containerRect.left;

          cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(cardCenter - containerCenter);
            const maxDistance = containerRect.width / 2;
            const ratio = Math.max(0, 1 - distance / maxDistance);

            // Scale and opacity based on distance from center
            const scale = 0.85 + ratio * 0.15;
            const opacity = 0.4 + ratio * 0.6;

            card.style.transform = `scale(${scale})`;
            card.style.opacity = opacity;

            // Highlight center item
            if (ratio > 0.95) {
              card.parentElement.classList.add('center-item-horizontal');
            } else {
              card.parentElement.classList.remove('center-item-horizontal');
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollContainerCert.addEventListener('scroll', handleScrollCert);
    handleScrollCert(); // Initial call

    return () => scrollContainerCert.removeEventListener('scroll', handleScrollCert);
  }, []);

  const handleContactSubmit = (event) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honey = String(formData.get('_honey') || '').trim();
    if (honey) {
      event.preventDefault();
      return;
    }

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      event.preventDefault();
      setFormError('Semua field wajib diisi.');
      return;
    }

    if (!emailPattern.test(email)) {
      event.preventDefault();
      setFormError('Format email belum valid.');
      return;
    }

    if (message.length < 15) {
      event.preventDefault();
      setFormError('Pesan minimal 15 karakter.');
      return;
    }

    const lastSubmit = Number(localStorage.getItem('contact_last_submit_at') || 0);
    const now = Date.now();
    const cooldownMs = 60 * 1000;

    if (now - lastSubmit < cooldownMs) {
      event.preventDefault();
      setFormError('Tunggu 60 detik sebelum kirim pesan lagi.');
      return;
    }

    localStorage.setItem('contact_last_submit_at', String(now));
    setFormError('');
    setIsSubmitting(true);
  };

  return (
    <>
      {/* hero section*/}
      <section data-reveal style={{ '--reveal-delay': '80ms' }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-30 lg:px-40 py-24 md:py-28 lg:py-30 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Status badge */}
              <div className="animate-fade-up opacity-0 delay-100">
                <div className="inline-flex items-center gap-2 glass-card px-4 py-1 mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-muted-foreground">Available for Web2 and Web3 Projects</span>
                </div>
              </div>
              {/* Engineering the Future of Web2 & Web3 */}
              {/* Main heading */}
              <h1 className="font-display text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-up opacity-0 delay-200">
                <span className="text-foreground">Engineering the</span>
                <br />
                <span className="text-gradient neon-glow">Future of Web2 & Web3</span>
                {/* <br />
              <span className="text-foreground">Future</span> */}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 animate-fade-up opacity-0 delay-300">
                Nice to connect with you all <br />
                I am Dicky Ramadhan, a software developer with experienced in Web2 and Web3 development,
                <span className="hidden sm:inline"><br /></span>
                {' '}including smart contract integration and decentralized features.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10 md:mb-12 animate-fade-up opacity-0 delay-400">
                <Button size="lg" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">View Works</a>
                </Button>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0 delay-500">
                {[
                  { icon: Github, href: 'https://github.com/7Demon' },
                  { icon: Twitter, href: 'https://x.com/oppp354' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/dicky-ramadhan-b2b591361/' },
                ].map(({ icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="border rounded-xl w-12 h-12 glass-card-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  >
                    {createElement(icon, { size: 20 })}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Hero Content - Interactive Avatar Showcase */}
            <div className="relative flex justify-center items-center animate-fade-up opacity-0 delay-300 h-80 sm:h-96 md:h-[450px] lg:h-[500px]">
              {/* Background glowing gradient orb */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-linear-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse-slow" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                {/* Outer rotating dashed tech-ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-[spin_40s_linear_infinite]" />

                {/* Middle glowing solid ring */}
                <div className="absolute inset-4 rounded-full border-2 border-secondary/35 animate-[spin_25s_linear_infinite_reverse] shadow-[0_0_20px_rgba(139,92,246,0.15)]" />

                {/* Main Avatar Frame */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/60 shadow-[0_0_40px_hsl(175_80%_50%/_0.3)] bg-slate-950/80 group z-10">
                  <img
                    src="/developer_avatar.png"
                    alt="Dicky Ramadhan Developer Avatar"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Floating Tech Badge 1 - Solidity */}
                <div className="absolute -top-1 -right-4 glass-card px-4 py-2 border border-primary/30 rounded-xl flex items-center gap-2 animate-bounce shadow-lg z-20" style={{ animationDuration: '3.5s' }}>
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
                  <span className="text-xs font-mono text-foreground font-bold">Web2 & Web3</span>
                </div>

                {/* Floating Tech Badge 2 - Graduate */}
                <div className="absolute -bottom-1 -left-4 glass-card px-4 py-2 border border-secondary/35 rounded-xl flex items-center gap-2 animate-bounce shadow-lg z-20" style={{ animationDuration: '4.5s' }}>
                  <span className="flex h-2 w-2 rounded-full bg-secondary animate-ping" />
                  <span className="text-xs font-mono text-foreground font-bold">Informatics Graduate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:block absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-reveal style={{ '--reveal-delay': '100ms' }} className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="mb-12 md:mb-16 text-center animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">01 / Profile</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">About</span>
                <span className="text-gradient neon-glow ml-2">Me</span>
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
              {/* Left - Text Content */}
              <div className="space-y-6 animate-fade-up opacity-0 delay-200">
                <p className="text-muted-foreground text-justify md:text-justify md:text-lg leading-relaxed">
                  I am a recent Informatics graduate from Universitas Muhammadiyah Surakarta 2022-2026 with a passion for software development and emerging technologies.
                </p>

                <p className="text-muted-foreground text-justify md:text-justify md:text-lg leading-relaxed">
                  I’m a developer working across Web2 and Web3 environments, with experience building web applications and integrating blockchain technologies. My interest in software development gradually expanded into exploring decentralized systems and smart contracts.
                </p>

                <p className="text-muted-foreground text-justify md:text-justify md:text-lg leading-relaxed">
                  I focus on developing efficient, maintainable, and user-friendly applications.
                  My work includes building modern web platforms, implementing backend systems,
                  and integrating blockchain features where needed.
                  Outside of development, I enjoy exploring emerging technologies and continuously improving
                  my technical skills to stay adaptable in the rapidly evolving tech landscape.
                </p>
              </div>

              {/* Right - Skills Carousel */}
              <div className="animate-fade-up opacity-0 delay-300">
                <div className="relative">
                  {/* Overlay untuk efek slot machine */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-background to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-background to-transparent" />
                    {/* Center highlight glow */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-32 bg-linear-to-b from-primary/20 via-primary/30 to-primary/20 blur-2xl" />
                  </div>

                  {/* Scrollable container */}
                  <div className="h-80 sm:h-96 overflow-y-auto snap-y snap-mandatory pt-24 sm:pt-32 pb-24 sm:pb-32 scrollbar-slot scroll-smooth relative">
                    <div className="flex flex-col">
                      {[
                        {
                          title: 'Programming Languages',
                          skills: 'JavaScript, Python, PHP, Solidity'
                        },
                        {
                          title: 'Frontend Technologies',
                          skills: 'React (Library), Tailwind CSS (Framework), Bootstrap (Framework)'
                        },
                        {
                          title: 'Backend Technologies',
                          skills: 'Python, Laravel (PHP Framework)'
                        },
                        {
                          title: 'Blockchain Development',
                          skills: 'Solidity (Smart Contract Language), Hardhat (Development Framework), Ethers.js (Library)'
                        },
                        {
                          title: 'Tools & Platforms',
                          skills: 'Git (Version Control), WordPress (CMS), SAP (Enterprise System)'
                        }
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="snap-center shrink-0 h-28 sm:h-32 px-3 sm:px-6 lg:px-9 py-2 sm:py-3 flex items-center justify-center transition-all duration-500 ease-out transform"
                          style={{
                            scrollSnapAlign: 'center',
                            scrollSnapStop: 'always'
                          }}
                        >
                          <div className="skill-card w-full glass-card p-4 sm:p-6 rounded-xl border border-primary/20 transition-all duration-500 hover:border-primary/50"
                            data-skill-index={index}
                          >
                            <h3 className="text-foreground font-bold text-base sm:text-lg mb-2 transition-colors duration-500">
                              {skill.title}
                            </h3>
                            <p className="text-muted-foreground text-sm transition-colors duration-500">{skill.skills}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* career path */}
      <section id='careerpath' data-reveal style={{ '--reveal-delay': '120ms' }}>
        <CareerPath />
      </section>

      {/* project section */}
      <section id="projects" data-reveal style={{ '--reveal-delay': '140ms' }} className='relative py-20 md:py-28 overflow-hidden'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='content-center mx-auto'>
            {/* title */}
            <div className="mb-12 md:mb-16 text-center animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">03 / Projects</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Featured</span>
                <span className="text-gradient neon-glow ml-2">Creations</span>
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
            </div>
            {/* content */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up opacity-0 delay-200 mx-auto max-w-6xl px-4'>
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 100}ms` }}
                  className='glass-card flex flex-col justify-between overflow-hidden border border-primary/25 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2'
                >
                  <div className='relative w-full aspect-video overflow-hidden border-b border-primary/10 bg-black/40'>
                    <img
                      src={project.image}
                      alt={project.name}
                      className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                    />
                    <div className='absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20 z-10'>
                      <span className="text-[10px] font-mono text-primary font-bold tracking-wider uppercase">Project {index + 1}</span>
                    </div>
                  </div>

                  <div className='p-6 flex-1 flex flex-col justify-between'>
                    <div>
                      <h3 className='text-xl font-bold text-foreground mb-1 font-display'>{project.name}</h3>
                      <p className='text-xs font-mono text-secondary mb-3 font-semibold'>{project.tagline}</p>
                      <p className='text-sm text-muted-foreground leading-relaxed mb-4 text-justify'>{project.description}</p>
                    </div>

                    <div>
                      <div className='flex flex-wrap gap-1.5 mb-5'>
                        {project.tags.map((tag) => (
                          <span key={tag} className='text-[10px] font-mono bg-primary/10 text-primary border border-primary/10 px-2 py-0.5 rounded'>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center gap-4 pt-4 border-t border-primary/10'>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='flex items-center gap-1.5 text-xs font-mono text-primary hover:text-cyan-300 font-bold transition-colors'
                        >
                          <Send size={12} />
                          Live Demo
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground font-bold transition-colors'
                          >
                            <Github size={12} />
                            Source
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" data-reveal style={{ '--reveal-delay': '150ms' }} className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="mb-12 md:mb-16 text-center animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">04 / Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">My</span>
                <span className="text-gradient neon-glow ml-2">Certificates</span>
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
            </div>

            {/* Carousel Layout */}
            <div className="animate-fade-up opacity-0 delay-300">
              <div className="relative">
                {/* Overlay untuk efek slot machine (kiri & kanan) */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-linear-to-r from-background to-transparent" />
                  <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-linear-to-l from-background to-transparent" />
                  {/* Center highlight glow */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-72 sm:w-80 md:w-96 bg-linear-to-r from-primary/10 via-primary/20 to-primary/10 blur-2xl" />
                </div>

                {/* Scrollable container */}
                <div className="flex overflow-x-auto snap-x snap-mandatory py-10 px-[15%] sm:px-[30%] md:px-[35%] lg:px-[40%] scrollbar-slot-horizontal scroll-smooth gap-6 relative">
                  {certificates.map((cert, index) => (
                    <div
                      key={index}
                      className="snap-center shrink-0 w-72 sm:w-80 md:w-96 px-3 flex items-center justify-center transition-all duration-500 ease-out transform"
                      style={{
                        scrollSnapAlign: 'center',
                        scrollSnapStop: 'always'
                      }}
                    >
                      <div className="cert-card w-full glass-card p-6 rounded-xl border border-primary/20 transition-all duration-500 hover:border-primary/50 flex flex-col justify-between h-64"
                        data-cert-index={index}
                      >
                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <span className="text-xs text-primary font-mono tracking-wider uppercase bg-primary/10 px-2.5 py-1 rounded-md">
                              {cert.date}
                            </span>
                            <Award className="text-secondary w-6 h-6 animate-pulse" />
                          </div>
                          <h3 className="text-foreground font-bold text-lg sm:text-xl mb-2 line-clamp-2 transition-colors duration-500">
                            {cert.title}
                          </h3>
                          <p className="text-muted-foreground text-sm font-semibold mb-2">{cert.issuer}</p>
                          <p className="text-muted-foreground text-xs line-clamp-3 leading-relaxed">{cert.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* contact section */}
      <section id="contact" data-reveal style={{ '--reveal-delay': '160ms' }} className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">05 / Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Get In</span>
                <span className="text-gradient neon-glow ml-2">Touch</span>
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
              <p className="text-muted-foreground text-base md:text-lg mt-4">
                Have a project in mind? Let&apos;s build something amazing together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-up opacity-0 delay-200">
              <div className="space-y-5">
                <div data-reveal style={{ '--reveal-delay': '120ms' }} className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/60 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">dickyramadhan0x7@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div data-reveal style={{ '--reveal-delay': '200ms' }} className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/60 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Remote / Worldwide</p>
                    </div>
                  </div>
                </div>

                <div data-reveal style={{ '--reveal-delay': '260ms' }} className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m currently open for freelance projects, full-time positions, and collaborations in the Web3 space.
                    Response time is usually within 24 hours.
                  </p>
                </div>
              </div>

              <form
                data-reveal
                style={{ '--reveal-delay': '220ms' }}
                action="https://formsubmit.co/dickyramadhan0x7@gmail.com"
                method="POST"
                onSubmit={handleContactSubmit}
                className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6 md:p-7 space-y-5"
              >
                <input type="hidden" name="_subject" value="New Message From Website" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="text"
                  name="_honey"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm text-foreground/90">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name='name'
                    placeholder="Your name"
                    required
                    minLength={2}
                    maxLength={80}
                    className="w-full h-11 rounded-xl border border-primary/20 bg-muted/30 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm text-foreground/90">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name='email'
                    placeholder="you@example.com"
                    required
                    maxLength={120}
                    className="w-full h-11 rounded-xl border border-primary/20 bg-muted/30 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm text-foreground/90">Message</label>
                  <textarea
                    id="contact-message"
                    name='message'
                    rows={3}
                    placeholder="Tell me about your project..."
                    required
                    minLength={15}
                    maxLength={1500}
                    className="w-full rounded-xl border border-primary/20 bg-muted/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <p className="text-sm text-red-300">{formError}</p>
                )}

                <Button
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="inline-flex items-center gap-2">
                    <Send size={16} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 blur-3xl rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 blur-3xl rounded-full -z-10" />
      </section>

      {/* footer */}
      <footer data-reveal style={{ '--reveal-delay': '80ms' }} className="border-t border-primary/20 py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient neon-glow">
              Dicky Ramadhan
            </a>

            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Copyright © 2026 Dicky Ramadhan
              <Heart size={14} className="text-primary" />
              Web2 &amp; Web3
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/7Demon' },
                { icon: Twitter, href: 'https://x.com/oppp354' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/dicky-ramadhan-b2b591361/' },
              ].map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`footer-social-${index}`}
                >
                  {createElement(icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>)
}
export default Home;
