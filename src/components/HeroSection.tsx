
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-primary-glow/25 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="inline-block animate-fade-in-left" style={{ animationDelay: '0.2s' }}>Hi, I'm{" "}</span>
              <span className="bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent animate-bounce-in bg-[length:200%_100%] animate-gradient-shift" style={{ animationDelay: '0.5s' }}>
                Simran
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-white/90 animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
              Computer Science Engineer
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
              Business Strategy & Community Management Professional with expertise in 
              full-stack development, event tracking systems, and data-driven growth strategies.
            </p>
            
            {/* Contact links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: '1.2s' }}
                asChild
              >
                <a href="https://linkedin.com/in/simran-bhatt-940ba3256/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: '1.4s' }}
                asChild
              >
                <a href="https://github.com/Simran43bhatt" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: '1.6s' }}
                asChild
              >
                <a href="mailto:simran.43bhatt@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: '1.8s' }}
                asChild
              >
                <a href="tel:6230560983">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-glow hover:shadow-intense transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: '2s' }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ExternalLink className="w-4 h-4 ml-2 animate-wiggle" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: '2.2s' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse-glow group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full blur-xl opacity-30 animate-gradient-shift"></div>
              <img
                src="/lovable-uploads/8de8cfcd-b928-46a7-81b3-77d806137180.png"
                alt="Simran Bhatt"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-intense border-4 border-white/20 backdrop-blur-sm hover:scale-110 hover:rotate-2 transition-all duration-500 animate-scale-in group-hover:border-white/40"
                style={{ objectPosition: 'center 20%', animationDelay: '1s' }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;