import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      title: "Libraries",
      icon: "📚",
      skills: [
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
        { name: "Seaborn", icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "MS Office", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_Office_logo_%282019%E2%80%93present%29.svg" },
        { name: "Google Colab", icon: "https://colab.research.google.com/img/colab_favicon_256px.png" },
        { name: "Power BI Desktop", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "SAP ABAP Editor", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="glass-card p-8 border-glass-border animate-slide-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
                "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
                "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              ].map((icon, index) => (
                <div
                  key={index}
                  className="glass-card px-6 py-3 rounded-full hover:scale-110 transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 1}s` }}
                >
                  <img src={icon} alt="tech-icon" className="w-8 h-8 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
