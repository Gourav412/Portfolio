import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pegasus Store Sales Analysis",
      description:
        "A Power BI dashboard analyzing sales performance, profit trends, and regional performance for Pegasus Store, providing data-driven insights for business decisions.",
      image: "📊",
      technologies: ["Power BI", "DAX", "Power Query", "SQL", "Excel"],
      category: "Data Analysis",
      status: "Completed",
      links: {
        github: "https://github.com/Gourav412/Pegasus-Store-Sales-Analysis"
      }
    },
    {
      title: "Amazon Sales Analysis",
      description:
        "A Power BI dashboard analyzing Amazon's sales performance, product category trends, and customer purchase patterns for data-driven business strategies.",
      image: "📦",
      technologies: ["Power BI", "DAX", "Power Query", "SQL", "Excel"],
      category: "Data Analysis",
      status: "Completed",
      links: {
        github: "https://github.com/Gourav412/Sales-Performance-Dashboard-PowerBI"
      }
    }
  ];

  const categories = ["All"];

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my Power BI projects showcasing real-world business insights
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="default"
                className="bg-primary text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-card border-glass-border group hover:scale-105 transition-all duration-500 animate-slide-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div
                  className="h-48 flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ background: "var(--gradient-glass)" }}
                >
                  {project.image}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🔗</div>
                      <span className="text-white font-medium">View Project</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={
                        project.status === "Completed" ? "bg-success text-white" : ""
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-center">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-glass-border hover:bg-primary/10"
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Interested in Collaborating?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground glow-primary">
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
