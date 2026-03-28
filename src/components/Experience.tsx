'use client'

import { useState } from 'react'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  type: 'internship' | 'freelance' | 'academic'
  description: string[]
  technologies: string[]
  achievements?: string[]
  icon: string
  color: string
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'internship' | 'freelance' | 'academic'>('all')

  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineering Intern",
      company: "Tech Solutions Bangladesh Ltd.",
      location: "Dhaka, Bangladesh (Remote)",
      period: "June 2024 - Present",
      type: "internship",
      description: [
        "Developing full-stack web applications using React.js and Node.js",
        "Collaborating with senior developers to implement RESTful APIs",
        "Participating in daily stand-ups and sprint planning meetings",
        "Writing unit tests and contributing to code reviews"
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Git"],
      achievements: [
        "Reduced API response time by 25% through query optimization",
        "Implemented authentication system used by 500+ users"
      ],
      icon: "fa-briefcase",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed / Upwork",
      location: "Remote",
      period: "Jan 2023 - Present",
      type: "freelance",
      description: [
        "Built custom web applications for international clients",
        "Developed responsive e-commerce platforms with payment integration",
        "Provided technical consultation and maintenance services",
        "Managed project timelines and client communication independently"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Firebase", "Python"],
      achievements: [
        "Completed 12+ projects with 5-star ratings",
        "Maintained 98% client satisfaction rate"
      ],
      icon: "fa-laptop-code",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Teaching Assistant",
      company: "Green University of Bangladesh",
      location: "Dhaka, Bangladesh",
      period: "Sep 2023 - Present",
      type: "academic",
      description: [
        "Assisted professor in Data Structures and Algorithms course",
        "Conducted lab sessions for 50+ students",
        "Graded assignments and provided feedback to improve coding skills",
        "Created supplementary learning materials and practice problems"
      ],
      technologies: ["C++", "Python", "Data Structures", "Algorithms"],
      achievements: [
        "Received 'Outstanding TA Award' for Fall 2023 semester",
        "Helped 15 students achieve A grade in the course"
      ],
      icon: "fa-chalkboard-teacher",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Competitive Programming Mentor",
      company: "CSE Club, Green University",
      location: "Dhaka, Bangladesh",
      period: "Jan 2023 - Dec 2023",
      type: "academic",
      description: [
        "Mentored junior students in algorithmic problem-solving",
        "Organized weekly coding sessions and mock contests",
        "Prepared problem sets for intra-university competitions",
        "Guided students on Codeforces and HackerRank platforms"
      ],
      technologies: ["C++", "Python", "Algorithms", "Data Structures"],
      achievements: [
        "Mentored team that secured 2nd place in university contest",
        "Increased club participation by 40%"
      ],
      icon: "fa-users",
      color: "from-orange-500 to-red-500"
    }
  ]

  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab)

  const getTabClass = (tab: string) => {
    return `px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
      activeTab === tab
        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`
  }

  return (
    <section id="experience" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional experience, internships, and academic roles that shaped my career.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button onClick={() => setActiveTab('all')} className={getTabClass('all')}>
            <i className="fas fa-globe mr-2"></i>All
          </button>
          {/* <button onClick={() => setActiveTab('internship')} className={getTabClass('internship')}>
            <i className="fas fa-briefcase mr-2"></i>Internships
          </button> */}
          <button onClick={() => setActiveTab('freelance')} className={getTabClass('freelance')}>
            <i className="fas fa-laptop-code mr-2"></i>Freelance
          </button>
          {/* <button onClick={() => setActiveTab('academic')} className={getTabClass('academic')}>
            <i className="fas fa-chalkboard-teacher mr-2"></i>Academic
          </button> */}
        </div>

        {/* Timeline Experience Cards */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400"></div>
          
          <div className="space-y-8">
            {filteredExperiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className={`h-1 bg-gradient-to-r ${exp.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center`}>
                          <i className={`fas ${exp.icon} text-white text-xl`}></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                          <p className="text-blue-600 font-semibold">{exp.company}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <i className="fas fa-map-marker-alt text-xs"></i>
                            <span>{exp.location}</span>
                            <span className="mx-1">•</span>
                            <i className="fas fa-calendar-alt text-xs"></i>
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <i className="fas fa-tasks text-blue-500 text-sm"></i>
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <i className="fas fa-chevron-right text-blue-500 text-xs mt-1"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.achievements && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <i className="fas fa-star text-yellow-500 text-sm"></i>
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <i className="fas fa-trophy text-yellow-500 text-xs mt-1"></i>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-mono hover:bg-blue-600 hover:text-white transition-all duration-200">
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

        {/* Experience Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '2+', label: 'Years Experience', icon: 'fa-clock', color: 'text-blue-500' },
            { value: '4', label: 'Companies/Orgs', icon: 'fa-building', color: 'text-green-500' },
            { value: '12+', label: 'Projects Completed', icon: 'fa-folder-open', color: 'text-purple-500' },
            { value: '98%', label: 'Client Satisfaction', icon: 'fa-smile', color: 'text-yellow-500' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <i className={`fas ${stat.icon} ${stat.color} text-2xl mb-2 group-hover:scale-110 transition`}></i>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Terminal Style Note */}
        <div className="mt-8 bg-gray-900 rounded-xl p-4 font-mono text-sm max-w-2xl mx-auto">
          <p className="text-green-400">$ experience --summary</p>
          <p className="text-gray-300 mt-1"> Currently seeking full-time software engineering opportunities</p>
          <p className="text-gray-300"> Open to remote positions worldwide</p>
          <p className="text-blue-400 mt-1">$ _</p>
        </div>
      </div>
    </section>
  )
}

export default Experience