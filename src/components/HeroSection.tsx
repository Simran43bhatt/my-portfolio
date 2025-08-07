
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { trackEvent } from "@/lib/analytics";
import { AnalyticsEvent } from "@/lib/analytics/events";

const HeroSection = () => {
  const handleSocialLinkClick = (platform: string, url: string) => {
    trackEvent(AnalyticsEvent.CLICKED_LINK, {
      link: url,
      linkType: 'externalRedirect',
      section: 'hero',
    });
    window.open(url, '_blank');
  };

  const handleCTAClick = (sectionId: string) => {
    trackEvent(AnalyticsEvent.CLICKED_LINK, {
      link: `#${sectionId}`,
      linkType: 'sectionRedirect',
      section: 'hero',
    });
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center py-14 justify-center bg-gradient-hero relative overflow-hidden">
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
              <span className="text-white animate-bounce-in " style={{ animationDelay: '0.5s' }}>
                {" "}Simran
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
                onClick={() => handleSocialLinkClick('linkedin', 'https://linkedin.com/in/simran-bhatt-940ba3256/')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: '1.4s' }}
                onClick={() => handleSocialLinkClick('github', 'https://github.com/Simran43bhatt')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: '1.6s' }}
                onClick={() => handleSocialLinkClick('email', 'mailto:simran.43bhatt@gmail.com')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-scale-in"
                style={{ animationDelay: '1.8s' }}
                onClick={() => handleSocialLinkClick('phone', 'tel:6230560983')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-glow hover:shadow-intense transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: '2s' }}
                onClick={() => handleCTAClick('projects')}
              >
                View My Work
                <ExternalLink className="w-4 h-4 ml-2 animate-wiggle" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: '2.2s' }}
                onClick={() => handleCTAClick('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right side - Visual element or image placeholder */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right" style={{ animationDelay: '1.5s' }}>
            <div className="relative">
              {/* Placeholder for profile image or illustration */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-white/20 backdrop-blur-sm flex items-center justify-center">
                <img src="/simran.webp" alt="Profile" className="w-full z-20 h-full object-cover rounded-full" />
              </div>
              
              {/* Floating elements around the profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/40 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/40 rounded-full animate-float-slow"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;