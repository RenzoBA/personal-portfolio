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
      className="relative flex flex-col h-full md:h-screen max-w-7xl mx-auto px-10 justify-center items-center text-center md:text-left py-16 pb-20 md:py-0"
    >
      <h3 className="md:absolute top-16 uppercase tracking-[20px] text-color-custom-2 text-2xl">
        Skills
      </h3>
      <h3 className="pt-6 uppercase tracking-[3px] text-color-custom-2 text-sm">
        <span className="md:hidden">Touch</span>
        <span className="hidden md:inline-block">Hover over</span> a skill to
        see currently proficiency
      </h3>
      <div className="pt-8 md:pt-10 flex sm:grid sm:grid-cols-5 flex-wrap items-center justify-center gap-5 text-color-custom">
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
