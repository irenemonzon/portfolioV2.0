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
              className="grid grid-cols-2 gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-slate-700/30 border border-slate-600/30"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.h4 
                  className="font-semibold text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >
                  Frontend
                </motion.h4>
                <motion.ul 
                  className="text-sm text-gray-400 space-y-1"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {frontendSkills.slice(0, 4).map((skill) => (
                    <motion.li 
                      key={skill.name}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ 
                        x: 5,
                        color: "#60a5fa"
                      }}
                    >
                      • {skill.name}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-slate-700/30 border border-slate-600/30"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  borderColor: "rgba(147, 51, 234, 0.3)"
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.h4 
                  className="font-semibold text-purple-400"
                  whileHover={{ scale: 1.05 }}
                >
                  Backend
                </motion.h4>
                <motion.ul 
                  className="text-sm text-gray-400 space-y-1"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                >
                  {backendSkills.slice(0, 4).map((skill) => (
                    <motion.li 
                      key={skill.name}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ 
                        x: 5,
                        color: "#a855f7"
                      }}
                    >
                      • {skill.name}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
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
        </div>
      </div>
    </section>
  )
}

export default About