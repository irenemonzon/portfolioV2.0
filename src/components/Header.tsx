import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700/30' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-300"
            >
              Irene Monzon
            </motion.button>
          </motion.div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-300 relative group"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {/* Underline effect matching Figma */}
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.button>
            ))}
          </div>

          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-blue-400 focus:outline-none p-2 rounded-md"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                    open: { d: "M6 18L18 6M6 6l12 12" }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-300 hover:text-white hover:bg-slate-800/50 block px-4 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-300 relative group"
                    variants={itemVariants}
                    whileHover={{ 
                      x: 8,
                      backgroundColor: "rgba(30, 41, 59, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="flex items-center"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-blue-400 mr-3 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.2 }}
                      />
                      {item.name}
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header