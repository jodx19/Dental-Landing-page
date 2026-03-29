import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-dark hover:bg-opacity-80 border-2 border-accent',
    outline: 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
