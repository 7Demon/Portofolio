import { Button } from './ui/Button';
import {
  ArrowDown,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Award,
  ExternalLink,
  Copy,
  Check,
  X,
  Code,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { createElement, useEffect, useState } from 'react';
import CareerPath from './CareerPath';

const projects = [
  {
    name: 'UMSChain',
    category: 'Web3 & Blockchain',
    tagline: 'Blockchain-Based Diploma Verification',
    image: '/project1.png',
    tags: ['Solidity', 'zkSync Era', 'React.js', 'Ethers.js', 'Hardhat', 'IPFS'],
    description:
      'UMSChain is a web-based decentralized application (dApp) for issuing, storing, and verifying digital academic diplomas. It leverages zkSync Era (Ethereum Layer-2) for immutable on-chain records and IPFS (via Pinata) for decentralized storage, minting each diploma as an ERC-721 NFT.',
    link: 'https://umschain.vercel.app/',
    github: 'https://github.com/7Demon/ums-chain',
  },
  {
    name: 'Laravel News Portal',
    category: 'Full-Stack & Web2',
    tagline: 'Full-Stack MVC News Application',
    image: '/project2.png',
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'MVC Architecture'],
    description:
      'A robust web application featuring complete administrative CRUD, dynamic article management, category indexing, secure user authentication, and comments flow, structured strictly under Laravel MVC pattern.',
    link: 'https://github.com/7Demon/web_news',
    github: 'https://github.com/7Demon/web_news',
  },
  {
    name: 'TaskFlow Mobile',
    category: 'Mobile & Native',
    tagline: 'Java-Based Offline Task Organizer',
    image: '/project3.png',
    tags: ['Java', 'Android SDK', 'SQLite', 'XML Layouts'],
    description:
      'An offline-first Android task manager built with native Java. Utilizes SQLite for robust CRUD operations, categorization, priority sorting, and local notification alerts.',
    link: 'https://github.com/7Demon/capstone',
    github: 'https://github.com/7Demon/capstone',
  },
  {
    name: 'E-commerce Store',
    category: 'Full-Stack & Web2',
    tagline: 'Laravel-Based Online Store Platform',
    image: '/project4.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    description:
      'A web-based e-commerce platform built with Laravel and MySQL. Features product management, shopping cart functionality, order processing, authentication, and responsive UI for seamless online shopping experiences.',
    link: 'https://github.com/7Demon/Ecommerce-Hoodie',
    github: 'https://github.com/7Demon/Ecommerce-Hoodie',
  },
  {
    name: 'Bun REST API',
    category: 'Full-Stack & Web2',
    tagline: 'High-Performance Backend API with Bun & Swagger',
    image: '/project5.png',
    tags: ['Bun', 'JavaScript', 'Swagger', 'REST API', 'MySQL'],
    description:
      'A lightweight and high-performance RESTful API project built using Bun and JavaScript. Integrated Swagger documentation for interactive API testing and endpoint visualization, with structured routing and efficient backend architecture.',
    link: 'https://github.com/7Demon/bunProjects',
    github: 'https://github.com/7Demon/bunProjects',
  },
];

const certificates = [
  {
    name: 'Web Development Bootcamp with HTML CSS PHP MySQL Wordpress',
    image: '/certi1.png',
    tags: ['HTML5', 'CSS3', 'PHP', 'MySQL', 'WordPress'],
    description:
      'A certificate of completion verifying proficiency in building websites using HTML, CSS, PHP backend programming, MySQL database management, and WordPress CMS integration.',
  },
  {
    name: 'Git & GitHub Bootcamp In 2025: The Complete-Practical Guide',
    image: '/certi2.png',
    tags: ['Git', 'GitHub', 'Version Control', 'Workflow'],
    description:
      'Practical training on repository management, branching, merging, conflict resolution, collaborative teamwork, and standard development workflows.',
  },
  {
    name: 'Build a Modern REST API with PHP 8, from Scratch!',
    image: '/certi3.png',
    tags: ['PHP 8', 'REST API', 'Backend', 'Web Services'],
    description:
      'Hands-on validation of skills in designing, implementing, and securing RESTful Web APIs using native PHP 8 and clean software architecture.',
  },
  {
    name: 'Mastering Solidity, the Ethereum Programming Language',
    image: '/certi4.png',
    tags: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3'],
    description:
      'Advanced credentials covering blockchain architecture, Solidity smart contract programming, security vulnerability mitigation, and decentralized protocol integration.',
  },
  {
    name: 'Complete JAVASCRIPT with HTML5, CSS3 from zero to Expert-2025',
    image: '/certi5.png',
    tags: ['JavaScript', 'ES6+', 'HTML5', 'CSS3', 'DOM API'],
    description:
      'Expert-level training covering advanced core JavaScript features, asynchronous operations, interactive DOM structures, and clean coding concepts.',
  },
  {
    name: 'Java OOP: Object Oriented Programming with Exercises - 2025',
    image: '/certi6.png',
    tags: ['Java', 'OOP', 'Software Engineering', 'Algorithms'],
    description:
      'Deep dive into Object-Oriented Programming (OOP) paradigms in Java, including encapsulation, inheritance, polymorphism, abstraction, and unit exercises.',
  },
  {
    name: 'International Conference on SIML 2025',
    image: '/certi7.png',
    tags: ['Artificial Intelligence', 'IoT', 'Machine Learning', 'Smart Computing'],
    description:
      'Attended the International Conference on Smart Computing, IoT and Machine Learning (SIML 2025) with focus on "Harnessing Artificial Intelligence and Smart Technologies to Build Sustainable, Inclusive, and Resilient Communities".',
  },
];

