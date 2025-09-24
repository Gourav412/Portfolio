import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Soft Computing Techniques",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "2025",
      status: "Active",
      description: "Learned fuzzy logic, neural networks, and genetic algorithms.",
      skills: ["Fuzzy Logic", "Neural Networks", "AI"],
      credentialId: "NPTEL-SoftComputing-2025",
      logo: "🧠",
      link: "https://drive.google.com/file/d/1J543jda1zFbHPnt8aORsJQXZgHt9AsE_/view?usp=sharing"
    },
    {
      title: "Learning the Basics of SAP BTP",
      issuer: "SAP University Alliances",
      date: "2025",
      status: "Active",
      description: "Understanding of SAP Business Technology Platform and cloud integration.",
      skills: ["SAP BTP", "Cloud Integration"],
      credentialId: "SAP-BTP-2025",
      logo: "☁️",
      link: "https://drive.google.com/file/d/1l_nYAY1Elk3LhFW9_11Htg4agiAEmBBv/view?usp=sharing"
    },
    {
      title: "Certification of Participation in S/4 Hana Development",
      issuer: "SAP University Alliances",
      date: "2025",
      status: "Active",
      description: "Participated in hands-on training on SAP S/4 Hana development.",
      skills: ["SAP S/4 Hana", "ERP Development"],
      credentialId: "SAP-HanaDev-2025",
      logo: "🏅",
      link: "https://drive.google.com/file/d/1xJ66EhtxAc7WT_HZmPKuXprrGgd6wFEo/view?usp=sharing"
    },
    {
      title: "MongoDB",
      issuer: "Ardent Software Technologies",
      date: "2025",
      status: "Active",
      description: "Gained expertise in MongoDB database design, queries, and aggregation.",
      skills: ["MongoDB", "Database Management", "NoSQL"],
      credentialId: "Ardent-MongoDB-2025",
      logo: "🗄️",
      link: "https://drive.google.com/file/d/1k1WGC8L8jIrKm4RwIIe5opjznFCooZHe/view?usp=sharing"
    },
    {
      title: "Internship Certificate in Power BI",
      issuer: "Globsyn Finishing School",
      date: "2024",
      status: "Active",
      description: "Internship in Power BI, Python, and Excel for business analytics and reporting.",
      skills: ["Python", "Power BI", "Excel"],
      credentialId: "Globsyn-PowerBI-2024",
      logo: "📊",
      link: "https://drive.google.com/file/d/1rFp9IH65YRucuVYO5OizDgSqwvZBvggE/view?usp=sharing"
    },
    {
      title: "An Introduction to Interactive Programming in Python (Part 1)",
      issuer: "Coursera",
      date: "2024",
      status: "Active",
      description: "Learned Python fundamentals and interactive application development.",
      skills: ["Python", "Programming", "Logic Building"],
      credentialId: "Coursera-PythonIntro-2024",
      logo: "🐍",
      link: "https://drive.google.com/file/d/1W19J89Jm_8NuNXiJ4ZGjF20hHz3mBbZD/view?usp=sharing"
    },
    {
      title: "Object-Oriented Data Structures in C++",
      issuer: "University of Illinois, Coursera",
      date: "2023",
      status: "Active",
      description: "Mastered data structures, algorithms, and C++ programming techniques.",
      skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      credentialId: "Coursera-OODS-2023",
      logo: "🏆",
      link: "https://drive.google.com/file/d/1azaOM4qZP30biY1F8jnEAy2vQTVm3szB/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-32 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Certifications</span> & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass-card p-8 border-glass-border animate-slide-in group hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => window.open(cert.link, "_blank")}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{cert.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <Badge
                    variant={cert.status === "Active" ? "default" : "secondary"}
                    className={cert.status === "Active" ? "bg-success text-white" : ""}
                  >
                    {cert.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                    <div className="mt-1">Issued: {cert.date}</div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.link, "_blank");
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="mt-20 glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Learning Journey
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-muted-foreground">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-muted-foreground">Skills Verified</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">170+</div>
                <div className="text-muted-foreground">Hours Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">6</div>
                <div className="text-muted-foreground">Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
