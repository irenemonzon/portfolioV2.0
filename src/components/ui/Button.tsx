import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  animated?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  animated = true,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg',
    secondary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white',
    outline: 'border-2 border-slate-400 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-white'
  }
  
  const sizeClasses = {
    sm: 'py-2 px-6 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg'
  }
  
  if (animated) {
    return (
      <motion.button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: variant === 'primary' 
            ? "0 20px 40px rgba(147, 51, 234, 0.4)"
            : variant === 'secondary'
            ? "0 15px 40px rgba(59, 130, 246, 0.3)"
            : "0 10px 30px rgba(148, 163, 184, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    )
  }
  
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button