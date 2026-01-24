import { Button } from './ui/button';
import { ArrowDown, Github, Twitter, Linkedin } from 'lucide-react';
const Home = () => {
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-up opacity-0 delay-100">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for Web3 Projects</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 delay-200">
            <span className="text-foreground">Building the</span>
            <br />
            <span className="text-gradient neon-glow">Decentralized</span>
            <br />
            <span className="text-foreground">Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-300">
            Full-stack blockchain developer specializing in smart contracts, 
            DeFi protocols, and immersive Web3 experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 delay-400">
            <Button variant="neon" size="lg">
              <span>View Projects</span>
            </Button>
            <Button variant="glass" size="lg">
              Download Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 delay-500">
            {[
              { icon: Github, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-12 h-12 glass-card-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
    
}
export default Home;