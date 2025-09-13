import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Wrench, Calendar } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      description: "5+ years combined experience",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "C++", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" }
      ]
    },
    {
      title: "Advanced Development",
      icon: <Wrench className="h-6 w-6" />,
      description: "Modern web & mobile technologies",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Android Development", level: "Intermediate" },
        { name: "React Native", level: "Intermediate" }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      description: "Research & practical implementation",
      skills: [
        { name: "TensorFlow", level: "Intermediate" },
        { name: "scikit-learn", level: "Advanced" },
        { name: "Natural Language Processing", level: "Intermediate" },
        { name: "Matplotlib", level: "Intermediate" },
        { name: "Numpy", level: "Advanced" }
      ]
    },
    {
      title: "Systems & Databases",
      icon: <Database className="h-6 w-6" />,
      description: "Backend infrastructure & data management",
      skills: [
        { name: "Unix/Linux", level: "Intermediate" },
        { name: "System Design", level: "Advanced" },
        { name: "Microservices", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" }
      ]
    }
  ];

  const tools = [
    "Git", "VS Code", "Jira", "Docker", "WebSockets", "REST APIs", 
    "GraphQL", "AWS", "Linux", "Agile", "CI/CD"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from AI research to production systems
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-border hover-lift shadow-soft">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-heading text-primary">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 hover:bg-accent/30 transition-smooth">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <Badge 
                        className={`${getLevelColor(skill.level)} text-xs`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-border shadow-medium">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-heading text-primary">
                    Tools & Technologies
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    Development tools and frameworks I work with regularly
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-background/50 hover:bg-accent/50 transition-smooth text-sm py-2 px-4"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Highlight */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-8 py-4 shadow-soft">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">
              5+ Years Combined Programming Experience
            </span>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Continuously Learning
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;