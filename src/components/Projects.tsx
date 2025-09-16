import { motion } from 'framer-motion'
import type { Variants } from "framer-motion";
import { portfolioData } from '../data/portfolio-data';

const Projects = () => {
  const {projects}=portfolioData
  

  const containerVariants: Variants  = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={cardVariants}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"
              variants={cardVariants}
              whileInView={{ width: [0, 80] }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p 
              className="text-gray-300 max-w-2xl mx-auto"
              variants={cardVariants}
            >
              Here are some of my recent projects that showcase my skills in full-stack development
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden group"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-white font-semibold text-lg">Project Preview</span>
                  </motion.div>
                  <motion.div
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 text-sm mb-4 leading-relaxed"
                    whileHover={{ color: "#d1d5db" }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600/30"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                          borderColor: "rgba(59, 130, 246, 0.4)",
                          color: "#ffffff"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            x: 5,
                            color: "#9ca3af"
                          }}
                        >
                          • {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex gap-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-slate-600 hover:border-blue-400 text-gray-300 hover:text-white text-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgba(59, 130, 246, 0.1)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Code
                      </motion.a>
                    </div>
                    
                    {project.adminUrl && (
                      <div className="flex gap-2 text-xs">
                        <motion.a
                          href={project.adminUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white text-center py-2 px-3 rounded text-xs transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Admin Panel
                        </motion.a>
                        <motion.a
                          href={project.ordersUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white text-center py-2 px-3 rounded text-xs transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Orders View
                        </motion.a>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.p 
              className="text-gray-300 mb-6"
              whileHover={{ color: "#ffffff" }}
            >
              Want to see more projects or discuss a collaboration?
            </motion.p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects