"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "> Md Sohel";

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl w-full px-6 md:px-10 mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-full border border-blue-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-mono text-blue-700">
                Open for opportunities
              </span>
            </div>

            <div>
              <h1 className="font-mono text-2xl md:text-3xl text-blue-600 mb-3">
                {displayText}
                <span className="animate-blink-cursor inline-block w-0.5 h-6 bg-blue-600 ml-1"></span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Software
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  {" "}
                  Engineer
                </span>
              </h2>
              <p className="text-xl text-gray-600 mt-4 max-w-lg mx-auto lg:mx-0">
                Building innovative, scalable, and user-focused solutions with
                modern tech stack.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
             <div className="relative mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-quote-left text-blue-600 text-2xl"></i>
                <span className="font-mono text-sm text-gray-500">mission statement</span>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                I enjoy building meaningful products, solving challenging problems, and continuously pushing my limits 
                to become a better developer every day.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-white text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold">Md Sohel</p>
                  <p className="text-xs text-gray-500 font-mono">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right Side - Image and Terminal */}
          <div className="flex-1 w-full max-w-md space-y-6">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1">
                <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-square">
                  <Image
                    src="/meImage.png"
                    alt="Md Sohel - Full Stack Developer"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;