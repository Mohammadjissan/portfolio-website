import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS'
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT', 'bcrypt'
      ]
    },
    {
      title: 'Database & Data',
      skills: ['MongoDB', 'PostgreSQL', 'NumPy', 'Pandas', 'Aggregation', 'Indexing']
    },
    {
      title: 'Programming & Tools',
      skills: ['JavaScript', 'Python', 'C/C++', 'Git', 'GitHub', 'Postman', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Core technologies and concepts I use to build reliable, scalable web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}