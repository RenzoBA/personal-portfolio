import Link from "next/link";
import { motion } from "framer-motion";

const Developer = ({ pageInfo: { name, role } }) => {
  return (
    <div className="relative flex flex-col h-screen justify-center items-center text-center ">
      <motion.div
        initial={{
          x: -200,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
        className="z-10 w-full flex flex-col items-start justify-end pl-3 sm:pl-5 md:pl-7 lg:pl-12 text-left"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#f1d85d] animate-pulse">
          {name}
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[84px] uppercase font-semibold text-color-custom pb-2 tracking-[15px]">
          {role}
        </h2>
        <div className="pt-5 gap-5 sm:gap-16 flex">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="hero-button">Contact</button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0.4,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 1.5,
          delay: 1,
        }}
        className="z-1 w-full"
      >
        <div className="bg-animated" />
        <div className="bg-animated bg-animated-2" />
        <div className="bg-animated bg-animated-3" />
      </motion.div>
    </div>
  );
};

export default Developer;
