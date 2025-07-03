
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="text-gray-300 text-lg">
              Hello! I'm a passionate developer with a strong foundation in computer engineering and a drive for creating innovative web solutions. My journey began with a Diploma in Computer Engineering, where I developed a solid understanding of both hardware and software fundamentals.
            </p>
            <p className="text-gray-300 text-lg">
              I specialize in web development, focusing on building efficient and user-friendly applications. My technical background in computer engineering combined with my web development skills allows me to approach problems with a unique perspective, creating solutions that are both technically sound and user-focused.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-slate-800 px-4 py-2 rounded-full text-gray-300">🎓 Diploma in Computer Engineering</div>
              <div className="bg-slate-800 px-4 py-2 rounded-full text-gray-300">💻 Web Developer</div>
              <div className="bg-slate-800 px-4 py-2 rounded-full text-gray-300">⚡ Tech Enthusiast</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;