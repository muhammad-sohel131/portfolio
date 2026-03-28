'use client'

import { useState, useEffect } from 'react'

interface Platform {
  name: string
  username: string
  url: string
  icon: string
  color: string
  bgColor: string
  stats?: {
    rating?: string
    problems?: number
    followers?: string
    repos?: number
    contributions?: number
  }
}

const CodingProfiles = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)
  
  // Platform data with your actual usernames (update these with your real usernames)
  const platforms: Platform[] = [
    {
      name: 'GitHub',
      username: 'rezwanulhaque',
      url: 'https://github.com/rezwanulhaque',
      icon: 'fab fa-github',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'bg-gray-900',
      stats: {
        repos: '24+',
        followers: '45',
        contributions: '1.2k'
      }
    },
    {
      name: 'LinkedIn',
      username: 'rezwanul-haque',
      url: 'https://linkedin.com/in/rezwanul-haque',
      icon: 'fab fa-linkedin',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-700',
      stats: {
        followers: '500+',
        connections: '450+'
      }
    },
    {
      name: 'Codeforces',
      username: 'rezwanul_haque',
      url: 'https://codeforces.com/profile/rezwanul_haque',
      icon: 'fab fa-codeforces',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-600',
      stats: {
        rating: '1320',
        problems: '450+'
      }
    },
    {
      name: 'CodeChef',
      username: 'rezwanul_haque',
      url: 'https://www.codechef.com/users/rezwanul_haque',
      icon: 'fas fa-code',
      color: 'from-brown-500 to-amber-700',
      bgColor: 'bg-amber-700',
      stats: {
        rating: '1580',
        problems: '380+'
      }
    },
    {
      name: 'HackerRank',
      username: 'rezwanul_haque',
      url: 'https://www.hackerrank.com/rezwanul_haque',
      icon: 'fab fa-hackerrank',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-600',
      stats: {
        rating: '5★',
        problems: '320+',
        badges: 'Gold'
      }
    },
    {
      name: 'LeetCode',
      username: 'rezwanul_haque',
      url: 'https://leetcode.com/rezwanul_haque',
      icon: 'fas fa-code',
      color: 'from-yellow-500 to-yellow-700',
      bgColor: 'bg-yellow-600',
      stats: {
        rating: '1650',
        problems: '280+'
      }
    }
  ]

  // Stats for coding platforms
  const codingStats = {
    totalProblems: '1500+',
    contests: '45+',
    maxRating: '1650',
    certifications: '8+'
  }

  const openProfile = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case 'GitHub': return <i className="fab fa-github text-3xl"></i>
      case 'LinkedIn': return <i className="fab fa-linkedin text-3xl"></i>
      case 'Codeforces': return <i className="fas fa-trophy text-3xl"></i>
      case 'CodeChef': return <i className="fas fa-utensils text-3xl"></i>
      case 'HackerRank': return <i className="fab fa-hackerrank text-3xl"></i>
      case 'LeetCode': return <i className="fas fa-code text-3xl"></i>
      default: return <i className="fas fa-code text-3xl"></i>
    }
  }

  return (
    <section id="coding-profiles" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coding <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My presence across competitive programming platforms and professional networks.
            Connect with me and check out my coding journey!
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className={`relative group cursor-pointer transform transition-all duration-300 ${
                hoveredPlatform === platform.name ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredPlatform(platform.name)}
              onMouseLeave={() => setHoveredPlatform(null)}
              onClick={() => openProfile(platform.url)}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                style={{ background: `linear-gradient(135deg, ${platform.color.split(' ')[1]}, ${platform.color.split(' ')[3]})` }}>
              </div>
              
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${platform.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 ${platform.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${platform.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{platform.name}</h3>
                      <p className="text-sm text-gray-500 font-mono">@{platform.username}</p>
                    </div>
                    <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-600 transition"></i>
                  </div>
                  
                  {platform.stats && (
                    <div className="space-y-2 mt-4">
                      {Object.entries(platform.stats).map(([key, value], i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                          <span className="text-gray-500 capitalize font-mono">{key}:</span>
                          <span className="font-semibold text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <button className="mt-4 w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-mono text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300">
                    Visit Profile →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Achievements Badges */}
        <div className="mt-8">
          <h3 className="text-center text-lg font-bold mb-4 flex items-center justify-center gap-2">
            <i className="fas fa-medal text-yellow-500"></i>
            Recent Achievements
            <i className="fas fa-trophy text-yellow-500"></i>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Codeforces Specialist', icon: 'fa-trophy', color: 'bg-yellow-100 text-yellow-700' },
              { name: 'HackerRank 5★', icon: 'fa-star', color: 'bg-green-100 text-green-700' },
              { name: 'CodeChef 3★', icon: 'fa-fire', color: 'bg-orange-100 text-orange-700' },
              { name: 'GitHub Arctic Code Vault', icon: 'fa-code-branch', color: 'bg-gray-100 text-gray-700' },
              { name: '100 Days of Code', icon: 'fa-calendar-check', color: 'bg-blue-100 text-blue-700' },
              { name: 'LeetCode 30-Day Challenge', icon: 'fa-bolt', color: 'bg-purple-100 text-purple-700' },
            ].map((badge, idx) => (
              <span key={idx} className={`px-3 py-1 ${badge.color} rounded-full text-sm font-mono flex items-center gap-1`}>
                <i className={`fas ${badge.icon} text-xs`}></i>
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles