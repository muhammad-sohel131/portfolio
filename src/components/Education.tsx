'use client'

import { useState } from 'react'

interface Course {
  name: string
  grade?: string
  year?: string
}

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  grade?: string
  achievements?: string[]
  courses?: Course[]
  icon: string
}

const Education = () => {
  const [selectedUni, setSelectedUni] = useState<'green' | 'college'>('green')
  
  const educationData: Record<'green' | 'college', EducationItem> = {
    green: {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Green University of Bangladesh",
      location: "Dhaka, Bangladesh",
      period: "2021 - Present",
      grade: "CGPA: 3.82/4.00",
      achievements: [
        "Excellence Academic Award (Multiple semesters)",
        "Dean's List Award - 3 consecutive semesters",
        "3rd Position - Intra University Programming Contest 2023",
        "Best Project Award Nominee - Software Engineering Course"
      ],
      courses: [
        { name: "Data Structures & Algorithms", grade: "A" },
        { name: "Object Oriented Programming", grade: "A+" },
        { name: "Database Management Systems", grade: "A" },
        { name: "Operating Systems", grade: "A-" },
        { name: "Software Engineering", grade: "A" },
        { name: "Artificial Intelligence", grade: "A" },
        { name: "Computer Networks", grade: "B+" },
        { name: "Web Technologies", grade: "A" }
      ],
      icon: "fa-university"
    },
    college: {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka City College",
      location: "Dhaka, Bangladesh",
      period: "2018 - 2020",
      grade: "GPA: 5.00/5.00",
      achievements: [
        "Science Olympiad - Regional Champion",
        "Mathematics Club President",
        "Programming Club Founding Member"
      ],
      courses: [
        { name: "Physics", grade: "A" },
        { name: "Chemistry", grade: "A" },
        { name: "Mathematics", grade: "A+" },
        { name: "ICT", grade: "A+" }
      ],
      icon: "fa-graduation-cap"
    }
  }

  const currentData = educationData[selectedUni]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My educational background and academic achievements that shaped my technical foundation.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setSelectedUni('green')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedUni === 'green'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            <i className="fas fa-university mr-2"></i>
            University
          </button>
          {/* <button
            onClick={() => setSelectedUni('college')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedUni === 'college'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            <i className="fas fa-school mr-2"></i>
            College
          </button> */}
        </div>

        {/* Education Card */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Main Info */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className={`h-2 bg-gradient-to-r from-blue-600 to-indigo-600`}></div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <i className={`fas ${currentData.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{currentData.degree}</h3>
                  <p className="text-blue-600 font-semibold">{currentData.institution}</p>
                  <p className="text-sm text-gray-500">{currentData.location}</p>
                </div>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <i className="fas fa-calendar-alt text-blue-500 w-5"></i>
                  <span className="font-mono text-sm">{currentData.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <i className="fas fa-star text-yellow-500 w-5"></i>
                  <span className="font-semibold">{currentData.grade}</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i className="fas fa-trophy text-yellow-500"></i>
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {currentData.achievements?.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mt-0.5"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Courses */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <i className="fas fa-book-open text-blue-600"></i>
                Relevant Coursework
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3">
                {currentData.courses?.map((course, idx) => (
                  <div key={idx} className="group">
                    <div className="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                      <p className="font-mono text-sm text-gray-700 font-medium">{course.name}</p>
                      {course.grade && (
                        <p className="text-xs text-blue-600 mt-1 font-mono">Grade: {course.grade}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Terminal Style Quote */}
              <div className="mt-6 bg-gray-900 rounded-lg p-3 font-mono text-xs">
                <p className="text-green-400">$ echo "academic philosophy"</p>
                <p className="text-gray-300 mt-1">"Continuous learning & practical application of theoretical concepts."</p>
                <p className="text-blue-400 mt-1">$ _</p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default Education