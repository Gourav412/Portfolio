import { ArrowDown, Github, Linkedin, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 animate-float"
        style={{ background: 'var(--gradient-primary)' }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-10 animate-float"
        style={{ background: 'var(--gradient-glow)', animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glass-card glow-primary animate-glow">
                <img
                  src="/lovable-uploads/Profile_photo.jpg"
                  alt="Gourav Acharjee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </div>

          {/* Main heading */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Gourav Acharjee</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Machine Learning, Data Analytics & Web Development Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              CSE student with expertise in Python, Power BI, MongoDB, and modern web technologies.
              Passionate about clean code, data-driven solutions, and creating engaging digital experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-3 glow-primary"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 mb-16 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <a href="https://github.com/Gourav412" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <a href="https://www.linkedin.com/in/gourav-acharjee-b1a2b4247" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <a href="mailto:gouravacharjee11@email.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <a href="https://www.instagram.com/subho_4002/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <a href="https://www.facebook.com/profile.php?id=100073070555013" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <a href="https://x.com/subho_4002" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
