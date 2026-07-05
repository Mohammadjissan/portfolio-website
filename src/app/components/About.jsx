// components/About.jsx
import { Rocket, Wrench, Trophy, Check } from "lucide-react";

export default function About() {
  const highlights = [
    "Built 5+ Full-Stack Applications",
    "Real-Time Systems (Socket.io)",
    "SIH Participant (Gov. of India)",
    "Backend & API Design Specialist",
  ];

  const stats = [
    { icon: Rocket, value: "5+", label: "Projects Built" },
    { icon: Wrench, value: "MERN", label: "+ Tools" },
    { icon: Trophy, value: "SIH", label: "Hackathon Selected" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-500">
            Get to know a bit more about who I am and what I do.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Main content - 3 columns */}
          <div className="md:col-span-3 space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg font-medium text-gray-900">
              I build <strong>scalable backend systems</strong> and{" "}
              <strong>real-time applications</strong> using the{" "}
              <strong>MERN stack</strong>.
            </p>

            <p>
              I specialize in building scalable web applications using{" "}
              <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
            </p>

            <p>
              I enjoy designing <strong>clean APIs</strong>, handling{" "}
              <strong>authentication systems</strong>, and building efficient
              end-to-end solutions.
            </p>

            <p>
              I have hands-on experience with real-world projects, including
              real-time applications and full-stack dashboards. I was
              selected for the{" "}
              <strong>Smart India Hackathon (SIH)</strong>, where I worked on
              an AI-powered sports performance analysis platform.
            </p>

            <p>
              I'm passionate about solving complex problems, writing clean
              code, and continuously improving my skills to build impactful
              digital products.
            </p>

            <p className="font-medium text-gray-900 pt-1">
              I focus on writing clean, maintainable code and building
              systems that scale.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3 pt-6">
              {highlights.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-gray-100 text-gray-800 text-sm font-medium"
                >
                  <Check size={14} className="text-gray-900" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Stats box - 2 columns, better balance */}
          <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-8 flex flex-col">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white border border-gray-200">
                    <Icon size={22} className="text-gray-900" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}

            {/* Availability CTA - fills empty space + signals job-search intent */}
            <div className="pt-6 mt-auto border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Currently</p>
              <p className="text-sm font-medium text-gray-900">
                Open to Full-Stack &amp; Backend roles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}