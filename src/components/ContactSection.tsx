import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "gouravacharjee11@email.com",
      href: "mailto:gouravacharjee11@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 81004 65316",
      href: "tel:+918100465316"
    }
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      username: "gouravacharjee11@email.com",
      href: "mailto:gouravacharjee11@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      name: "Phone",
      username: "+91 81004 65316",
      href: "tel:+918100465316"
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com/Gourav412",
      username: "@Gourav412"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gourav-acharjee-b1a2b4247",
      username: "Gourav-Acharjee"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      href: "https://x.com/subho_4002",
      username: "@subh0_4002"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      href: "https://www.instagram.com/subho_4002/",
      username: "@subho_4002"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100073070555013",
      username: "Gourav Acharjee"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Information */}
            <div className="space-y-8 w-full max-w-lg">
              {/* Contact Info Cards */}
              {/*<div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass-card p-6 border-glass-border animate-slide-in group hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}>
                    <a href={info.href} className="flex items-center space-x-4" target="_blank" rel="noopener noreferrer">
                      <div className="flex-shrink-0 p-3 rounded-xl text-primary" 
                           style={{ background: 'var(--gradient-glass)' }}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>*/}

              {/* Social Media */}
              <Card className="glass-card p-6 border-glass-border animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a key={index} 
                       href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center space-x-3 p-3 rounded-lg hover:bg-glass transition-colors group">
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="glass-card p-6 border-glass-border animate-slide-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Available for Work</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting new projects and collaborations
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're a startup looking to build your first product, or an established company 
                wanting to modernize your digital presence, I'm here to help make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Schedule a Call
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View My Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;