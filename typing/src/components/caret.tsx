import { motion } from 'framer-motion';

const Caret = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut'}}
      className='inline-block bg-airbnb_yellow '  
      style={{height: '1rem', width: '0.1rem'}} 
    >
      
    </motion.div>
  );
};

export default Caret;
