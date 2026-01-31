import { motion } from "framer-motion";

const Card = ({ children, className, ...props }) => {
  return (
    <motion.div
      className={`
        bg-surface
        border border-surface/10
        rounded-2xl
        p-6
        ${className}
        `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
