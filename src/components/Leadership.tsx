import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, GraduationCap, Target, Award } from "lucide-react";

const Leadership = () => {
  const leadership = [
    {
      title: "Stanford University Code in Place 5",
      position: "Section Leader Mentor",
      rank: "Student Teacher of the 2nd highest position",
      description: "Selected from 2,000+ global applicants to mentor students in Python programming fundamentals and algorithms",
      achievements: [
        "Selected from 2,000+ global applicants",
        "Mentored 15+ students in Python programming fundamentals and algorithms",
        "Conducted technical workshops on software engineering best practices",
        "Optimized curriculum delivery for enhanced learning outcomes"
      ],
      impact: "Global Recognition",
      icon: <GraduationCap className="h-6 w-6" />,
      type: "Academic Leadership"
    },
    {
      title: "Vidyalankar Polytechnic",
      position: "President – Technical Committee | Head Girl",
      rank: "Dual Leadership Role",
      description: "Led technical initiatives and overall student leadership responsibilities across the institution",
      achievements: [
        "Led 25+ students in organizing 5+ hackathons and workshops",
        "Organized events on ML, system design, and Linux infrastructure",
        "Participated in 5 hackathons and won 2 competitions",
        "Spearheaded technical events with 250+ participants",
        "Managed servers and networking systems for large-scale events"
      ],
      impact: "250+ Students Impacted",
      icon: <Users className="h-6 w-6" />,
      type: "Technical & Institutional Leadership"
    }
  ];

  const achievements = [
    {
      metric: "2,000+",
      label: "Global Applicants",
      description: "Selected from for Stanford Code in Place"
    },
    {
      metric: "250+",
      label: "Event Participants",
      description: "Students impacted through technical events"
    },
    {
      metric: "5+",
      label: "Hackathons Organized",
      description: "Technical workshops and competitions"
    },
    {
      metric: "15+",
      label: "Students Mentored",
      description: "In programming and algorithms"
    }
  ];

  return (
    <section id="leadership" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Leadership & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving technical excellence and mentoring the next generation of developers
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="space-y-8 max-w-5xl mx-auto mb-16">
          {leadership.map((role, index) => (
            <Card key={index} className="gradient-card border-border hover-lift shadow-medium">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      {role.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {role.rank}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-heading text-primary leading-tight">
                        {role.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-foreground">{role.position}</p>
                      <Badge variant="outline" className="w-fit">
                        {role.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 lg:text-right">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">{role.impact}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {role.description}
                </p>
              </CardHeader>

              <CardContent>
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    Key Achievements & Impact
                  </h4>
                  <ul className="space-y-3">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-center text-primary mb-8">
            Leadership Impact by the Numbers
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="gradient-card border-border hover-lift shadow-soft text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">
                      {achievement.metric}
                    </div>
                    <div className="font-semibold text-foreground">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-8 py-4 shadow-soft">
            <Award className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">
              Passionate about building technical communities and mentoring emerging talent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;