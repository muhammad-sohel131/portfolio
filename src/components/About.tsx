"use client";

import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="code-line">
              <p className="leading-relaxed" style={{ color: 'var(--color-foreground)' }}>
                I am a passionate{" "}
                <span className="font-semibold text-blue-600">
                  Full Stack Developer
                </span>{" "}
                currently working at Sardar IT. I have completed my Bachelor’s
                degree in Computer Science and Engineering from Green University
                of Bangladesh.
              </p>
            </div>

            <div className="code-line">
              <p className="leading-relaxed" style={{ color: 'var(--color-foreground)' }}>
                During the last two years of my university journey, I was deeply
                involved in{" "}
                <span className="font-semibold text-blue-600">
                  software development
                </span>
                , building real-world projects using modern technologies like
                React, Next.js, Node.js, and Python. This hands-on experience
                helped me strengthen my problem-solving ability and practical
                development skills.
              </p>
            </div>

            <div className="code-line">
              <p className="leading-relaxed" style={{ color: 'var(--color-foreground)' }}>
                Alongside development, I actively practiced{" "}
                <span className="font-semibold text-blue-600">
                  competitive programming
                </span>{" "}
                for over two years, solving problems on platforms like
                HackerRank and Codeforces, which significantly improved my
                analytical thinking and algorithmic knowledge.
              </p>
            </div>

            <div className="code-line">
              <p className="leading-relaxed" style={{ color: 'var(--color-foreground)' }}>
                My dedication earned me{" "}
                <span className="font-semibold text-blue-600">
                  3rd position
                </span>{" "}
                in an Intra University Programming Contest, along with multiple
                Excellence Academic Awards.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="#contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                style={{ boxShadow: '0 6px 18px rgba(59,130,246,0.12)' }}
              >
                Let&apos;s Connect
              </Link>
              <Link
              target="_blank"
                href="https://drive.google.com/file/d/1o47PyOKzHOEjXt7dCgGNNTo4ViI0rsE9/view?usp=sharing"
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                Open Resume
              </Link>
            </div>
          </div>
          {/* Terminal Animation */}
          <div className="rounded-xl shadow-2xl overflow-hidden" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--color-border)' }}>
            <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: 'rgba(0,0,0,0.04)' }}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs font-mono ml-2" style={{ color: 'var(--color-muted)' }}>
                developer@portfolio:~
              </span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
              <p style={{ color: '#4ade80' }}>$ whoami</p>
              <p style={{ color: 'var(--color-foreground)' }}>
                Md Sohel - Full Stack Developer @ Sardar IT
              </p>
              <p style={{ color: 'var(--color-foreground)' }}>
                BSc in CSE, Green University of Bangladesh
              </p>
              <p style={{ color: '#4ade80' }}>$ skills --tech</p>
              <p style={{ color: 'var(--color-foreground)' }}>
                React.js • Next.js • Python • Java • Node.js • Tailwind
              </p>
              <p style={{ color: '#4ade80' }}>$ achievements --recent</p>
              <p style={{ color: '#facc15' }}>
                {" "}
                3rd Position - Intra University Programming Contest
              </p>
              <p style={{ color: '#facc15' }}>
                {" "}
                Excellence Academic Award (Multiple)
              </p>
              <p style={{ color: '#4ade80' }} className="animate-pulse">
                $ <span className="animate-blink-cursor">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
