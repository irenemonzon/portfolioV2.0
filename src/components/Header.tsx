import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection, navigationItems } from '../utils/common'

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

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

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
              onClick={() => handleNavClick('hero')}
              className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-300"
            >
              Irene Monzon
            </motion.button>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-blue-400 focus:outline-none p-2 rounded-md border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              aria-label="Toggle mobile menu"
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
            <>
              {/* Backdrop */}
              <motion.div
                className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg overflow-hidden min-h-screen sm:min-h-fit z-50"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
              <div className="px-4 pt-4 pb-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
                  <span className="text-lg font-semibold text-white">Navigation</span>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-400 hover:text-white p-2 rounded-md transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                {/* Navigation Items */}
                <div className="space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-slate-300 hover:text-white hover:bg-slate-800/50 block px-6 py-4 rounded-lg text-lg font-medium w-full text-left transition-all duration-300 relative group border border-transparent hover:border-slate-600/50"
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
              </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header