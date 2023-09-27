import { motion } from "framer-motion";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Hero = ({ socials, pageInfo: { name, role } }) => {
  return (
    <div className="relative min-h-screen bg-zinc-800">
      <div className="absolute -bottom-24 md:-bottom-40 bg-color-custom-2 w-full h-96 -skew-y-12 shadow-lg z-0" />
      <div className="absolute top-20 md:top-5 bg-color-custom-2 w-full h-96 skew-y-12 shadow-lg z-0" />
      <div className="space-y-10 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center w-full space-y-2 uppercase z-10">
          <h2 className="text-xs sm:text-base md:text-lg font-light text-color-custom-2 tracking-[12px] animate-pulse">
            {role}
          </h2>
          <h1 className="leading-none text-6xl sm:text-7xl md:text-8xl text-color-custom font-thin">
            {name}
          </h1>
        </div>
        <div className="space-y-10 z-10">
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
              delay: 1.2,
              duration: 1,
            }}
            href={socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-row justify-start items-center gap-3 text-start text-color-custom-2 w-fit mr-auto"
          >
            <BsGithub className="hero-icon group-hover:text-color-custom transition-all text-color-custom md:text-color-custom-2" />
            <div>
              <h3 className="text-xl md:text-2xl group-hover:text-color-custom transition-all text-color-custom md:text-color-custom-2 font-light">
                {socials[0].title}
              </h3>
              <p className="text-sm w-40 truncate md:w-full">
                {socials[0].url.slice(8)}
              </p>
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
              delay: 1.7,
              duration: 1,
            }}
            href={socials[1].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-row justify-start items-center gap-3 text-start text-color-custom-2 w-fit mr-auto"
          >
            <GrLinkedinOption className="hero-icon group-hover:text-color-custom transition-all text-color-custom md:text-color-custom-2" />
            <div>
              <h3 className="text-xl md:text-2xl group-hover:text-color-custom transition-all text-color-custom md:text-color-custom-2 font-light">
                {socials[1].title}
              </h3>
              <p className="text-sm w-40 truncate md:w-full">
                {socials[1].url.slice(12)}
              </p>
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
              delay: 2.2,
              duration: 1,
            }}
            href={socials[2].url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-row justify-start items-center gap-3 text-start text-color-custom-2 w-fit mr-auto"
          >
            <BsTwitter className="hero-icon group-hover:text-color-custom transition-all text-color-custom md:text-color-custom-2" />
            <div>
              <h3 className="text-xl md:text-2xl group-hover:text-color-custom transition-all text-color-custom md:text-color-custom-2 font-light">
                {socials[2].title}
              </h3>
              <p className="text-sm w-40 truncate md:w-full">
                {socials[2].url.slice(8)}
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
