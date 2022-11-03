import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

//components
import BackgroundShapes from "./BackgroundShapes";

//sanity
import { urlFor } from "../sanity";

const Developer = ({ pageInfo: { role, profilePhoto, profileWords } }) => {
  const [text] = useTypewriter({
    words: profileWords,
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="relative top-8 flex flex-col h-screen justify-center items-center text-center space-y-6 sm:space-y-8 py-16 lg:py-0">
      <BackgroundShapes />
      <Image
        className="rounded-full object-cover"
        src={urlFor(profilePhoto).url()}
        alt="profile-photo"
        width={120}
        height={120}
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="z-10 flex flex-col items-center"
      >
        <h2 className="text-xs sm:text-sm uppercase text-color-custom-2 pb-2 tracking-[15px]">
          {role}
        </h2>
        <h1 className="text-color-custom text-3xl sm:text-5xl lg:text-6xl font-semibold">
          {text} <Cursor cursorColor="#f1f15d" />
        </h1>
        <div className="pt-5 grid grid-cols-2 gap-x-5 gap-y-3 sm:gap-5 sm:flex">
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
    </div>
  );
};

export default Developer;
