import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/analytics";
import { AnalyticsEvent } from "@/lib/analytics/events";

const Index = () => {
  useEffect(() => {
    // Event tracking - log page view
    console.log("Portfolio page viewed", {
      timestamp: new Date().toISOString(),
      page: "portfolio-home",
      userAgent: navigator.userAgent,
    });

    // Track scroll events
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );

      // Log significant scroll milestones
      if (scrollPercentage % 25 === 0 && scrollPercentage > 0) {
        console.log("Scroll milestone reached", {
          timestamp: new Date().toISOString(),
          scrollPercentage,
          action: "scroll_milestone",
        });
      }
    };

    // Track section visibility
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          console.log("Section viewed", {
            timestamp: new Date().toISOString(),
            section: sectionId,
            action: "section_view",
          });

          // Track specific section views
          switch (sectionId) {
            case 'about':
              trackEvent(AnalyticsEvent.VIEWED_ABOUT_SECTION);
              break;
            case 'projects':
              trackEvent(AnalyticsEvent.VIEWED_PROJECTS_SECTION);
              break;
            case 'contact':
              trackEvent(AnalyticsEvent.VIEWED_CONTACT_SECTION);
              break;
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    trackEvent(AnalyticsEvent.PAGE_VIEW);
  }, []);

  // Track link clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        const linkType = href?.startsWith('#') ? 'sectionRedirect' : 'externalRedirect';
        const section = href?.startsWith('#') ? href.substring(1) : undefined;
        
        if (href && href !== '#') {
          trackEvent(AnalyticsEvent.CLICKED_LINK, {
            link: href,
            linkType,
            section,
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
