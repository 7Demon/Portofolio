import { Button } from './ui/Button';
import { ArrowDown, Github, Twitter, Linkedin, Mail, MapPin, Send, Heart } from 'lucide-react';
import { createElement, useEffect } from 'react';


const projects = [
  {
    title: 'Project 1',
    image: '/project1.png',
    titleWeb: "Website Blockchain-Based Diploma Verification",
    description: 'UMSChain is a web-based decentralized application (dApp) designed to manage the lifecycle of digital certificates, including issuance (minting), decentralized storage, and authenticity verification. The system leverages zkSync Era (Ethereum Layer-2) to ensure immutable and transparent certificate records, while certificate files are stored on IPFS via Pinata. Each certificate is represented as a unique ERC-721 NFT. The application is built using Solidity and Hardhat for smart contract development, zkSync Era for Layer-2 deployment, IPFS (Pinata) for decentralized storage, and React  with Ethers.js for the frontend and blockchain integration.',
    link: "https://umschain.vercel.app/"},
    {
      title: 'Project 2',
      image: '/project2.png',
      titleWeb: "News Website",
      description: 'A news web application built with PHP (Laravel) and MySQL, featuring article management, category organization, user authentication, and an MVC-based architecture for structured and maintainable development.',
      link:"https://github.com/7Demon/web_news"},
    {
      title: 'Project 3',
      image: '/project3.png',
      titleWeb: "Mobile Application to do list and manage tasks",
      description: 'A mobile task management application built with Java in Android Studio, using SQLite for local data storage. The app supports task creation, updates, deletion, and offline data persistence through CRUD implementation.',
      link:"https://github.com/7Demon/capstone"},
];
const Home = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollbar-slot');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const cards = scrollContainer.querySelectorAll('.skill-card');
      const containerRect = scrollContainer.getBoundingClientRect();
      const containerCenter = containerRect.height / 2 + containerRect.top;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        const maxDistance = containerRect.height / 2;
        const ratio = Math.max(0, 1 - distance / maxDistance);

        // Scale dan opacity based on distance from center
        const scale = 0.8 + ratio * 0.3;
        const opacity = 0.4 + ratio * 0.6;
        const brightness = 1 + ratio * 0.3;
        const glow = ratio * 20;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = opacity;
        card.style.filter = `brightness(${brightness}) drop-shadow(0 0 ${glow}px hsl(175 80% 50% / ${ratio * 0.8}))`;
        
        // Highlight center item
        if (ratio > 0.9) {
          card.parentElement.classList.add('center-item');
        } else {
          card.parentElement.classList.remove('center-item');
        }
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <>
    {/* hero section*/}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-30 lg:px-40 py-24 md:py-28 lg:py-30 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Status badge */}
            <div className="animate-fade-up opacity-0 delay-100">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for Web2 and Web3 Projects</span>
              </div>
            </div>
            {/* Engineering the Future of Web2 & Web3 */}
            {/* Main heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up opacity-0 delay-200">
              <span className="text-foreground">Engineering the</span>
              <br />
              <span className="text-gradient neon-glow">Future of Web2 & Web3</span>
              {/* <br />
              <span className="text-foreground">Future</span> */}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 animate-fade-up opacity-0 delay-300">
              Full-stack developer building Web2 and Web3 applications,
              <span className="hidden sm:inline"><br /></span>
              {' '}including smart contract integration and decentralized features.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10 md:mb-12 animate-fade-up opacity-0 delay-400">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:blur-md transition duration-500 animate-pulse" />
                <Button variant="neon" size="lg" className="relative hover:scale-105 transition-transform duration-300 shadow-lg">
                  <a href="#projects"><span className="relative">View Projects</span></a>
                </Button>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0 delay-500">
              {[
                { icon: Github, href: 'https://github.com/7Demon' },
                { icon: Twitter, href: 'https://x.com/oppp354' },
                { icon: Linkedin, href: '#' },
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

          {/* Right Hero Placeholder */}
          <div className="relative h-75 sm:h-90 md:h-105 lg:h-125 animate-fade-up opacity-0 delay-300">
            {/* Background gradient orb */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-3xl animate-pulse" />
            
            {/* Main placeholder box with animation */}
            <div className="absolute inset-0 rounded-3xl border border-primary/20 overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 backdrop-blur-sm" />
              
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-clip-padding animate-spin" style={{
                borderImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6) 1',
                animationDuration: '8s'
              }} />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                <div className="relative">
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse w-24 h-24 sm:w-30 sm:h-30" />
                  
                  {/* Icon placeholder with rotation */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center animate-bounce" style={{
                    animationDuration: '2s'
                  }}>
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-spin" style={{animationDuration: '3s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
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
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 md:mb-16 text-center animate-fade-up opacity-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">About</span>
              <span className="text-gradient neon-glow ml-2">Me</span>
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left - Text Content */}
            <div className="space-y-6 animate-fade-up opacity-0 delay-200">
              <p className="text-muted-foreground text-left md:text-justify md:text-lg leading-relaxed">
                I'm a full-stack developer working across Web2 and Web3 environments, with experience building web applications and integrating blockchain technologies. My interest in software development gradually expanded into exploring decentralized systems and smart contracts.
              </p>
              
              <p className="text-muted-foreground text-left md:text-justify md:text-lg leading-relaxed">
                I focus on developing efficient, maintainable, and user-friendly applications. My work includes building modern web platforms, implementing backend systems, and integrating blockchain features where needed.
              </p>

              <p className="text-muted-foreground text-left md:text-justify md:text-lg leading-relaxed">
                Outside of development, I enjoy exploring emerging technologies, and continuously improving my technical skills.
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
                        title: 'Backend', 
                        skills: 'Node.js, Python, PHP (Laravel)' 
                      },
                      { 
                        title: 'Frontend', 
                        skills: 'React, Tailwind CSS, Bootstrap' 
                      },
                      { 
                        title: 'Blockchain', 
                        skills: 'Solidity, Hardhat, Ethers.js' 
                      },
                      { 
                        title: 'Tools', 
                        skills: 'Git, WordPress, SAP' 
                      }].map((skill, index) => (
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

    {/* project section */}
    <section id="projects" className='relative py-20 md:py-28 overflow-hidden '>
        <div className='container mx-auto px-4 md:px-6'>
            <div className='content-center mx-auto'>
                    {/* title */}
                    <div className='text-center mb-12 md:mb-16 animate-fade-up opacity-0'>
                        <h2 className="text-3xl md:text-4xl font-bold text-linear neon-glow">PROJECTS</h2>
                    </div>
                    {/* content */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-fade-up opacity-0 delay-200 mx-auto max-w-6xl px-0 sm:px-4'>
                      {projects.map((project) => 
                      (<div key={project.title} className='flex flex-col justify-center items-center gap-4 sm:gap-5'> <a href={project.link} target="_blank" rel="noopener noreferrer" className='block w-full max-w-lg'>
                        <div className='group relative w-full aspect-video rounded-xl border border-white/20 overflow-hidden hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 shadow-lg bg-black/30'>
                          <img src={project.image} alt={project.title} className='w-full h-full object-contain block'/>
                          <div className='absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                            <div className='p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-300'>
                              <p className='text-xs sm:text-sm text-white text-left sm:text-justify max-h-28 sm:max-h-40 overflow-y-auto pr-1'>{project.description}</p>
                            </div>
                          </div>
                        </div></a>
                        <div className='px-1 sm:px-2'>
                              <h3 className='text-base sm:text-lg text-center font-bold text-foreground mb-2'>{project.titleWeb}</h3>
                        </div>
                      </div>))}
                    </div>
            </div>
        </div>
    </section>

    {/* contact section */}
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up opacity-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient neon-glow">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Have a project in mind? Let&apos;s build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-up opacity-0 delay-200">
            <div className="space-y-5">
              <div className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/60 transition-colors">
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

              <div className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/60 transition-colors">
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

              <div className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m currently open for freelance projects, full-time positions, and collaborations in the Web3 space.
                  Response time is usually within 24 hours.
                </p>
              </div>
            </div>

            <form action= "https://formsubmit.co/dickyramadhan0x7@gmail.com" method="POST" className="rounded-2xl border border-primary/35 bg-background/40 backdrop-blur-sm p-5 sm:p-6 md:p-7 space-y-5">
              <input type="hidden" name="_subject" value="New Message From Website" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm text-foreground/90">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name='name'
                  placeholder="Your name"
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
                  className="w-full h-11 rounded-xl border border-primary/20 bg-muted/30 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm text-foreground/90">Message</label>
                <textarea
                  id="contact-message"
                  name='massage'
                  rows={3}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-primary/20 bg-muted/30 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>

              <Button variant="neon" size="lg" type="submit" className="w-full cursor-pointer hover:bg-emerald-500 transition-colors duration-300">
                <span className="inline-flex items-center gap-2">
                  <Send size={16} />
                  Send Message
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
    <footer className="border-t border-primary/20 py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <a href="#" className="text-2xl font-bold text-gradient neon-glow">
            DEV.FOLIO
          </a>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built with
            <Heart size={14} className="text-primary" />
            using React &amp; Web3
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/7Demon' },
              { icon: Twitter, href: 'https://x.com/oppp354' },
              { icon: Linkedin, href: '#' },
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
