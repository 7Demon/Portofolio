import { Button } from './ui/button';
import { ArrowDown, Github, Twitter, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Project 1',
    image: '../assets/project1.png',
    description: 'A web application built with React and Node.js.'},
    {
      title: 'Project 2',
      image: '../assets/project2.png',
      description: 'A mobile application built with React Native and Firebase.'}
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
      <div className="container mx-40 px-4 md:px-6 py-30 md:py-30 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            {/* Status badge */}
            <div className="animate-fade-up opacity-0 delay-100">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for Web2 and Web3 Projects</span>
              </div>
            </div>
            {/* Engineering the Future of Web2 & Web3 */}
            {/* Main heading */}
            <h1 className="font-display text-2xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up opacity-0 delay-200">
              <span className="text-foreground">Engineering the</span>
              <br />
              <span className="text-gradient neon-glow">Future of Web2 & Web3</span>
              {/* <br />
              <span className="text-foreground">Future</span> */}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mb-8 md:mb-10 animate-fade-up opacity-0 delay-300">
              Full-stack developer building Web2 and Web3 applications,<br />
               including smart contract integration and decentralized features.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 md:mb-12 animate-fade-up opacity-0 delay-400">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:blur-md transition duration-500 animate-pulse" />
                <Button variant="neon" size="lg" className="relative hover:scale-105 transition-transform duration-300 shadow-lg">
                  <a href="#projects"><span className="relative">View Projects</span></a>
                </Button>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-up opacity-0 delay-500">
              {[
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="border rounded-xl w-12 h-12 glass-card-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Hero Placeholder */}
          <div className="relative h-80 md:h-96 lg:h-125 animate-fade-up opacity-0 delay-300">
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
                  <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse" style={{
                    width: '120px',
                    height: '120px'
                  }} />
                  
                  {/* Icon placeholder with rotation */}
                  <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center animate-bounce" style={{
                    animationDuration: '2s'
                  }}>
                    <svg className="w-16 h-16 text-white animate-spin" style={{animationDuration: '3s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
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
              <p className="text-muted-foreground text-justify md:text-lg leading-relaxed">
                I'm a full-stack developer working across Web2 and Web3 environments, with experience building web applications and integrating blockchain technologies. My interest in software development gradually expanded into exploring decentralized systems and smart contracts.
              </p>
              
              <p className="text-muted-foreground text-justify md:text-lg leading-relaxed">
                I focus on developing efficient, maintainable, and user-friendly applications. My work includes building modern web platforms, implementing backend systems, and integrating blockchain features where needed.
              </p>

              <p className="text-muted-foreground text-justify md:text-lg leading-relaxed">
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
                <div className="h-96 overflow-y-auto snap-y snap-mandatory pt-32 pb-32 scrollbar-slot scroll-smooth relative">
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
                        className="snap-center shrink-0 h-32 px-9 py-3 flex items-center justify-center transition-all duration-500 ease-out transform"
                        style={{
                          scrollSnapAlign: 'center',
                          scrollSnapStop: 'always'
                        }}
                      >
                        <div className="skill-card w-full glass-card p-6 rounded-xl border border-primary/20 transition-all duration-500 hover:border-primary/50" 
                          data-skill-index={index}
                        >
                          <h3 className="text-foreground font-bold text-lg mb-2 transition-colors duration-500">
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
    <section id="projects" className='relative py-30 md:py-30 overflow-hidden '>
        <div className='container mx-auto px-4 md:px-6'>
            <div className='content-center mx-auto'>
                    {/* title */}
                    <div className='text-center mb-12 md:mb-16 animate-fade-up opacity-0'>
                        <h2 className="text-3xl font-bold text-linear neon-glow">PROJECTS</h2>
                    </div>
                    {/* content */}
                    <div className='grid lg:grid-cols-2 gap-5 grid-cols-1 animate-fade-up opacity-0 delay-200 mx-auto px-20'>
                      {projects.map((projects) => 
                      (<div className='flex flex-col justify-center items-center gap-5'>
                        <div className='flex md:w-xl h-80 border rounded-xl items-center justify-center'>
                          <img src={projects.image} alt={projects.title} />
                        </div>
                        <div>
                              <h3 className='text-lg font-bold text-foreground mb-2'>{projects.description}</h3>
                        </div>
                      </div>))}
                    </div>
            </div>
        </div>
    </section>
          </>)
}
export default Home;