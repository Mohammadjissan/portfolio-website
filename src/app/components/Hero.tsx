import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Hi, I'm <span className="text-primary">Mohammadjissan Kharadi</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Full Stack MERN Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I build scalable web applications and real-time systems using MongoDB, Express.js, React.js, and Node.js. I have hands-on experience delivering REST APIs, secure authentication, and end-to-end solutions, along with a B.Sc. in Information and Technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* PRIMARY - solid, main action (portfolio's core goal) */}
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>

            {/* SECONDARY - outline, lower visual weight than primary */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/mohammadjissan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mohammadjissan-kharadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mohammadjissankharadi@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}