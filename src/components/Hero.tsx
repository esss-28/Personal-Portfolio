import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import headshot from "@/assets/headshot.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary leading-tight">
                Seher
                <span className="block text-muted-foreground">Siddiqui</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                AI & Software Engineering Student
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Passionate about building intelligent systems that solve real-world problems. 
                Currently pursuing BTech in Artificial Intelligence with hands-on experience in 
                machine learning research and full-stack development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="hover-lift text-lg px-8 py-3"
                onClick={scrollToContact}
              >
                Let's Work Together
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift text-lg px-8 py-3"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a 
                href="mailto:sehersiddiqui2812@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-accent transition-smooth hover-lift shadow-soft"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 text-muted-foreground" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/seher-siddiqui-76041b234/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-smooth hover-lift shadow-soft"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground" />
              </a>
              
              <a 
                href="https://github.com/esss-28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-smooth hover-lift shadow-soft"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Professional Headshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full gradient-card shadow-large border-8 border-background overflow-hidden">
                <img 
                  src={headshot} 
                  alt="Seher Siddiqui - Professional Headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-muted-foreground">
          <ArrowDown className="h-6 w-6" />
          <span className="text-sm mt-2">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;