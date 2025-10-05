import { motion } from 'framer-motion'
import Button from './ui/Button'
import SocialIcons from './ui/SocialIcons'
import { scrollToSection, navigationItems } from '../utils/common'
import { containerVariants, itemVariants } from './ui/animations'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="md:col-span-2"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Irene Monzon
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-4 max-w-md"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                Full Stack Developer passionate about creating modern web applications 
                with React, Next.js, and TypeScript.
              </motion.p>
              <SocialIcons 
                variant="footer"
                animated={true}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.h4 
                className="text-lg font-semibold mb-4 text-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                Navigation
              </motion.h4>
              <motion.ul 
                className="space-y-2"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {navigationItems.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                      whileHover={{ 
                        x: 5,
                        color: "#60a5fa"
                      }}
                    >
                      {item.name}
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.h4 
                className="text-lg font-semibold text-purple-400"
                whileHover={{ scale: 1.05 }}
              >
                Let's Connect
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm"
                whileHover={{ color: "#ffffff" }}
              >
                Ready to start your next project? Let's discuss how we can work together.
              </motion.p>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="primary"
                size="sm"
                className="rounded-lg"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#9ca3af" }}
            >
              © {currentYear} Irene Monzon. All rights reserved.
            </motion.p>
            <motion.p 
              className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center"
              whileHover={{ color: "#9ca3af" }}
            >
              Built with 
              <motion.span
                className="mx-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ❤️
              </motion.span>
              using React, TypeScript & Tailwind CSS
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer