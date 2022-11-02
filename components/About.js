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
      className="flex flex-col relative h-screen text-center max-w-7xl px-10 justify-evenly items-center mx-auto md:text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="-mb-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#b0ff5d]">little</span>{" "}
          background
        </h4>
        <p className="text-sm">{aboutInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
