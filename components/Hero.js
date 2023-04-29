import { motion } from "framer-motion";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Hero = ({ socials, pageInfo: { name, role } }) => {
  return (
    <div className="relative flex flex-col h-screen justify-center items-center text-center">
      <motion.div
        initial={{
          x: -400,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
        className="z-10 w-full flex flex-col gap-10 items-center justify-end text-center"
      >
        <div className="relative w-full flex flex-col justify-center py-10 bg-color-custom-2">
          <h2 className="text-lg sm:text-xl uppercase font-light text-color-custom tracking-[8px] sm:tracking-[15px]">
            {role}
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-strong text-[#f1d85d] animate-pulse">
            {name}
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <a
            href={socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-row justify-start items-center gap-3 transition-colors text-start"
          >
            <div className="rounded-full sm:group-hover:bg-[#0d1116] flex justify-center items-center transition-colors">
              <BsGithub className="hero-icon" />
            </div>
            <div>
              <h3 className="text-lg">{socials[0].title}</h3>
              <p className="text-xs text-color-custom-2">{socials[0].url}</p>
            </div>
          </a>
          <a
            href={socials[1].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-row justify-start items-center gap-3 transition-colors text-start"
          >
            <div className="rounded-full sm:group-hover:bg-[#0077b5] flex justify-center items-center transition-colors">
              <GrLinkedinOption className="hero-icon" />
            </div>
            <div>
              <h3 className="text-lg">{socials[1].title}</h3>
              <p className="text-xs text-color-custom-2">{socials[1].url}</p>
            </div>
          </a>
          <a
            href={socials[2].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-row justify-start items-center gap-3 transition-colors text-start"
          >
            <div className="rounded-full sm:group-hover:bg-[#1da1f2] flex justify-center items-center transition-colors">
              <BsTwitter className="hero-icon" />
            </div>
            <div>
              <h3 className="text-lg">{socials[2].title}</h3>
              <p className="text-xs text-color-custom-2">{socials[2].url}</p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
