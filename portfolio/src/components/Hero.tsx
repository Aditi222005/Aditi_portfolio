import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Hero:React.FC= () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Hi, I'm Aditi
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-6 text-gray-300">
            <Typewriter
              words={['Web Developer', 'Creative Designer', 'Tech Enthusiast']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          <p className="text-gray-400 mb-6">
            Passionate about building beautiful, interactive, and user-focused digital experiences. <br />Let's bring your ideas to life!
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white p-2 rounded-full transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white p-2 rounded-full transition-all duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white p-2 rounded-full transition-all duration-300"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src="src/components/images/pic.jpg"
          alt="Aditi Illustration"
          className="w-72 md:w-96 object-contain rounded-lg border-4 border-indigo-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  )
}

export default Hero
