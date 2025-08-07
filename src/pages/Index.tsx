import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

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
          console.log("Section viewed", {
            timestamp: new Date().toISOString(),
            section: entry.target.id,
            action: "section_view",
          });
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
