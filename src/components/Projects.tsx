import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio-data'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import { containerVariants, cardVariants, scaleVariants, staggerContainer } from './ui/animations'
import { scrollToSection } from '../utils/common'

const Projects = () => {
  const {projects}=portfolioData

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Here are some of my recent projects that showcase my skills in full-stack development"
          />

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
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden group flex flex-col h-full"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-t-xl border-b border-slate-700/30 h-48 md:h-56 lg:h-64 bg-slate-900/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: project.focalPoint ?? 'center' }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <span className="text-sm text-gray-400">No preview</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
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
                    variants={staggerContainer}
                  >
                    {project.technologies.map((tech, index) => (
                      <motion.span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600/30"
                          style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', borderColor: 'rgba(148, 163, 184, 0.18)' }}
                          variants={scaleVariants}
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
                        <li 
                          key={index}
                         
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col gap-2 mt-auto"
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
            <Button
              onClick={() => scrollToSection('contact')}
              variant="secondary"
              size="md"
              className="rounded-lg"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects