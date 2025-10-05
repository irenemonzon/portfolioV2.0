import { motion } from 'framer-motion'
import { itemVariants } from './animations'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeader = ({ title, subtitle, className = '' }: SectionHeaderProps) => {
  return (
    <motion.div 
      className={`text-center mb-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"
        variants={itemVariants}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      {subtitle && (
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeader