
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Akatsuki Projects Hub',
      description: 'A modern web platform showcasing exceptional software projects. Features a sleek UI with gradient animations, project filtering, and detailed project showcases. Built with React and styled using Tailwind CSS.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfzvkR5Rv2_aOCKqxbEAItSh3MkB701A1hA&s',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Aditi222005/ReactCohort',
      live: 'https://react-cohort-86yi.vercel.app/',
    },
    {
      title: 'Student Feedback Management System',
      description: 'A comprehensive system for managing student feedback in educational institutions. Features include feedback submission, analysis, and reporting tools to improve the learning experience.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiju6d5i8A70vbcWMdwBzS-bGo4VicEzCWg&s',
      tags: ['Java', 'Database', 'User Authentication'],
      github: 'https://github.com/Aditi222005/Student-Feedback-Management-System',
      live: '#',
    },
    {
      title: 'BakeryHub',
      description: 'An e-commerce platform for bakery products featuring a modern UI, product catalog, shopping cart, and order management system. Designed to provide a seamless shopping experience for bakery items.',
      image: 'https://play-lh.googleusercontent.com/7kwC3Qg2hfWm6afqM73YwOjxbNumy_znyRXeQae3moeJjE4ShVi5qgOrMEApgXEw4BE',
      tags: ['Android', 'Java'],
      github: 'https://github.com/Aditi222005/BakeryHub',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-200 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-slate-700 text-indigo-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 