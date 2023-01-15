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
      className="relative flex flex-col md:flex-row h-full md:h-screen max-w-7xl mx-auto px-10 justify-center items-center text-center md:text-left py-16 md:py-0"
    >
      <h3 className="md:absolute top-16 uppercase tracking-[20px] section-title text-2xl md:text-3xl">
        About
      </h3>
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
        className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px] m-10"
      />
      <div className="space-y-6 text-color-custom">
        <h4 className="text-4xl xl:text-5xl font-semibold">
          Here is a <span className="underline decoration-element">little</span>{" "}
          background
        </h4>
        <p className="text-base lg:leading-loose lg:text-lg xl:w-11/12 px-1 sm:px-0">
          {aboutInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
