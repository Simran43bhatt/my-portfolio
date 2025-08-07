
import { GraduationCap, Award, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science Engineering student with hands-on experience in 
            business strategy, community management, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Education Card */}
          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-primary rounded-full mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-primary">Punjab Engineering College</h4>
                <p className="text-sm text-muted-foreground">B.Tech - Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground">CGPA: 7.40 | Nov 2022 - June 2026</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary">St. Mary's Convent School</h4>
                <p className="text-sm text-muted-foreground">Senior Secondary (12th) - 95%</p>
                <p className="text-sm text-muted-foreground">Kasauli, HP | Mar 2021</p>
              </div>
            </div>
          </Card>

          {/* Experience Card */}
          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-to-br from-secondary/5 to-accent/5" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-secondary rounded-full mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div>
              <h4 className="font-semibold text-secondary">Business Strategy & Community Management Intern</h4>
              <p className="text-sm text-muted-foreground mb-2">The Future University | Jan 2025 - June 2025</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Scaled CTP from 2% to 9% via pricing revamp</li>
                <li>• Built automated Google Sheets dashboard</li>
                <li>• Developed custom event tracking system</li>
              </ul>
            </div>
          </Card>

          {/* Achievements Card */}
          <Card className="p-6 hover:shadow-card transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-to-br from-accent/5 to-primary/5" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-accent rounded-full mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-accent">Miss PEC Fest 2023</h4>
                <p className="text-sm text-muted-foreground">Second Runner-up</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Glitteratti 2023</h4>
                <p className="text-sm text-muted-foreground">Captivating Performance</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary">Leadership Roles</h4>
                <p className="text-sm text-muted-foreground">EIC Member & Orientation Committee Joint Head</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['C++', 'JavaScript', 'SQL', 'Python'].map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-secondary">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express.js', 'Tailwind CSS'].map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-secondary hover:text-white transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-accent">Data Science</h4>
              <div className="flex flex-wrap gap-2">
                {['Numpy', 'Pandas', 'Matplotlib', 'Prisma'].map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-accent hover:text-white transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'Excel', 'Redis', 'BullMQ'].map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;