import { Card } from "@/components/ui/card";
import { Database, BarChart3, Code } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Data Analytics Enthusiast",
      description:
        "Passionate about analyzing data, finding insights, and applying machine learning techniques."
    },
    {
      icon: <Code className="w-8 h-8 text-secondary" />,
      title: "Web Developer",
      description:
        "Skilled in React, Node.js, and modern web technologies to create functional and user-friendly applications."
    },
    {
      icon: <Database className="w-8 h-8 text-success" />,
      title: "Problem Solver",
      description:
        "Focused on building efficient solutions by combining logical thinking with technical expertise."
    }
  ];

  return (
    <section id="about" className="py-32 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Data analytics and web development enthusiast, passionate about creating impactful digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="glass-card p-8 animate-slide-in">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm Gourav Acharjee, a B.Tech Computer Science Engineering student at Narula Institute of Technology.
                  My interest in technology began with curiosity about how data and applications work, which led me into
                  web development and data analytics.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I have worked on projects like a Library Management System and my own portfolio website,
                  applying React, Node.js, SQL, and analytical skills. I enjoy learning new tools and technologies
                  to improve my skills.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Outside of coding, I explore machine learning concepts, practice problem-solving, and prepare
                  for upcoming placement opportunities.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="glass-card p-6 animate-slide-in border-glass-border"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="flex-shrink-0 p-3 rounded-xl"
                      style={{ background: "var(--gradient-glass)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              Education
            </h3>
            <div className="space-y-6">
              {[
                {
                  degree: "B.Tech in Computer Science Engineering",
                  institution: "Narula Institute of Technology",
                  scoreLabel: "CGPA (6th Sem):",
                  scoreValue: "7.51"
                },
                {
                  degree: "Higher Secondary (Pure Science Domain)",
                  institution: "New Barrackpore Colony Boys High School",
                  scoreLabel: "Percentage:",
                  scoreValue: "77.33%"
                },
                {
                  degree: "Secondary",
                  institution: "New Barrackpore Colony Boys High School",
                  scoreLabel: "Percentage:",
                  scoreValue: "84.14%"
                }
              ].map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 animate-slide-in border-glass-border"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-muted-foreground">
                        {edu.scoreLabel}
                      </span>
                      <div className="px-4 py-2 bg-background/50 border border-glass-border rounded-lg min-w-[100px] text-center text-foreground">
                        {edu.scoreValue}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8">
            {[
              { number: "3", label: "Projects Completed" },
              { number: "10+", label: "Technologies Learned" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glass-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
