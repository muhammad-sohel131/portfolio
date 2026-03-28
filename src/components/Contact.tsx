'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: 'fa-envelope', label: 'Email', value: 'rezwanul.haque@green.edu.bd', link: 'mailto:rezwanul.haque@green.edu.bd' },
    { icon: 'fa-phone', label: 'Phone', value: '+880 1XXX-XXXXXX', link: 'tel:+8801XXXXXXXXX' },
    { icon: 'fa-map-marker-alt', label: 'Location', value: 'Dhaka, Bangladesh', link: null },
  ]

  const socialLinks = [
    { icon: 'fab fa-github', link: 'https://github.com/' },
    { icon: 'fab fa-linkedin', link: 'https://linkedin.com/' },
    { icon: 'fab fa-codeforces', link: 'https://codeforces.com/' },
    { icon: 'fab fa-twitter', link: 'https://twitter.com/' },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <i className="fas fa-comment-dots text-blue-600"></i>
                Let's Talk
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className={`fas ${info.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-mono">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-700 hover:text-blue-600 transition">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8 pt-4 border-t border-gray-200">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Terminal Quote */}
            <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
              <p className="text-green-400">$ echo "message from dev"</p>
              <p className="text-gray-300 mt-2">"Open to remote opportunities and collaborative projects."</p>
              <p className="text-green-400 mt-2">$ _</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg text-center animate-fadeIn">
                  <i className="fas fa-check-circle mr-2"></i>Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact