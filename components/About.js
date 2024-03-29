import { motion } from "framer-motion";

//sanity
import { urlFor } from "../sanity";

const About = ({ pageInfo: { aboutPhoto, aboutInformation } }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col min-h-screen max-w-7xl mx-auto px-10 justify-center items-center text-center lg:text-justify mb-32 lg:mb-5 z-20"
    >
      <h3 className="uppercase tracking-[20px] section-title text-2xl md:text-3xl">
        About
      </h3>
      <div className="pt-8 md:pt-10 flex flex-col lg:flex-row items-center justify-center text-color-custom">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={urlFor(aboutPhoto).url()}
          alt="developer"
          className="w-56 h-56 rounded-full object-cover lg:rounded-lg lg:w-64 lg:h-96 xl:w-[350px] xl:h-[450px] m-10 shadow-lg shadow-[#202020]"
        />
        <div className="space-y-6 text-color-custom">
          <h4 className="text-4xl xl:text-5xl font-medium">
            Here is a{" "}
            <span className="underline decoration-element">little</span>{" "}
            background
          </h4>
          <p className="text-base lg:leading-loose lg:text-lg xl:w-11/12 px-1 sm:px-0 font-thin">
            {aboutInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
