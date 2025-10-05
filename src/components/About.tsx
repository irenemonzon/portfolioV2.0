import { motion } from 'framer-motion'
import { portfolioData, getSkillsByCategory } from '../data/portfolio-data'
import SectionHeader from './ui/SectionHeader'
import { containerVariants, itemVariants } from './ui/animations'

const About = () => {
  const { about } = portfolioData
  const frontendSkills = getSkillsByCategory('Frontend')
  const backendSkills = getSkillsByCategory('Backend')
  const softSkills = getSkillsByCategory('Soft Skills')

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="This is me"
          />

          <motion.div 
            className="space-y-6 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p 
              className="text-gray-300 leading-relaxed text-lg"
              variants={itemVariants}
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              {about.intro}
            </motion.p>

            <motion.p 
              className="text-gray-300 leading-relaxed text-lg"
              variants={itemVariants}
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              {about.background}
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6"
              variants={itemVariants}
            >
              <motion.div 
                className="space-y-3 p-5 rounded-lg bg-slate-700/30 border border-slate-600/30"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.h4 
                  className="font-semibold text-blue-400 text-lg mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  Frontend Development
                </motion.h4>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {frontendSkills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-md text-sm border border-blue-500/30"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        borderColor: "rgba(59, 130, 246, 0.5)",
                        color: "#ffffff"
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                className="space-y-3 p-5 rounded-lg bg-slate-700/30 border border-slate-600/30"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  borderColor: "rgba(147, 51, 234, 0.3)"
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.h4 
                  className="font-semibold text-purple-400 text-lg mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  Backend Development
                </motion.h4>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {backendSkills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-md text-sm border border-purple-500/30"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(147, 51, 234, 0.3)",
                        borderColor: "rgba(147, 51, 234, 0.5)",
                        color: "#ffffff"
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="pt-8"
              variants={itemVariants}
            >
              <motion.h4 
                className="font-semibold text-green-400 text-lg mb-4 text-center md:text-left"
              >
                Soft Skills
              </motion.h4>
              <motion.div 
                className="flex flex-wrap gap-3 justify-center md:justify-start"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(34, 197, 94, 0.3)",
                      borderColor: "rgba(34, 197, 94, 0.5)",
                      color: "#ffffff"
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About