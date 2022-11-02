import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

//components
import BackgroundShapes from "../components/BackgroundShapes";

//sanity
import { urlFor } from "../sanity";

const Developer = ({ pageInfo: { role, profilePhoto, profileWords } }) => {
  const [text] = useTypewriter({
    words: profileWords,
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="relative flex flex-col space-y-8 justify-center items-center h-screen">
      <BackgroundShapes />
      <img
        className="relative rounded-full mx-auto object-cover"
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
        className="z-1 flex flex-col items-center"
      >
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            {text} <Cursor cursorColor="#b0ff5d" />
          </span>
        </h1>
        <div className="pt-5 space-x-2 z-20">
          <Link href="#about">
            <button className="devButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="devButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="devButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="devButton">Contact</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Developer;
