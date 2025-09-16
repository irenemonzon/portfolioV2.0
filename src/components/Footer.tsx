import { motion } from 'framer-motion'
import type { Variants } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

  const itemVariants: Variants  = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const socialVariants: Variants  = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

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
              <motion.div 
                className="flex space-x-4"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.a
                  href="https://github.com/irenemonzon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  aria-label="GitHub"
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/monzonirene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  aria-label="LinkedIn"
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: -5,
                    boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:irene.monzonm@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  aria-label="Email"
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </motion.div>
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
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
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
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
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