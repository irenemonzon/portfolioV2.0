import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { SocialLink } from '../../data/portfolio-data'

interface SocialIconProps {
  social: SocialLink
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'hero' | 'footer'
  animated?: boolean
}

const socialVariants: Variants = {
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

const SocialIcon = ({ 
  social, 
  className = "", 
  size = 'md', 
  variant = 'default',
  animated = false 
}: SocialIconProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  }

  const variantClasses = {
    default: 'text-gray-600 hover:text-blue-600 transition-colors',
    hero: 'text-slate-400 hover:text-blue-400 transition-all duration-300 p-4 rounded-full hover:bg-slate-800/30',
    footer: 'text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50'
  }

  const iconSize = sizeClasses[size]
  const variantClass = variantClasses[variant]

  const getHoverColor = () => {
    switch (social.icon) {
      case 'github': return 'hover:text-white'
      case 'linkedin': return 'hover:text-blue-400'
      case 'email': return 'hover:text-purple-400'
      default: return 'hover:text-blue-400'
    }
  }

  const renderIcon = () => {
    switch (social.icon) {
      case 'github':
        return (
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        )
      case 'linkedin':
        return (
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      case 'email':
        return (
          <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'twitter':
        return (
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        )
      case 'website':
        return (
          <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        )
      default:
        return (
          <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )
    }
  }

  const Component = animated ? motion.a : 'a'
  const motionProps = animated ? {
    variants: socialVariants,
    whileHover: { 
      scale: variant === 'hero' ? 1.3 : 1.2,
      y: variant === 'hero' ? -5 : 0,
      rotate: variant === 'footer' ? (social.icon === 'linkedin' ? -5 : 5) : 0,
      boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)"
    },
    whileTap: { scale: variant === 'hero' ? 0.9 : 0.9 }
  } : {}

  return (
    <Component
      href={social.url}
      target={social.icon === 'email' ? undefined : "_blank"}
      rel={social.icon === 'email' ? undefined : "noopener noreferrer"}
      className={`${variantClass} ${variant === 'hero' ? getHoverColor() : ''} ${className}`}
      aria-label={`${social.platform} link`}
      {...motionProps}
    >
      {renderIcon()}
    </Component>
  )
}

export default SocialIcon
