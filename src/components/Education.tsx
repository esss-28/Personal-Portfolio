import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = {
    institution: "Mukesh Patel School of Technology Management and Engineering (NMIMS)",
    location: "Mumbai, India",
    degree: "Bachelor of Technology in Artificial Intelligence",
    period: "July 2024 - June 2028",
    cgpa: "91.07%",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems", 
      "Computer Architecture",
      "Machine Learning",
      "Database Management Systems",
      "Signal and Image Processing",
      "Intelligent Systems",
      "Statistical Methods",
      "Discrete Mathematics",
      "Random Processing and Estimation Techniques"
    ]
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pursuing excellence in Artificial Intelligence with a strong academic foundation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-border shadow-large hover-lift">
            <CardHeader className="pb-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <CardTitle className="text-2xl lg:text-3xl font-heading text-primary">
                    {education.degree}
                  </CardTitle>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground">
                      {education.institution}
                    </p>
                    <p className="text-muted-foreground font-medium">
                      {education.location}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{education.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        CGPA: {education.cgpa}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  Relevant Coursework
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.coursework.map((course, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:bg-accent/50 transition-smooth"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-medium">Academic Excellence</span>
                  </div>
                  <p className="text-muted-foreground">
                    Consistently maintaining high academic performance while actively engaging in 
                    research and practical projects in AI and machine learning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;