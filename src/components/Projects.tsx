import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Users, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Real-Time Collaboration Platform",
      status: "Hackathon Winner",
      description: "Engineered distributed system supporting 100+ concurrent users with sub-100ms synchronization using WebSockets and microservices. Integrated OpenAI API for intelligent code suggestions in VS Code-style collaborative environment.",
      achievements: [
        "Sub-100ms synchronization for 100+ concurrent users",
        "VS Code-style collaborative environment", 
        "OpenAI API integration for intelligent suggestions",
        "Distributed system architecture"
      ],
      technologies: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "WebSockets", "Microservices"],
      type: "Full-Stack Development",
      icon: <Users className="h-6 w-6" />,
      award: "Hackathon Winner"
    },
    {
      title: "Distributed Fake News Detection System",
      status: "Top 100/5,611 Teams",
      description: "Built NLP-powered system analyzing 100,000+ news articles in real-time with parallel processing algorithms. Achieved 77% accuracy in news authenticity classification using advanced sentiment analysis and entity recognition.",
      achievements: [
        "Real-time analysis of 100,000+ news articles",
        "77% accuracy in authenticity classification",
        "Advanced sentiment analysis implementation",
        "Parallel processing optimization"
      ],
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "Docker", "NLP"],
      type: "Machine Learning",
      icon: <BarChart3 className="h-6 w-6" />,
      award: "TruthTell Hackathon at WAVES '25"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Award-winning projects showcasing expertise in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card border-border hover-lift shadow-medium h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {project.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-heading text-primary leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-background/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover-lift"
                      onClick={() => window.open('https://github.com/esss-28', '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover-lift"
                      onClick={() => window.open('https://github.com/esss-28', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                </div>

                {project.award && (
                  <div className="bg-accent/30 border border-accent rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Trophy className="h-4 w-4 text-primary" />
                      {project.award}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover-lift"
            onClick={() => window.open('https://github.com/esss-28', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;