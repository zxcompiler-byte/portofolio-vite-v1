import { motion } from "framer-motion";

const Card = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={`
        bg-surface 
        border border-white/5 
        rounded-2xl 
        p-6 
        shadow-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
