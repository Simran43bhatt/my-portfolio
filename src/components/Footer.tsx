import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-hero text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo/Name */}
          <div className="text-3xl font-bold">
            Simran Bhatt
          </div>

          {/* Tagline */}
          <p className="text-white/80 max-w-md leading-relaxed">
            Crafting digital experiences with passion, precision, and purpose.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary-glow transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary-glow transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary-glow transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Scroll to top button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/20 w-full">
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              © 2025 Simran Bhatt. Made with 
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;