import { motion } from "framer-motion";

//components
import Skill from "./Skill";

const Skills = ({ skills }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col min-h-screen mx-auto px-10 justify-center items-center text-center mb-32 lg:mb-5"
    >
      <div className="w-full absolute top-[20%] bg-color-custom-2 left-0 h-[500px] skew-y-12 shadow-lg" />
      <div className="uppercase z-10">
        <h3 className="tracking-[20px] section-title text-2xl md:text-3xl">
          Skills
        </h3>
        <h3 className="pt-6 tracking-[3px] text-color-custom-2 text-sm">
          <span className="md:hidden">Touch</span>
          <span className="hidden md:inline-block">Hover over</span> a skill to
          see currently proficiency
        </h3>
      </div>
      <div className="pt-8 -mx-6 md:pt-10 flex sm:grid sm:grid-cols-6 flex-wrap items-center justify-center gap-4 sm:gap-5 text-color-custom">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} leftSide />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
