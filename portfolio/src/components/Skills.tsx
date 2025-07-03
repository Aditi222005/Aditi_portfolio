import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMysql } from 'react-icons/si'
import { SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si'

const Skills:React.FC = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 50 },
    {
  name: 'MERN Stack',
  icon: (
    <div className="flex space-x-1 text-2xl">
      <SiMongodb />
      <SiExpress />
      <FaReact />
      <SiNodedotjs />
    </div>
  ),
  level: 85
},

  ]

  const experiences = [
    {
        title: 'Technical Member',
        company: 'Google Developer Group (GDG) Club',
        period: '2024- 2025-Present',
        description: 'Active member of the GDG community, participating in tech workshops, coding sessions, and developer meetups. Contributing to knowledge sharing and collaborative learning in web development and emerging technologies.',
      },
      {
        title: '2nd Runner-up at National Level Hackethon',
        company: 'Government College of Engineering, Jalgaon',
        period: '2025',
        description: 'Achieved 2nd Runner-up position in a prestigious National Level Hackathon by developing an innovative solution for agriculture field- Ai Seed Weed detection website . Collaborated with a team to design and implement a project using advanced programming techniques, showcasing creativity, teamwork, and technical expertise.',
      },
      {
        title: 'Computer Engineering Diploma',
        company: 'Government Polytechnic, Jalgaon',
        period: '2021 - 2024',
        description: 'Completed diploma with focus on computer fundamentals, programming, and web technologies. Developed strong problem-solving and technical skills.',
      },
     
    {
      title: 'Full Stack Developer Intern',
      company: 'Sumago Infotech Pvt. Ltd. ',
      period: '2023',
      description: 'Working on full stack web applications in java, focusing on responsive design and user experience.',
    },
    
   
  ]

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Skills & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
           
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300"
            >
              <div className="text-4xl mb-4 text-indigo-400">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-6">
                <div className="md:col-span-1 text-indigo-400 font-semibold">
                  {exp.period}
                </div>
                <div className="md:col-span-4">
                  <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-200 mb-2">{exp.title}</h3>
                    <h4 className="text-indigo-400 mb-4">{exp.company}</h4>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills