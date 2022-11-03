import Link from "next/link";
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
    <div className="relative top-14 flex flex-col h-screen justify-center items-center text-center space-y-6 sm:space-y-8 py-16 lg:py-0">
      <BackgroundShapes />
      <img
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
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {role}
        </h2>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold">
          {text} <Cursor cursorColor="#b0ff5d" />
        </h1>
        <div className="pt-5 grid grid-cols-2 gap-x-5 gap-y-3 sm:gap-5 sm:flex">
          <Link href="#about">
            <button className="dev-button">About</button>
          </Link>
          <Link href="#skills">
            <button className="dev-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="dev-button">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="dev-button">Contact</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Developer;
