
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createMatrixBackground = () => {
      if (!matrixRef.current) return;
      
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const numberOfCharacters = 50;
      
      matrixRef.current.innerHTML = "";
      
      for (let i = 0; i < numberOfCharacters; i++) {
        const span = document.createElement("span");
        span.className = "matrix-character";
        span.style.left = `${Math.random() * 100}%`;
        span.style.animationDelay = `${Math.random() * 20}s`;
        span.textContent = characters[Math.floor(Math.random() * characters.length)];
        matrixRef.current.appendChild(span);
      }
    };

    createMatrixBackground();
    const interval = setInterval(createMatrixBackground, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleCollaborate = () => {
    window.location.href = "mailto:abc@gmail.com";
  };

  return (
    <div className="min-h-screen relative">
      <div ref={matrixRef} className="matrix-bg" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Komal Patkar
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-cyberpunk-blue mb-8"
        >
          MERN Stack Developer
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-cyberpunk-pink">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate MERN Stack Developer with a strong foundation in web development.
          I specialize in building scalable web applications using modern technologies.
          My approach combines technical expertise with creative problem-solving to deliver
          exceptional user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-cyberpunk-pink">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "AI Image Generator",
              description: "Generate unique images using AI technology",
              github: "https://github.com/username/ai-image-generator"
            },
            {
              title: "BLCassests",
              description: "Blockchain assets management platform",
              github: "https://github.com/username/blcassests"
            },
            {
              title: "Crop Disease Detection",
              description: "AI-powered crop disease detection and yield prediction",
              github: "https://github.com/username/crop-disease-detection"
            },
            {
              title: "Gift Recommendation",
              description: "Smart gift recommendation system",
              github: "https://github.com/username/gift-recommendation"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-cyberpunk-blue">{project.title}</h3>
              <p className="mb-6 text-gray-300">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyberpunk-blue/20 hover:bg-cyberpunk-blue/30 text-cyberpunk-blue px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-cyberpunk-pink">Skills & Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "HTML", img: "/tech/html.svg" },
            { name: "CSS", img: "/tech/css.svg" },
            { name: "JavaScript", img: "/tech/javascript.svg" },
            { name: "React", img: "/tech/react.svg" },
            { name: "TypeScript", img: "/tech/typescript.svg" },
            { name: "Tailwind", img: "/tech/tailwind.svg" },
            { name: "Node.js", img: "/tech/nodejs.svg" },
            { name: "MongoDB", img: "/tech/mongodb.svg" },
            { name: "Python", img: "/tech/python.svg" },
            { name: "SQL", img: "/tech/sql.svg" },
            { name: "Supabase", img: "/tech/supabase.svg" },
            { name: "Postman", img: "/tech/postman.svg" }
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="tech-icon"
              />
              <span className="text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 text-cyberpunk-pink">Let's Collaborate</h2>
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={handleCollaborate}
            className="bg-cyberpunk-blue hover:bg-cyberpunk-blue/80 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
          >
            <Mail size={20} />
            Collaborate
          </button>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyberpunk-blue transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyberpunk-blue transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
