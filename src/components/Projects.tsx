'use client'

const Projects = () => {
  const projects = [
    {
      title: 'PhoneFinder',
      description: 'Smart mobile e-commerce platform helping users choose the best phone based on community insights and intelligent recommendations.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      icon: 'fa-mobile-alt',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Pet Adoption Platform',
      description: 'Feature-rich system with filtering, sorting, and interactive UI for adopting pets with seamless user experience.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      icon: 'fa-paw',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Make Perfect Team',
      description: 'React-based application with logic-driven constraints and interactive team selection features for optimal team building.',
      tech: ['React', 'JavaScript', 'CSS3', 'Context API'],
      icon: 'fa-users',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'SmartShop AI',
      description: 'Advanced e-commerce concept integrating community-driven insights and intelligent suggestions for smarter shopping.',
      tech: ['Python', 'Django', 'AI/ML', 'Tailwind'],
      icon: 'fa-robot',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'SmartEdu Portal',
      description: 'Smart Learning Management System (LMS) with course management, real-time support, and feedback-driven rating system.',
      tech: ['Next.js', 'Node.js', 'Socket.io', 'MongoDB'],
      icon: 'fa-graduation-cap',
      color: 'from-indigo-500 to-blue-500',
      highlight: true,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real-world applications I've built, focusing on clean UI, efficient logic, and meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                project.highlight ? 'ring-2 ring-blue-400 ring-offset-2' : ''
              }`}
            >
              <div className={`h-32 bg-gradient-to-r ${project.color} relative flex items-center justify-center`}>
                <i className={`fas ${project.icon} text-white text-5xl group-hover:scale-110 transition duration-300`}></i>
                {project.highlight && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                    FINAL YEAR
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
                    <i className="fas fa-eye"></i> Live Demo
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold flex items-center gap-1">
                    <i className="fab fa-github"></i> Source
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects