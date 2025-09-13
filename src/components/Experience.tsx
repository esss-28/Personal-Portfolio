import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company: "Netaji Subhash University of Technology",
      location: "Hybrid",
      period: "February 2025 - July 2025",
      type: "Research Internship",
      description: "American Society of Clinical Oncology 2025 Publication",
      achievements: [
        "Built ML prediction systems using Python and TensorFlow on 50GB+ clinical datasets, achieving 85% accuracy and 30% error reduction",
        "Applied NLP techniques to extract insights from unstructured medical data for precision oncology research",
        "Collaborated with a cross-functional team of 8 researchers and medical professionals on distributed data processing pipelines",
        "Selected from 7,500+ global submissions for presenting ML research on large-scale medical data analysis"
      ],
      technologies: ["Python", "TensorFlow", "NLP", "Medical Data Analysis", "Research"]
    },
    {
      title: "Software Development Intern",
      company: "Zentech Infotech Solutions",
      location: "Mumbai, India",
      period: "June 2024 - July 2024",
      type: "Development Internship",
      description: "Project – Tomato",
      achievements: [
        "Developed 3 scalable web applications using React.js and Node.js serving 1000+ concurrent users",
        "Implemented design patterns and database optimization reducing bugs by 25% and response time by 40%",
        "Deployed and debugged apps in Unix/Linux environments while collaborating with a 5-member agile team"
      ],
      technologies: ["React.js", "Node.js", "Unix/Linux", "Database Optimization", "Agile"],
      links: {
        github: "GitHub Repository"
      }
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through impactful internships in machine learning research and software development
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="gradient-card border-border hover-lift shadow-soft">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-heading text-primary">
                      {experience.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                      <span>{experience.company}</span>
                      {experience.links?.github && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    {experience.description && (
                      <p className="text-muted-foreground font-medium">{experience.description}</p>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2 lg:text-right">
                    <Badge variant="secondary" className="w-fit lg:ml-auto">
                      {experience.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm font-medium">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{experience.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-background/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;