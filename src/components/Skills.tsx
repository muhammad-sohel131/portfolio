'use client'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fa-code',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)'],
    },
    {
      title: 'Backend',
      icon: 'fa-server',
      skills: ['Node.js', 'Python', 'Java', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Tools & Others',
      icon: 'fa-tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'MongoDB'],
    },
    {
      title: 'Problem Solving',
      icon: 'fa-brain',
      skills: ['Data Structures', 'Algorithms', 'Competitive Programming', 'Codeforces', 'HackerRank'],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable, modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  <i className={`fas ${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-mono hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills