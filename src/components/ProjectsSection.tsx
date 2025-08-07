
import { ExternalLink, Github, Activity, BarChart3, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { trackEvent } from "@/lib/analytics";
import { AnalyticsEvent } from "@/lib/analytics/events";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Event Tracker - Scalable Event Tracking System",
      description: "Built a high-throughput event logging system using Node.js, Express, TypeScript, and Prisma, capable of handling large volumes of real-time data.",
      icon: Activity,
      features: [
        "Queue-based architecture using Redis and BullMQ",
        "Background workers and API endpoints",
        "Schema validation with Zod",
        "File-based logging with Winston",
        "CI/CD workflows for production deployment"
      ],
      technologies: ["Node.js", "Express", "TypeScript", "Prisma", "Redis", "BullMQ", "PostgreSQL", "Zod", "Winston"],
      link: "https://eventtracker-production-8b08.up.railway.app/",
      github: "https://github.com/Simran43bhatt/eventTracker",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Automated Growth Dashboard",
      description: "Built an automated Google Sheets dashboard to track CPL, CPJ, retargeting sales, and ROI—empowering data-driven decisions across marketing funnels.",
      icon: BarChart3,
      features: [
        "Real-time data tracking and visualization",
        "Automated ROI calculations",
        "Customer journey mapping",
        "Behavioral segmentation analysis",
        "Performance metrics monitoring"
      ],
      technologies: ["Google Sheets API", "JavaScript", "Data Analytics", "Marketing Automation"],
      gradient: "from-secondary to-accent"
    },
    {
      title: "Community Growth Strategy",
      description: "Owned full-funnel growth for a bootcamp community, scaling CTP from 2% to 9% via pricing revamp, customer segmentation, and urgency campaigns.",
      icon: Users,
      features: [
        "Customer segmentation strategies",
        "Pricing optimization",
        "Urgency campaign implementation",
        "Curriculum alignment through competitive analysis",
        "YouTube-led signups growth"
      ],
      technologies: ["Growth Strategy", "Customer Analytics", "SEO", "VidIQ", "Content Strategy"],
      gradient: "from-accent to-primary"
    }
  ];

  const handleProjectLinkClick = (projectTitle: string, linkType: 'demo' | 'github', url: string) => {
    trackEvent(AnalyticsEvent.CLICKED_LINK, {
      link: url,
      linkType: 'externalRedirect',
      section: 'projects',
    });
    
    window.open(url, '_blank');
  };

  const handleWorkTogetherClick = () => {
    trackEvent(AnalyticsEvent.CLICKED_LINK, {
      link: '#contact',
      linkType: 'sectionRedirect',
      section: 'projects',
    });
    
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions combining technical expertise
            with strategic business thinking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-intense transition-all duration-500 hover:scale-105 animate-scale-in bg-card/50 backdrop-blur-sm border-0 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button 
                        onClick={() => handleProjectLinkClick(project.title, 'demo', project.link!)}
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 hover:bg-primary/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        onClick={() => handleProjectLinkClick(project.title, 'github', project.github!)}
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 hover:bg-primary/10"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on something amazing?
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={handleWorkTogetherClick}
          >
            Let's Work Together
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;