import { motion } from 'framer-motion'
import SocialIcon from './SocialIcon'
import { getSocialLinks } from '../../utils/common'
import { staggerContainer } from './animations'

interface SocialIconsProps {
  variant?: 'hero' | 'footer' | 'default'
  className?: string
  animated?: boolean
}

const SocialIcons = ({ variant = 'default', className = '', animated = true }: SocialIconsProps) => {
  const socialLinks = getSocialLinks()
  
  return (
    <motion.div 
      className={`flex space-x-4 ${className}`}
      variants={animated ? staggerContainer : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
    >
      {socialLinks.map((social) => (
        <SocialIcon
          key={social.platform}
          social={social}
          variant={variant}
          animated={animated}
        />
      ))}
    </motion.div>
  )
}

export default SocialIcons