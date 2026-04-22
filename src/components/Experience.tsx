"use client";

import { useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "internship" | "full time";
  description: string[];
  technologies: string[];
  achievements?: string[];
  icon: string;
  color: string;
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "internship" | "freelance" | "academic"
  >("all");

  const experiences: ExperienceItem[] = [
    {
      title: "Web Developer Intern",
      company: "Sardar It.",
      location: "Dhaka, Bangladesh",
      period: "October 2025 - November 2025",
      type: "internship",
      description: [
        "Developing full-stack web applications using React.js and Node.js",
        "Collaborating with senior developers to implement RESTful APIs",
        "Participating in daily stand-ups and sprint planning meetings",
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Git"],
      icon: "fa-briefcase",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Full-Stack Developer",
      company: "Sardar IT",
      location: "Dhaka, Bangladesh",
      period: "December 2025 - Present",
      type: "full time",
      description: [
        "Developing full-stack web applications using React.js and Node.js",
        "Built real-world applications including a Real Estate platform, LMS website, and Medical service website",
        "Collaborating with senior developers to implement RESTful APIs",
        "Participating in daily stand-ups and sprint planning meetings",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
      icon: "fa-laptop-code",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeTab);

  const getTabClass = (tab: string) => {
    return `px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
      activeTab === tab
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
        : ""
    }`;
  };

  return (
    <section id="experience" className="py-20" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            My professional experience, internships, and academic roles that
            shaped my career.
          </p>
        </div>

        {/* Filter Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button onClick={() => setActiveTab('all')} className={getTabClass('all')}>
            <i className="fas fa-globe mr-2"></i>All
          </button>
          <button onClick={() => setActiveTab('internship')} className={getTabClass('internship')}>
            <i className="fas fa-briefcase mr-2"></i>Internships
          </button>
          <button onClick={() => setActiveTab('freelance')} className={getTabClass('freelance')}>
            <i className="fas fa-laptop-code mr-2"></i>Freelance
          </button>
          <button onClick={() => setActiveTab('academic')} className={getTabClass('academic')}>
            <i className="fas fa-chalkboard-teacher mr-2"></i>Academic
          </button>
        </div> */}

        {/* Timeline Experience Cards */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400"></div>

          <div className="space-y-8">
            {filteredExperiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}>
                    <div className={`h-1 bg-gradient-to-r ${exp.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center`}
                        >
                          <i
                            className={`fas ${exp.icon} text-white text-xl`}
                          ></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold" style={{ color: 'var(--color-foreground)' }}>
                            {exp.title}
                          </h3>
                          <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
                            <i className="fas fa-map-marker-alt text-xs"></i>
                            <span>{exp.location}</span>
                            <span className="mx-1">•</span>
                            <i className="fas fa-calendar-alt text-xs"></i>
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}>
                          <i className="fas fa-tasks text-blue-500 text-sm"></i>
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm"
                              style={{ color: 'var(--color-muted)' }}
                            >
                              <i className="fas fa-chevron-right text-blue-500 text-xs mt-1"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.achievements && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}>
                            <i className="fas fa-star text-yellow-500 text-sm"></i>
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
                                <i className="fas fa-trophy text-yellow-500 text-xs mt-1"></i>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded text-xs font-mono transition-all duration-200"
                              style={{ backgroundColor: 'var(--surface-2)', color: 'var(--color-muted)' }}
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Style Note */}
        <div className="mt-8 rounded-xl p-4 font-mono text-sm max-w-2xl mx-auto" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}>
          <p style={{ color: '#4ade80' }}>$ experience --summary</p>
          <p style={{ color: 'var(--color-foreground)' }} className="mt-1">
            {" "}
            Currently seeking full-time software engineering opportunities
          </p>
          <p style={{ color: 'var(--color-foreground)' }}> Open to remote positions worldwide</p>
          <p style={{ color: 'var(--color-primary)' }} className="mt-1">$ _</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
