// components/Experience.jsx
import { Briefcase, Code2, Trophy, Circle } from "lucide-react";

export default function Experience() {
  const experience = [
    {
      icon: Briefcase,
      role: "Backend Engineering Intern — Digiscrypt Technologies",
      period: "Feb 2026 – May 2026",
      summary:
        "Remote internship focused on developing and optimizing scalable backend services for production web applications.",
      points: [
        "Developed and optimized scalable backend services using Node.js, Express.js, and MongoDB",
        "Built RESTful APIs with validation, authentication (JWT), and structured error handling",
        "Improved API response time by 25–30% by optimizing MongoDB queries and designing efficient data models",
        "Integrated backend APIs with React.js frontend for seamless data flow and user experience",
        "Implemented secure authentication and authorization mechanisms, reducing unauthorized access risks",
        "Designed modular and maintainable backend architecture for scalability",
        "Improved data retrieval performance using MongoDB indexing techniques",
        "Collaborated with cross-functional teams to deliver scalable web applications",
      ],
    },
    {
      icon: Code2,
      role: "Full-Stack Developer (Projects)",
      period: "Jan 2024 – Present",
      summary:
        "Worked on multiple full-stack web applications using the MERN stack, focusing on backend systems and real-time functionality.",
      points: [
        "Designed and developed REST APIs using Node.js and Express.js",
        "Built scalable frontend interfaces using React.js and Tailwind CSS",
        "Implemented authentication systems (JWT, secure login)",
        "Developed real-time features using Socket.io",
        "Managed databases using MongoDB and optimized queries",
      ],
    },
    {
      icon: Trophy,
      role: "Smart India Hackathon (SIH) — Team Lead / Developer",
      period: "2025",
      summary:
        "Selected for the Smart India Hackathon (SIH), where I worked on an AI-powered sports performance analysis platform.",
      points: [
        "Led development of core system architecture",
        "Contributed to both frontend and backend development",
        "Integrated AI/ML models using TensorFlow Lite and OpenCV",
        "Collaborated with a team to build a scalable mobile solution",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-500">
            A snapshot of what I've built and contributed to so far.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gray-200" />

          <div className="space-y-14">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex gap-6">
                  {/* Icon node */}
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <Icon size={22} className="text-gray-900" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.role}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 text-sm"
                        >
                          <Circle
                            size={6}
                            className="mt-2 flex-shrink-0 fill-gray-900 text-gray-900"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}