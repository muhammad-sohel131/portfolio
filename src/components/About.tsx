"use client";

import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50/50">
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
              <p className="text-gray-700 leading-relaxed">
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
              <p className="text-gray-700 leading-relaxed">
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
              <p className="text-gray-700 leading-relaxed">
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
              <p className="text-gray-700 leading-relaxed">
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
              >
                Let&apos;s Connect
              </Link>
              <Link
                href="https://drive.google.com/file/d/1kzOKH9KZatCm9UKOvd6hb7_el0_F9kOZ/view?usp=sharing"
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Resume
              </Link>
            </div>
          </div>
          {/* Terminal Animation */}
          <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 text-xs font-mono ml-2">
                developer@portfolio:~
              </span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
              <p className="text-green-400">$ whoami</p>
              <p className="text-gray-300">
                Md Sohel - Full Stack Developer @ Sardar IT
              </p>
              <p className="text-gray-300">
                BSc in CSE, Green University of Bangladesh
              </p>
              <p className="text-green-400">$ skills --tech</p>
              <p className="text-gray-300">
                React.js • Next.js • Python • Java • Node.js • Tailwind
              </p>
              <p className="text-green-400">$ achievements --recent</p>
              <p className="text-yellow-400">
                {" "}
                3rd Position - Intra University Programming Contest
              </p>
              <p className="text-yellow-400">
                {" "}
                Excellence Academic Award (Multiple)
              </p>
              <p className="text-green-400 animate-pulse">
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