const skillCategories = [
  {
    id: 'all',
    name: 'All Skills',
    skills: [
      { name: 'JavaScript / ES6+', category: 'Web2 & Frontend', level: 'Advanced' },
      { name: 'React.js', category: 'Web2 & Frontend', level: 'Advanced' },
      { name: 'Tailwind CSS / Bootstrap', category: 'Web2 & Frontend', level: 'Advanced' },
      { name: 'PHP & Laravel', category: 'Backend & Database', level: 'Advanced' },
      { name: 'Python', category: 'Backend & Database', level: 'Intermediate' },
      { name: 'MySQL & SQLite', category: 'Backend & Database', level: 'Advanced' },
      { name: 'Solidity (Smart Contracts)', category: 'Web3 & Blockchain', level: 'Advanced' },
      { name: 'zkSync Era & Hardhat', category: 'Web3 & Blockchain', level: 'Advanced' },
      { name: 'Ethers.js & IPFS', category: 'Web3 & Blockchain', level: 'Intermediate' },
      { name: 'Git & GitHub Workflow', category: 'Tools & DevOps', level: 'Advanced' },
      { name: 'Bun & REST APIs', category: 'Backend & Database', level: 'Intermediate' },
      { name: 'Android Java SDK', category: 'Mobile & Native', level: 'Intermediate' },
    ],
  },
  {
    id: 'web2',
    name: 'Web2 & Frontend',
    skills: [
      { name: 'JavaScript / ES6+', category: 'Web2 & Frontend', level: 'Advanced' },
      { name: 'React.js', category: 'Web2 & Frontend', level: 'Advanced' },
      { name: 'Tailwind CSS & Bootstrap', category: 'Web2 & Frontend', level: 'Advanced' },
      { name: 'HTML5 & CSS3 Architecture', category: 'Web2 & Frontend', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Database',
    skills: [
      { name: 'PHP & Laravel (MVC)', category: 'Backend & Database', level: 'Advanced' },
      { name: 'MySQL & Database Design', category: 'Backend & Database', level: 'Advanced' },
      { name: 'Bun & Node Runtime', category: 'Backend & Database', level: 'Intermediate' },
      { name: 'Python Backend', category: 'Backend & Database', level: 'Intermediate' },
      { name: 'RESTful API & Swagger', category: 'Backend & Database', level: 'Advanced' },
    ],
  },
  {
    id: 'web3',
    name: 'Web3 & Blockchain',
    skills: [
      { name: 'Solidity (ERC-721 / Smart Contracts)', category: 'Web3 & Blockchain', level: 'Advanced' },
      { name: 'zkSync Era (Ethereum L2)', category: 'Web3 & Blockchain', level: 'Advanced' },
      { name: 'Hardhat & Smart Contract Testing', category: 'Web3 & Blockchain', level: 'Advanced' },
      { name: 'Ethers.js Integration', category: 'Web3 & Blockchain', level: 'Intermediate' },
      { name: 'IPFS Decentralized Storage', category: 'Web3 & Blockchain', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub Collaborative Flow', category: 'Tools & DevOps', level: 'Advanced' },
      { name: 'WordPress CMS', category: 'Tools & DevOps', level: 'Intermediate' },
      { name: 'Android SDK (Java)', category: 'Tools & DevOps', level: 'Intermediate' },
      { name: 'Vite & Modern Bundlers', category: 'Tools & DevOps', level: 'Advanced' },
    ],
  },
];

const Home = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('all');
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dickyramadhan0x7@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects =
    activeProjectCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeProjectCategory);

  const currentSkillList =
    skillCategories.find((cat) => cat.id === activeSkillTab)?.skills || [];

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
      setFormError('Semua kolom wajib diisi.');
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

    setFormError('');
    setIsSubmitting(true);
    setFormSuccess(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        data-reveal
        style={{ '--reveal-delay': '80ms' }}
        className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      >
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Availability Badge */}
              <div className="animate-fade-up opacity-0 delay-100 inline-block mb-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-primary/30 text-xs font-mono font-semibold text-foreground shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Web2 & Web3 Projects</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 animate-fade-up opacity-0 delay-200">
                <span className="text-foreground">Dicky Ramadhan</span>
                <br />
                <span className="text-gradient">Full-Stack & Web3 Engineer</span>
              </h1>

              {/* Subtitle / Pitch */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up opacity-0 delay-300">
                Informatics Graduate from Universitas Muhammadiyah Surakarta specializing in building modern web applications, robust full-stack MVC backends, and smart contracts for decentralized ecosystems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-up opacity-0 delay-400">
                <Button size="lg" asChild className="w-full sm:w-auto shadow-md">
                  <a href="#contact" className="gap-2">
                    <Mail size={18} />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <a href="#projects" className="gap-2">
                    <Code size={18} />
                    View Featured Works
                  </a>
                </Button>
              </div>

              {/* Social Links & Email Copy */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up opacity-0 delay-500">
                {[
                  { icon: Github, href: 'https://github.com/7Demon', label: 'GitHub' },
                  { icon: Twitter, href: 'https://x.com/oppp354', label: 'Twitter' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/dicky-ramadhan-b2b591361/', label: 'LinkedIn' },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-105 active:scale-95"
                  >
                    {createElement(icon, { size: 20 })}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="h-11 px-4 rounded-xl glass-card flex items-center gap-2 text-xs font-mono font-bold text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-105 cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Email Copied!' : 'dickyramadhan0x7@gmail.com'}</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Avatar Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center animate-fade-up opacity-0 delay-300">
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center group">
                {/* Rotating Tech Accent Rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-secondary/30 animate-[spin_25s_linear_infinite_reverse]" />

                {/* Main Avatar Card */}
                <div className="absolute inset-7 rounded-full overflow-hidden border-2 border-primary/60 shadow-2xl bg-card transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="/developer_avatar.png"
                    alt="Dicky Ramadhan Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Stat Badge 1 */}
                <div className="absolute -top-2 -right-2 glass-card px-3.5 py-2 border border-primary/30 rounded-xl flex items-center gap-2 shadow-lg z-20">
                  <Sparkles size={16} className="text-primary animate-bounce" />
                  <span className="text-xs font-mono font-bold text-foreground">Web2 & Web3</span>
                </div>

                {/* Floating Stat Badge 2 */}
                <div className="absolute -bottom-2 -left-2 glass-card px-3.5 py-2 border border-secondary/30 rounded-xl flex items-center gap-2 shadow-lg z-20">
                  <Award size={16} className="text-secondary" />
                  <span className="text-xs font-mono font-bold text-foreground">7+ Certifications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll to About Section" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* About & Interactive Skills Section */}
      <section id="about" data-reveal style={{ '--reveal-delay': '100ms' }} className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-14 text-center animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">01 / Profile</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">About</span>
                <span className="text-gradient ml-2">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Bio Card */}
              <div className="lg:col-span-6 space-y-5 animate-fade-up opacity-0 delay-200">
                <div className="glass-card p-6 sm:p-8 space-y-4 border border-border">
                  <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                    <Layers className="text-primary" size={22} />
                    Software Developer & Informatics Graduate
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    I am a recent Informatics graduate from Universitas Muhammadiyah Surakarta (2022-2026) with hands-on experience across full-stack web development and blockchain engineering.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    My core expertise includes building responsive web interfaces, designing MVC web portals with PHP & Laravel, creating high-performance REST APIs, and implementing smart contracts on Layer-2 Ethereum solutions (zkSync Era).
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {['Full-Stack MVC', 'Smart Contracts (Solidity)', 'RESTful APIs', 'zkSync Era L2', 'Responsive UI'].map((highlight) => (
                      <span key={highlight} className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        <CheckCircle2 size={12} />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Interactive Skill Categories */}
              <div className="lg:col-span-6 animate-fade-up opacity-0 delay-300">
                <div className="glass-card p-6 sm:p-8 border border-border">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Technical Stack & Capabilities
                  </h3>

                  {/* Skill Category Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border">
                    {skillCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveSkillTab(cat.id)}
                        className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                          activeSkillTab === cat.id
                            ? 'bg-primary text-primary-foreground font-bold shadow-sm'
                            : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                    {currentSkillList.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl border border-border/80 bg-background/60 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                      >
                        <span className="text-sm font-semibold text-foreground mb-1">{skill.name}</span>
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-muted-foreground">{skill.category}</span>
                          <span className="text-primary font-bold">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section Component */}
      <section id="careerpath" data-reveal style={{ '--reveal-delay': '120ms' }}>
        <CareerPath />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" data-reveal style={{ '--reveal-delay': '140ms' }} className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">03 / Projects</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-foreground">Featured</span>
                <span className="text-gradient ml-2">Creations</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-fade-up opacity-0 delay-100">
              {['All', 'Web3 & Blockchain', 'Full-Stack & Web2', 'Mobile & Native'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectCategory(cat)}
                  className={`text-xs font-mono px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    activeProjectCategory === cat
                      ? 'bg-primary text-primary-foreground font-bold shadow-md scale-105'
                      : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up opacity-0 delay-200">
              {filteredProjects.map((project) => (
                <div
                  key={project.name}
                  className="glass-card flex flex-col justify-between overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Image Preview */}
                  <div className="relative w-full aspect-video overflow-hidden border-b border-border bg-muted">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-md px-3 py-1 rounded-full border border-border z-10">
                      <span className="text-[10px] font-mono text-primary font-bold uppercase">{project.category}</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 font-display">{project.name}</h3>
                      <p className="text-xs font-mono text-secondary mb-3 font-semibold">{project.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-mono text-primary hover:underline font-bold transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground font-bold transition-colors"
                          >
                            <Github size={14} />
                            Source Code
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
      <section id="certificates" data-reveal style={{ '--reveal-delay': '150ms' }} className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-14 text-center animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">04 / Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">My</span>
                <span className="text-gradient ml-2">Certificates</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up opacity-0 delay-200">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className="glass-card flex flex-col justify-between overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group"
                >
                  <div className="relative w-full aspect-video overflow-hidden border-b border-border bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-mono text-white bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/20">
                        Click to View Certificate
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{cert.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-up">
          <div
            className="relative w-full max-w-4xl glass-card border border-primary/40 p-6 overflow-hidden rounded-2xl shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h3 className="text-lg sm:text-xl font-bold font-display text-foreground line-clamp-1">
                {selectedCert.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate Large Image */}
            <div className="flex-1 overflow-y-auto space-y-4">
              <div className="w-full max-h-[60vh] rounded-xl overflow-hidden border border-border bg-black">
                <img src={selectedCert.image} alt={selectedCert.name} className="w-full h-full object-contain mx-auto" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{selectedCert.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCert.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" data-reveal style={{ '--reveal-delay': '160ms' }} className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-up opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 mb-4">
                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase">05 / Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Get In</span>
                <span className="text-gradient ml-2">Touch</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
              <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-xl mx-auto">
                Have a project in mind or looking for a Web2 & Web3 developer? Let&apos;s build something exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-up opacity-0 delay-200">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="glass-card p-6 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Email</h3>
                      <p className="text-base font-bold text-foreground">dickyramadhan0x7@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Location</h3>
                      <p className="text-base font-bold text-foreground">Indonesia / Remote Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Available for freelance projects, full-stack web app development, smart contract auditing/integration, and full-time roles. Standard response time is within 24 hours.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                action="https://formsubmit.co/dickyramadhan0x7@gmail.com"
                method="POST"
                onSubmit={handleContactSubmit}
                className="glass-card p-6 sm:p-8 space-y-5 border border-border"
              >
                <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

                {formError && (
                  <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono">
                    {formError}
                  </div>
                )}

                {formSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Pesan berhasil disiapkan! Mengirimkan pesan Anda...
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-foreground font-semibold">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    minLength={2}
                    maxLength={80}
                    className="w-full h-11 rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-foreground font-semibold">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    maxLength={120}
                    className="w-full h-11 rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-foreground font-semibold">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your project details or message here..."
                    required
                    minLength={15}
                    rows={4}
                    className="w-full rounded-xl border border-border bg-background/60 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full gap-2">
                  <Send size={16} />
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
