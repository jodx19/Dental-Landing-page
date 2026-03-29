import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-xl shadow-md overflow-hidden',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
