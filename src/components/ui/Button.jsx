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
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 cursor-pointer active:scale-95';
  
  const variants = {
    primary: 'bg-primaryGold text-textHeading hover:bg-darkGold hover:text-white shadow-lg hover:shadow-xl border-none',
    secondary: 'bg-white text-textHeading border-2 border-primaryGold hover:bg-primaryGold/10',
    outline: 'bg-transparent text-primaryGold border-2 border-primaryGold hover:bg-primaryGold hover:text-textHeading',
    dark: 'bg-primaryDark text-white hover:bg-black',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };
  
  return (
    <motion.button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
