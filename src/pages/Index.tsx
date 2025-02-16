
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const handleCollaborate = () => {
    window.location.href = "mailto:komalpatkar05@gmail.com";
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              left: `${Math.random() * 100}%`,
              top: "100%",
              rotate: 0,
              opacity: 0.8
            }}
            animate={{
              top: "-10%",
              left: `${Math.random() * 100}%`,
              rotate: 360,
              opacity: 0
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <div 
              className="w-6 h-6 md:w-8 md:h-8"
              style={{
                background: `radial-gradient(circle at 30% 30%, #D946EF, #FFDEE2)`,
                clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
                transform: "rotate(45deg)"
              }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyberpunk-blue/5 to-transparent"></div>
      </div>
      
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 font-great-vibes"
        >
          Komal <span className="ml-2">Patkar</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl text-cyberpunk-blue mb-8 font-freckle-face"
        >
          MERN Stack Developer
        </motion.div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-cyberpunk-pink">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate MERN Stack Developer with a strong foundation in web development.
          I specialize in building scalable web applications using modern technologies.
          My approach combines technical expertise with creative problem-solving to deliver
          exceptional user experiences.
        </p>
      </section>

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

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-cyberpunk-pink">Skills & Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Supabase", img: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
            { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
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
              href="https://github.com/komalpatkar?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyberpunk-blue transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/komal-patkar-5a5b02220?"
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
