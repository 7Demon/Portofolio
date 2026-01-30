import { Button } from './ui/button';
import { ArrowDown, Github, Twitter, Linkedin } from 'lucide-react';
const Home = () => {
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            {/* Status badge */}
            <div className="animate-fade-up opacity-0 delay-100">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for Web3 Projects</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 delay-200">
              <span className="text-foreground">Building the</span>
              <br />
              <span className="text-gradient neon-glow">Decentralized</span>
              <br />
              <span className="text-foreground">Future</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10 animate-fade-up opacity-0 delay-300">
              Full-stack blockchain developer specializing in smart contracts, <br />
              DeFi protocols, and immersive Web3 experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 md:mb-12 animate-fade-up opacity-0 delay-400">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:blur-md transition duration-500 animate-pulse" />
                <Button variant="neon" size="lg" className="relative hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="relative">View Projects</span>
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
                  className="w-12 h-12 glass-card-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
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
  )
    
}
export default Home;