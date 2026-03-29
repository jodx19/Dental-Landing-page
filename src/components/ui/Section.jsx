import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Section = ({ children, className, id, ...props }) => {
  return (
    <motion.section
      id={id}
      className={cn('py-16 px-4 md:px-8', className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.section>
  );
};
