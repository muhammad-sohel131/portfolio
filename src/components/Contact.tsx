"use client";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "sohelf131@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      console.log("Email sent:", result.text);
    } catch (err) {
      console.log(err);
    }
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "fa-envelope",
      label: "Email",
      value: "sohelf131@gmail.com",
      link: "mailto:sohelf131@gmail.com",
    },
    {
      icon: "fa-phone",
      label: "Phone",
      value: "+880 1302633568",
      link: "tel:+8801302633568",
    },
    {
      icon: "fa-map-marker-alt",
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Have a project in mind? Let's collaborate and build something
            amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}>
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
                      <p className="text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="transition"
                          style={{ color: 'var(--color-foreground)' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: 'var(--color-foreground)' }}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Quote */}
            <div className="rounded-xl p-4 font-mono text-sm" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}>
              <p style={{ color: '#4ade80' }}>$ echo "message from dev"</p>
              <p style={{ color: 'var(--color-foreground)' }} className="mt-2">
                "Open to remote opportunities and collaborative projects."
              </p>
              <p style={{ color: '#4ade80' }} className="mt-2">$ _</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg focus:outline-none"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg focus:outline-none"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-foreground)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
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
                  "Send Message"
                )}
              </button>
              {submitted && (
                <div className="px-4 py-2 rounded-lg text-center animate-fadeIn" style={{ backgroundColor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: 'var(--color-foreground)' }}>
                  <i className="fas fa-check-circle mr-2"></i>Message sent
                  successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
