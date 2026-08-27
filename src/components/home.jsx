import { Button } from './ui/Button';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Copy,
  Check,
  X,
  Sparkles,
  Code2,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
} from 'lucide-react';
import { createElement, useEffect, useState } from 'react';
import CareerPath from './CareerPath';

const projects = [
  {
    name: 'ERP System',
    category: 'Desktop & ERP',
    tagline: 'Industrial Waste & Production Reporting ERP',
    image: '/ui_erp.png',
    tags: ['Python', 'Flet', 'SQLite', 'Desktop App', 'ERP'],
    description:
      'Eliminates manual paper-based waste tracking and error-prone inventory reporting in industrial manufacturing. Provides an automated desktop GUI built with Python, Flet, and SQLite for real-time waste (afval) reporting, analytics dashboard visualization, and offline data persistence.',
    link: 'https://github.com/7Demon/laporanAfval',
    github: 'https://github.com/7Demon/laporanAfval',
  },
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
    name: 'urMusic',
    category: 'Mobile & Native',
    tagline: 'Ad-Free Offline Music Player & Library',
    image: '/urmusic.png',
    tags: ['Dart', 'Flutter', 'SQLite', 'Mobile App', 'Ad-Free'],
    description:
      'Solves intrusive commercial ads, data tracking, and internet dependencies found in standard streaming apps. Built with Flutter, Dart, and local SQLite database to deliver a clean, ad-free offline music playback experience with custom playlists and fast local audio indexing.',
    link: 'https://github.com/7Demon/urMuisc/releases/tag/v1.0.0',
    github: 'https://github.com/7Demon/urMuisc',
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
    name: 'E-Commerce Platform',
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
      { name: 'JavaScript / ES6+', category: 'Web2 & Frontend' },
      { name: 'React.js', category: 'Web2 & Frontend' },
      { name: 'Tailwind CSS / Bootstrap', category: 'Web2 & Frontend' },
      { name: 'PHP & Laravel', category: 'Backend & Database' },
      { name: 'Python & Flet (GUI/ERP)', category: 'Backend & App Development' },
      { name: 'MySQL & SQLite', category: 'Backend & Database' },
      { name: 'Solidity (Smart Contracts)', category: 'Web3 & Blockchain' },
      { name: 'zkSync Era & Hardhat', category: 'Web3 & Blockchain' },
      { name: 'Ethers.js & IPFS', category: 'Web3 & Blockchain' },
      { name: 'Git & GitHub Workflow', category: 'Tools & DevOps' },
      { name: 'Bun & REST APIs', category: 'Backend & Database' },
      { name: 'Android Java SDK', category: 'Mobile & Native' },
    ],
  },
  {
    id: 'web2',
    name: 'Web2 & Frontend',
    skills: [
      { name: 'JavaScript / ES6+', category: 'Web2 & Frontend' },
      { name: 'React.js', category: 'Web2 & Frontend' },
      { name: 'Tailwind CSS & Bootstrap', category: 'Web2 & Frontend' },
      { name: 'HTML5 & CSS3 Architecture', category: 'Web2 & Frontend' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Database',
    skills: [
      { name: 'PHP & Laravel (MVC)', category: 'Backend & Database' },
      { name: 'MySQL & Database Design', category: 'Backend & Database' },
      { name: 'Bun & Node Runtime', category: 'Backend & Database' },
      { name: 'Python Backend', category: 'Backend & Database' },
      { name: 'RESTful API & Swagger', category: 'Backend & Database' },
    ],
  },
  {
    id: 'web3',
    name: 'Web3 & Blockchain',
    skills: [
      { name: 'Solidity (ERC-721 / Smart Contracts)', category: 'Web3 & Blockchain' },
      { name: 'zkSync Era (Ethereum L2)', category: 'Web3 & Blockchain' },
      { name: 'Hardhat & Smart Contract Testing', category: 'Web3 & Blockchain' },
      { name: 'Ethers.js Integration', category: 'Web3 & Blockchain' },
      { name: 'IPFS Decentralized Storage', category: 'Web3 & Blockchain' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub Collaborative Flow', category: 'Tools & DevOps' },
      { name: 'WordPress CMS', category: 'Tools & DevOps' },
      { name: 'Android SDK (Java)', category: 'Tools & DevOps' },
      { name: 'Vite & Modern Bundlers', category: 'Tools & DevOps' },
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
      {/* Hero Section - Clean & Elegant */}
      <section
        id="home"
        data-reveal
        style={{ '--reveal-delay': '80ms' }}
        className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1440px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-7">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Available for Web2 & Web3 Projects</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground">
                Engineering <br />
                <span className="text-gradient">Web2 & Web3</span> <br />
                Solutions.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-muted-foreground font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I am Dicky Ramadhan — an Informatics graduate specializing in building scalable web applications, robust full-stack MVC backends, and smart contract development on Ethereum Layer-2.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <a href="#contact" className="gap-2">
                    <Sparkles size={18} />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <a href="#projects">
                    View Works
                  </a>
                </Button>
              </div>

              {/* Social Links & Copy Email */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
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
                    className="w-10 h-10 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-105 shadow-xs"
                  >
                    {createElement(icon, { size: 18 })}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="h-10 px-4 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary/40 transition-all cursor-pointer shadow-xs"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Email Copied!' : 'dickyramadhan0x7@gmail.com'}</span>
                </button>
              </div>
            </div>

            {/* Right Column - Clean Browser Dashboard Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-md clean-card p-6 space-y-6">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3.5 py-1 rounded-full border border-border bg-muted/50 text-[11px] font-mono text-muted-foreground">
                    DICKY.DEV/METRICS
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">Engineering Overview</h3>
                      <p className="text-xs font-mono text-muted-foreground">Web2 & Web3 Performance</p>
                    </div>
                    <span className="p-2 rounded-xl bg-primary/10 text-primary">
                      <Activity size={18} />
                    </span>
                  </div>

                  {/* Clean Visual Bars */}
                  <div className="h-36 flex items-end justify-between gap-3 p-4 bg-muted/30 rounded-2xl border border-border/60">
                    <div className="w-full bg-primary/80 rounded-lg h-[70%] transition-all hover:bg-primary" />
                    <div className="w-full bg-foreground/80 rounded-lg h-[90%] transition-all hover:bg-foreground" />
                    <div className="w-full bg-primary/50 rounded-lg h-[50%] transition-all hover:bg-primary" />
                    <div className="w-full bg-sky-500/80 rounded-lg h-[95%] transition-all hover:bg-sky-500" />
                    <div className="w-full bg-primary/80 rounded-lg h-[80%] transition-all hover:bg-primary" />
                  </div>

                  {/* Summary Metric Pills */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl border border-border bg-background/60">
                      <span className="text-[11px] font-mono text-muted-foreground block mb-0.5">zkSync L2 Verified</span>
                      <span className="text-sm font-bold text-foreground">100% On-Chain</span>
                    </div>
                    <div className="p-3 rounded-xl border border-border bg-background/60">
                      <span className="text-[11px] font-mono text-muted-foreground block mb-0.5">MVC Architecture</span>
                      <span className="text-sm font-bold text-primary">PHP Laravel</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" data-reveal style={{ '--reveal-delay': '100ms' }} className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1440px]">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-14 text-center">
              <div className="teal-badge mb-3">
                01 / Profile
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Bio Card */}
              <div className="lg:col-span-6">
                <div className="clean-card p-8 sm:p-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shadow-xs">
                      <Code2 size={24} className="stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Software Developer
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground">Informatics Graduate UMS 2022-2026</p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    I am an Informatics graduate from Universitas Muhammadiyah Surakarta with a strong technical background in full-stack web applications, Laravel MVC architectures, and blockchain smart contracts.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    My focus is on designing maintainable, clean codebases, implementing robust REST APIs, and integrating Layer-2 Ethereum solutions (zkSync Era) for decentralized verification systems.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {['Full-Stack MVC', 'Solidity ERC-721', 'zkSync Era L2', 'RESTful APIs'].map((highlight) => (
                      <span key={highlight} className="text-xs font-mono px-3 py-1 bg-muted/60 text-foreground border border-border rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Interactive Skill Categories */}
              <div className="lg:col-span-6">
                <div className="clean-card p-8 sm:p-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Technical Stack
                  </h3>

                  {/* Skill Category Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border">
                    {skillCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveSkillTab(cat.id)}
                        className={`text-xs font-semibold rounded-full px-4 py-1.5 border transition-all cursor-pointer ${
                          activeSkillTab === cat.id
                            ? 'bg-primary text-primary-foreground border-primary shadow-xs font-bold'
                            : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1">
                    {currentSkillList.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 bg-background border border-border rounded-xl flex flex-col justify-between hover:border-primary/40 transition-colors"
                      >
                        <span className="text-sm font-semibold text-foreground mb-1">{skill.name}</span>
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-muted-foreground">{skill.category}</span>
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
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1440px]">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <div className="teal-badge mb-3">
                03 / Creations
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto" />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
              {['All', 'Web3 & Blockchain', 'Full-Stack & Web2', 'Mobile & Native', 'Desktop & ERP'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectCategory(cat)}
                  className={`text-xs font-semibold rounded-full px-5 py-2 border transition-all cursor-pointer ${
                    activeProjectCategory === cat
                      ? 'bg-primary text-primary-foreground border-primary shadow-xs font-bold'
                      : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.name}
                  className="clean-card clean-card-hover p-6 flex flex-col justify-between overflow-hidden space-y-5"
                >
                  <div className="relative w-full aspect-video overflow-hidden border border-border rounded-xl bg-muted">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-card/90 backdrop-blur-md text-foreground px-3 py-0.5 rounded-full border border-border font-mono font-bold text-[10px] uppercase">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-display text-foreground mb-1">{project.name}</h3>
                      <p className="text-xs font-mono font-semibold text-primary mb-3">{project.tagline}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono bg-muted/60 text-muted-foreground border border-border px-2.5 py-0.5 rounded-full">
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
                            className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground font-semibold transition-colors"
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
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1440px]">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-14 text-center">
              <div className="teal-badge mb-3">
                04 / Credentials
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                My <span className="text-gradient">Certificates</span>
              </h2>
              <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto" />
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className="clean-card clean-card-hover p-5 flex flex-col justify-between overflow-hidden cursor-pointer group space-y-4"
                >
                  <div className="relative w-full aspect-video overflow-hidden border border-border rounded-xl bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                      <span className="text-xs font-bold text-white bg-card/90 text-foreground px-3 py-1.5 rounded-full border border-border shadow-xs">
                        Click to View Certificate
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-foreground line-clamp-2">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mt-1">{cert.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono bg-muted/60 text-muted-foreground border border-border px-2.5 py-0.5 rounded-full">
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

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-up">
          <div
            className="relative w-full max-w-4xl clean-card p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <h3 className="text-lg sm:text-xl font-bold font-display text-foreground line-clamp-1">
                {selectedCert.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-muted border border-border text-foreground flex items-center justify-center font-bold cursor-pointer hover:bg-muted/80"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              <div className="w-full border border-border rounded-xl bg-black overflow-hidden">
                <img src={selectedCert.image} alt={selectedCert.name} className="w-full h-auto object-contain mx-auto" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{selectedCert.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCert.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 bg-muted border border-border rounded-full">
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
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-[1440px]">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="teal-badge mb-3">
                05 / Contact
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto" />
              <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-xl mx-auto">
                Have a project in mind or looking for a Web2 & Web3 developer? Let&apos;s build something exceptional together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="clean-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-semibold uppercase text-muted-foreground">Email</h3>
                      <p className="text-base font-bold text-foreground">dickyramadhan0x7@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="clean-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-semibold uppercase text-muted-foreground">Location</h3>
                      <p className="text-base font-bold text-foreground">Indonesia / Remote Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="clean-card p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Available for freelance projects, full-stack web app development, smart contract auditing/integration, and full-time positions. Response time is within 24 hours.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form
                action="https://formsubmit.co/dickyramadhan0x7@gmail.com"
                method="POST"
                onSubmit={handleContactSubmit}
                className="clean-card p-6 sm:p-8 space-y-5"
              >
                <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

                {formError && (
                  <div className="p-3 bg-destructive/10 border border-destructive/30 text-destructive rounded-2xl font-mono text-xs">
                    {formError}
                  </div>
                )}

                {formSuccess && (
                  <div className="p-3 bg-primary/10 border border-primary/30 text-primary rounded-2xl font-mono text-xs flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Message prepared! Submitting form...
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    minLength={2}
                    maxLength={80}
                    className="w-full h-11 border border-border rounded-xl bg-background/60 px-4 text-sm font-normal text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    maxLength={120}
                    className="w-full h-11 border border-border rounded-xl bg-background/60 px-4 text-sm font-normal text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your project details or message here..."
                    required
                    minLength={15}
                    rows={4}
                    className="w-full border border-border rounded-xl bg-background/60 p-4 text-sm font-normal text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
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
