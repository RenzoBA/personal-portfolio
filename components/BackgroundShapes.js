import { motion } from "framer-motion";

const BackgroundShapes = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.4, 1.6, 0.9, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        ease: "easeInOut",
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border-2 border-[#555555] opacity-60 rounded-full h-[560px] w-[575px] mt-52 animate-spin" />
      <div className=" absolute border-2 border-[#555555] opacity-60 rounded-full h-[575px] w-[560px] mt-52 animate-spin" />
      <div className=" absolute border-2 border-[#555555] opacity-10 rounded-full h-[495px] w-[480px] mt-52 animate-spin" />
      <div className=" absolute border-2 border-[#555555] opacity-10 rounded-full h-[480px] w-[495px] mt-52 animate-spin" />
    </motion.div>
  );
};

export default BackgroundShapes;
