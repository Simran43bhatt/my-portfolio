
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "../hooks/use-toast";
import { loginEvent, trackEvent } from "@/lib/analytics";
import { AnalyticsEvent } from "@/lib/analytics/events";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.phone.trim()) {
      toast({
        title: "Phone Required",
        description: "Please enter your phone number to continue.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate phone format (basic validation for Indian numbers)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }
    
    await loginEvent({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    });

    await trackEvent(AnalyticsEvent.FORM_SUBMITTED, {
      subject: formData.subject,
      message: formData.message,
    });
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleInputFocus = (fieldName: string) => {
    trackEvent(AnalyticsEvent.FORM_INPUT_FIELD_FOCUSED, {
      fieldName,
      timestamp: new Date().toISOString(),
    });
  };

  const handleLinkClick = (linkType: string, url: string) => {
    trackEvent(AnalyticsEvent.CLICKED_LINK, {
      link: url,
      linkType: 'externalRedirect',
      section: 'contact',
    });
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "simran.43bhatt@gmail.com",
      link: "mailto:simran.43bhatt@gmail.com",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6230560983",
      link: "tel:6230560983",
      gradient: "from-secondary to-accent"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Chandigarh, India",
      link: "#",
      gradient: "from-accent to-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://linkedin.com/in/simran-bhatt-940ba3256/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/Simran43bhatt",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a passionate developer, need consultation on 
                growth strategies, or want to collaborate on innovative projects, I'm here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="group hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r from-card to-muted/20"
                  onClick={() => info.link !== '#' && handleLinkClick(info.title.toLowerCase(), info.link)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${info.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.title}
                    variant="outline"
                    size="sm"
                    className="hover:scale-110 transition-transform duration-300"
                    onClick={() => handleLinkClick(social.title.toLowerCase(), social.link)}
                  >
                    <social.icon className={`w-4 h-4 ${social.color}`} />
                    {social.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-scale-in bg-card/50 backdrop-blur-sm border-0 shadow-card" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('name')}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus('email')}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('phone')}
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('subject')}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus('message')}
                    rows={5}
                    className="transition-all duration-300 focus:scale-105 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;