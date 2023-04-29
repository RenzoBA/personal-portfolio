import { motion } from "framer-motion";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Hero = ({ socials, pageInfo: { name, role } }) => {
  return (
    <div className="relative flex flex-col min-h-screen justify-center items-center text-center bg-color-custom-2 mb-32 lg:mb-5 z-20">
      <div className="absolute -bottom-24 md:-bottom-40 bg-color-custom-2 w-full h-96 -skew-y-12 shadow-lg -z-20" />
      <div className="z-10 w-full flex flex-col gap-10 items-center justify-end text-center">
        <div className="relative w-full flex flex-col justify-center py-10 bg-color-custom shadow">
          <h2 className="text-sm sm:text-base md:text-lg uppercase font-light text-color-custom-2 tracking-[8px] sm:tracking-[15px]">
            {role}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#2e3133] drop-shadow-lg shadow-[#2a2c2e] uppercase">
            {name}
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <motion.a
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              ease: "easeOut",
              delay: 1.5,
              duration: 1,
            }}
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
          </motion.a>
          <motion.a
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              ease: "easeOut",
              delay: 2,
              duration: 1,
            }}
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
          </motion.a>
          <motion.a
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              ease: "easeOut",
              delay: 2.5,
              duration: 1,
            }}
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
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
