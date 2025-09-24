import { Github, Linkedin, Mail, Heart, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-glass-border" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">Gourav Acharjee</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                CSE student passionate about <strong>Machine Learning</strong>, <strong>Data Analytics</strong>, 
                and <strong>Full Stack Development</strong>. Skilled in Python, Power BI, MongoDB, and modern web technologies.  
                Always eager to learn and build impactful digital solutions.
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <a href="https://github.com/Gourav412" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <a href="https://www.linkedin.com/in/gourav-acharjee-b1a2b4247" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <a href="mailto:gouravacharjee11@email.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <a href="https://www.instagram.com/subho_4002/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <a href="https://www.facebook.com/profile.php?id=100073070555013" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <a href="https://x.com/subho_4002" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Expertise</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Machine Learning & Data Analytics</li>
                <li>Full Stack Web Development</li>
                <li>Power BI Dashboards</li>
                <li>Database Management (MongoDB, SQL)</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-glass-border text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-muted-foreground mb-4 md:mb-0">
                © {currentYear} Gourav Acharjee. All rights reserved.
              </p>
              <div className="flex items-center text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 mx-2 text-red-500" />
                <span>using React, Tailwind CSS & Passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
