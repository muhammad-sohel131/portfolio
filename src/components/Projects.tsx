'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  category: 'office' | 'personal'
  techStack: string[]
  githubLink?: string
  liveLink: string
  isPrivate?: boolean
  features: string[]
  role: string
  teamSize?: number
  image: string  // Added image field
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'office' | 'personal'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const projects: Project[] = [
    // ========== OFFICE PROJECTS ==========
    {
      id: 1,
      title: "Asia LMS",
      description: "Learning Management System with course publishing, secure quizzes, and gamified leaderboard",
      longDescription: "A comprehensive LMS allowing instructors to publish courses with structured units. Each unit includes tasks and quizzes with a secure exam system that detects tab switching and auto-submits to maintain integrity. Features a points-based leaderboard to motivate learners through performance ranking.",
      category: 'office',
      techStack: ['Next.js', 'Express.js', 'MongoDB', 'TypeScript', 'Passport JS', 'Tailwind CSS'],
      liveLink: "https://high-end-multipurpose-lms.vercel.app/",
      isPrivate: true,
      image: "/projects/lms.jpg",
      features: [
        'Instructors can publish courses with structured units',
        'Each unit contains tasks and quizzes',
        'Secure quiz system with tab-switch detection and auto-submission',
        'Points-based leaderboard for learner motivation',
        'Flexible course structure allowing incremental content addition'
      ],
      role: 'Backend Developer & Frontend Contributor',
      teamSize: 4
    },
    {
      id: 2,
      title: "Casa Viva",
      description: "Real estate platform for property listing, rental, and purchase with premium featured listings",
      longDescription: "A comprehensive real estate platform where users can list properties for sale or rent. Features a premium system for featured listings, complete online lease workflow with digital signing, and interactive maps showing nearby amenities like schools, colleges, and hospitals.",
      category: 'office',
      techStack: ['Next.js', 'Express.js', 'MongoDB', 'Passport JS', 'Tailwind CSS'],
      liveLink: "https://casa-viva-frontend.vercel.app/",
      isPrivate: true,
      image: "/projects/casa-viva.jpg",
      features: [
        'Users can list properties for sale or rent',
        'Premium featured section - owners pay to highlight properties',
        'Online lease system with complete workflow',
        'Interactive maps showing nearby schools, colleges, hospitals',
        'Owner and tenant dashboards'
      ],
      role: 'Backend Developer & Frontend Contributor',
      teamSize: 5
    },
    {
      id: 3,
      title: "White Cross Clinic",
      description: "Healthcare platform for clinic services, test details, patient appointments, and doctor dashboard",
      longDescription: "A comprehensive healthcare platform where patients can view detailed information about tests and services, book appointments, and doctors can manage their schedules through dedicated dashboards. Features integrated search functionality that fetches real results from Google, plus real-time chat system for patient-admin communication.",
      category: 'office',
      techStack: ['Next.js', 'Express.js', 'MongoDB', 'Passport JS', 'Tailwind CSS', 'Firebase', 'TAVILY API'],
      liveLink: "https://white-cross-clinic-frontend.vercel.app/",
      isPrivate: true,
      image: "/projects/white-cross.jpg",
      features: [
        'Detailed test and services information display',
        'Patient appointment booking system',
        'Doctor dashboard for managing appointments',
        'Integrated search with real Google results via TAVILY API',
        'Real-time chat system between users and admin (Firebase)',
        'Secure authentication system'
      ],
      role: 'Backend Developer & Frontend Contributor',
      teamSize: 4
    },

    // ========== PERSONAL PROJECTS ==========
    {
      id: 4,
      title: "LoveLink",
      description: "Matrimonial platform connecting individuals looking for life partners with advanced filtering and premium services",
      longDescription: "A comprehensive matrimonial platform designed to connect individuals looking for a life partner. Features seamless and secure matchmaking experience with advanced filtering options, premium services, contact purchase system, and success stories sharing.",
      category: 'personal',
      techStack: ['React.js', 'Tailwind CSS', 'React Router', 'TanStack Query', 'Axios', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      githubLink: 'https://github.com/muhammad-sohel131/loveLink-frontend',
      liveLink: 'https://lovelink-5e84a.web.app/',
      image: "/projects/loveLink.jpg",
      features: [
        'Browse biodata with advanced filtering (age, gender, location, occupation)',
        'Secure contact purchase system to prevent spam',
        'Premium biodata section for enhanced visibility',
        'Success stories from couples who found matches',
        'Admin dashboard with insights (biodata count, revenue, charts)',
        'JWT-based secure authentication'
      ],
      role: 'Full Stack Developer',
      teamSize: 2
    },
    {
      id: 5,
      title: "Group Study",
      description: "Platform for group learning and assignment submissions with collaborative features",
      longDescription: "A comprehensive platform for group learning and assignment submissions. Provides an intuitive interface for users to manage assignments, track submissions, and collaborate effectively. Features include assignment creation, submission tracking, difficulty-based filtering, and real-time feedback.",
      category: 'personal',
      techStack: ['React.js', 'Tailwind CSS', 'Context API', 'Axios', 'Firebase Auth', 'React Toastify', 'React Tooltip', 'Motion'],
      githubLink: 'https://github.com/muhammad-sohel131/groupStudy-frontend',
      liveLink: 'https://group-study-b6d75.web.app/',
      image: "/projects/groupStudy.jpg",
      features: [
        'User authentication with email/password and Google sign-in',
        'Complete CRUD operations for assignments',
        'Filter assignments by difficulty level (Easy, Medium, Hard)',
        'Search assignments by title',
        'Submission management with real-time feedback',
        'Responsive design for desktop and mobile'
      ],
      role: 'Full Stack Developer',
      teamSize: 2
    },
    {
      id: 6,
      title: "PhoneShop",
      description: "E-commerce platform for buying phones with community discussions, reviews, and admin dashboard",
      longDescription: "A comprehensive e-commerce platform where users can browse and purchase phones, engage in community discussions about specific phones, share product reviews, and receive invoice PDFs via email. Features separate dashboards for users and admins with full CRUD capabilities.",
      category: 'personal',
      techStack: ['Next.js', 'TypeScript', 'Shadcn/UI', 'Tailwind CSS', 'MongoDB', 'Mongoose', 'JWT', 'NextAuth'],
      githubLink: 'https://github.com/muhammad-sohel131/phone-shop',
      liveLink: 'https://phone-shop-rho-one.vercel.app/',
      image: "/projects/phone-shop.jpg",
      features: [
        'Browse phones with detailed information',
        'Add to cart and checkout with email invoice PDF',
        'Community discussions on specific phones',
        'Reviews and rating system',
        'Admin dashboard for full management',
        'User dashboard for orders and profile'
      ],
      role: 'Full Stack Developer',
      teamSize: 2
    }
  ]

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
    return categoryMatch
  })

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'office': return 'bg-blue-100 text-blue-700'
      case 'personal': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'office': return 'fa-briefcase'
      case 'personal': return 'fa-user'
      default: return 'fa-code'
    }
  }

  const getCategoryGradient = (category: string) => {
    switch(category) {
      case 'office': return 'from-blue-500 to-indigo-600'
      case 'personal': return 'from-purple-500 to-pink-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'var(--section-alt)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            A collection of my professional work and personal passion projects.
            Each project represents my commitment to quality and innovation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : ''
            }`}
            style={selectedCategory === 'all' ? {} : { backgroundColor: 'var(--surface-2)', color: 'var(--color-foreground)' }}
          >
            <i className="fas fa-globe mr-2"></i>All Projects ({projects.length})
          </button>
          <button
            onClick={() => setSelectedCategory('office')}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'office'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : ''
            }`}
            style={selectedCategory === 'office' ? {} : { backgroundColor: 'var(--surface-2)', color: 'var(--color-foreground)' }}
          >
            <i className="fas fa-briefcase mr-2"></i>Office ({projects.filter(p => p.category === 'office').length})
          </button>
          <button
            onClick={() => setSelectedCategory('personal')}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'personal'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : ''
            }`}
            style={selectedCategory === 'personal' ? {} : { backgroundColor: 'var(--surface-2)', color: 'var(--color-foreground)' }}
          >
            <i className="fas fa-user mr-2"></i>Personal ({projects.filter(p => p.category === 'personal').length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}
            >
              {/* Project Image */}
              <div className="relative h-[280px] w-full overflow-hidden" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.04))' }}>
                {!imageErrors[project.id] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  // Fallback gradient when image fails to load
                  <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryGradient(project.category)} flex items-center justify-center`}>
                    <i className={`fas ${getCategoryIcon(project.category)} text-white text-5xl opacity-80`}></i>
                  </div>
                )}
                
                {/* Overlay Badges */}
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`} style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                    <i className={`fas ${getCategoryIcon(project.category)} mr-1 text-xs`}></i>
                    {project.category === 'office' ? 'Office' : 'Personal'}
                  </span>
                </div>
                {project.isPrivate && (
                  <div className="absolute bottom-3 left-3 bg-yellow-500/90 text-white text-xs px-2 py-1 rounded-full z-10">
                    <i className="fas fa-lock mr-1"></i>Private
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition line-clamp-1" style={{ color: 'var(--color-foreground)' }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-3 leading-relaxed line-clamp-2" style={{ color: 'var(--color-muted)' }}>
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-xs font-mono" style={{ backgroundColor: 'rgba(0,0,0,0.03)', color: 'var(--color-muted)' }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--surface-2)', color: 'var(--color-muted)' }}>
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* My Role Badge */}
                <div className="mb-4 px-2 py-1 rounded-lg inline-block" style={{ backgroundColor: 'rgba(59,130,246,0.06)' }}>
                  <p className="text-xs font-mono" style={{ color: 'var(--color-primary)' }}>
                    <i className="fas fa-user-tie mr-1"></i>
                    {project.role.length > 40 ? project.role.substring(0, 40) + '...' : project.role}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <button 
                    className="flex-1 py-1.5 text-sm font-semibold flex items-center justify-center gap-1 rounded-lg hover:bg-blue-50 transition"
                    style={{ color: 'var(--color-primary)' }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                  >
                    <i className="fas fa-eye"></i> Details
                  </button>
                  
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 text-sm font-semibold flex items-center justify-center gap-1 rounded-lg transition"
                    style={{ color: 'var(--color-foreground)', backgroundColor: 'transparent' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-external-link-alt"></i> Live
                  </a>
                  
                  {!project.isPrivate && project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 text-sm font-semibold flex items-center justify-center gap-1 rounded-lg transition"
                      style={{ color: 'var(--color-muted)', backgroundColor: 'transparent' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedProject(null)}>
            <div className="rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}>
              {/* Modal Image Header */}
              <div className="relative h-56 w-full bg-blend-overlay bg-black/50">
                {!imageErrors[selectedProject.id] ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(selectedProject.id)}
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryGradient(selectedProject.category)} flex items-center justify-center`}>
                    <i className={`fas ${getCategoryIcon(selectedProject.category)} text-white text-6xl opacity-80`}></i>
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition z-10"
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="absolute bottom-4 left-6 z-10">
                  <div className="flex gap-2 mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(selectedProject.category)}`}>
                      <i className={`fas ${getCategoryIcon(selectedProject.category)} mr-1`}></i>
                      {selectedProject.category === 'office' ? 'Office Project' : 'Personal Project'}
                    </span>
                    {selectedProject.isPrivate && (
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700">
                        <i className="fas fa-lock mr-1"></i>Private
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white drop-shadow-lg">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6" style={{ color: 'var(--color-foreground)' }}>
                {/* Role & Team */}
                <div className="mb-5 p-3 rounded-lg" style={{ backgroundColor: 'rgba(59,130,246,0.06)' }}>
                  <p className="text-sm" style={{ color: 'var(--color-primary)' }}>
                    <i className="fas fa-user-tie mr-2"></i>
                    <span className="font-semibold">My Role:</span> {selectedProject.role}
                    {selectedProject.teamSize && ` | 👥 Team: ${selectedProject.teamSize} members`}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <i className="fas fa-info-circle text-blue-600"></i>
                    Overview
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: 'var(--color-foreground)' }}>
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <i className="fas fa-list-check text-blue-600"></i>
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                        <i className="fas fa-check-circle text-green-500 mt-0.5 text-sm"></i>
                        <span className="text-sm" style={{ color: 'var(--color-foreground)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-5">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <i className="fas fa-code text-blue-600"></i>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded-lg text-xs font-mono" style={{ backgroundColor: 'rgba(0,0,0,0.03)', color: 'var(--color-muted)' }}>
                          {tech}
                        </span>
                    ))}
                  </div>
                </div>

                {/* Links Section */}
                <div className="flex gap-3 mt-5 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg font-semibold text-center hover:opacity-90 transition text-sm"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Visit Live Project
                  </a>
                  
                  {!selectedProject.isPrivate && selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg font-semibold text-center hover:opacity-90 transition text-sm"
                      style={{ backgroundColor: 'var(--color-muted)', color: 'white' }}
                    >
                      <i className="fab fa-github mr-2"></i>View Source Code
                    </a>
                  )}
                </div>

                {/* Private Note */}
                {selectedProject.isPrivate && (
                  <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(250,204,21,0.06)', border: '1px solid rgba(250,204,21,0.16)' }}>
                    <p className="text-xs" style={{ color: 'var(--color-primary)' }}>
                      <i className="fas fa-info-circle mr-1"></i>
                      This is a private project. Source code is confidential. Live demo is available above.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects