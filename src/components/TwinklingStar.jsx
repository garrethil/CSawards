import { motion } from "framer-motion";

const TwinklingStar = () => {
  return (
    <motion.span
      initial={{ opacity: 0.8, scale: 1 }}
      animate={{
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.2, 1],
        textShadow: [
          "0px 0px 2px rgba(255, 255, 255, 0.5)",
          "0px 0px 6px rgba(255, 255, 255, 0.8)",
          "0px 0px 2px rgba(255, 255, 255, 0.5)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="text-default" // Tailwind class for default text color
    >
      ★
    </motion.span>
  );
};

export default TwinklingStar;
