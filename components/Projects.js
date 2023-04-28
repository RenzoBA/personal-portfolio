import { motion } from "framer-motion";

//components
import Project from "./Project";

//icons
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const Projects = ({ projects }) => {
  const [currentPosition, setCurrentPoition] = useState(0);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-full md:h-screen max-w-full mx-auto justify-center items-center text-center pt-28 pb-20 md:py-0 text-color-custom"
    >
      <div className="w-full absolute top-[30%] bg-color-custom-2 left-0 h-[500px] -skew-y-12" />
      <button
        onClick={() => {
          setCurrentPoition(currentPosition + 1);
        }}
        className={`${
          currentPosition === projects.length - 1 && "hidden"
        } absolute right-3 top-[50%] sm:top-1/2 md:right-10 z-20 py-5 pl-5 md:p-0 cursor-default`}
      >
        <BsArrowRightCircleFill className="arrow-icon" />
      </button>
      <button
        onClick={() => {
          setCurrentPoition(currentPosition - 1);
        }}
        className={`${
          currentPosition === 0 && "hidden"
        } absolute left-4 top-[50%] sm:top-1/2 md:left-10 z-20 py-5 pr-5 md:p-0 cursor-default`}
      >
        <BsArrowLeftCircleFill className="arrow-icon" />
      </button>
      <h3 className="md:absolute top-16 uppercase tracking-[20px] section-title text-2xl md:text-3xl">
        Projects
      </h3>
      <h3 className="pt-6 uppercase tracking-[3px] text-color-custom-2 text-sm md:pt-[9.7rem] px-10">
        <span className="md:hidden">Touch</span>
        <span className="hidden md:inline-block">Click</span> the image or title
        to visit the project
      </h3>
      <div className="pt-8 md:pt-0 w-full h-full flex z-10">
        {projects.map((project, i) => (
          <Project
            project={project}
            key={project._id}
            position={i}
            length={projects.length}
            currentProject={currentPosition}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
