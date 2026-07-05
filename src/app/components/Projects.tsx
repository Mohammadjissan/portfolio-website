import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
  {
    title: 'Real-Time Chat App (MERN Stack)',
    description:
      'Developed a scalable real-time application with Socket.IO-based communication, JWT and bcrypt authentication, and RESTful APIs for messaging, user management, and chat history.',
    image: '/images/chatty.png',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'],
    githubUrl: 'https://github.com/Mohammadjissan/fullstack-chat-app.git',
    liveUrl: 'https://fullstack-chat-app-wksk.onrender.com/',
    featured: true
  },
    {
      title: 'MindMate AI',
      description:
        'Built an AI-powered mental wellness platform with secure backend APIs, audio preprocessing and feature extraction, and a responsive React.js frontend for speech-based interaction.',
      image: '/images/mindmate.png',
      technologies: ['Node.js', 'React.js', 'AI/ML', 'Audio Processing'],
      githubUrl: 'https://github.com/Mohammadjissan/MindMate-AI---AI-Powered-Emotion-Stress-Detection.git',
      liveUrl: 'https://mind-mate-ai-ai-powered-emotion-str.vercel.app/',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Selected projects that reflect my work in full-stack development, real-time systems, and AI-powered applications.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`overflow-hidden ${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}>
                <div className="relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4">Featured</Badge>
                  )}
                </div>
                
                <div className="p-6 lg:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button asChild variant="outline">
                        <a 
                          href={project.githubUrl}
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild>
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Link
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}