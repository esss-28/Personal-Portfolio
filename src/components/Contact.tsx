import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "sehersiddiqui2812@gmail.com",
      href: "mailto:sehersiddiqui2812@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "seher-siddiqui-76041b234",
      href: "https://www.linkedin.com/in/seher-siddiqui-76041b234/",
      description: "Professional networking"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "esss-28",
      href: "https://github.com/esss-28",
      description: "Code repositories & projects"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 7208209576",
      href: "tel:+917208209576",
      description: "Available for calls"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm excited to discuss opportunities in AI research, software development, 
            and innovative technology projects. Let's connect and build something amazing!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="gradient-card border-border hover-lift shadow-soft">
                <CardContent className="p-6">
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      {method.icon}
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground font-medium break-all">
                        {method.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Card */}
          <Card className="gradient-card border-border shadow-large">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-heading text-primary mb-2">
                Ready to Start a Conversation?
              </CardTitle>
              <p className="text-muted-foreground">
                Whether you're looking for an intern, discussing research opportunities, 
                or want to collaborate on a project, I'd love to hear from you.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="hover-lift text-lg px-8"
                  asChild
                >
                  <a href="mailto:sehersiddiqui2812@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-lift text-lg px-8"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Location & Availability */}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
                  <div className="flex items-center gap-2 text-muted-foreground justify-center">
                    <MapPin className="h-4 w-4" />
                    <span>Mumbai, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Interest Areas */}
              <div className="bg-accent/20 border border-accent rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3 text-center">
                  I'm particularly interested in:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Machine Learning Research Positions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Full-Stack Development Roles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>AI/ML Project Collaborations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Open Source Contributions</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;