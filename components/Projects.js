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
      className="relative flex flex-col min-h-screen mx-auto justify-center items-center text-center text-color-custom mb-32 lg:mb-5"
    >
      <div className="w-full absolute top-[30%] bg-color-custom-2 left-0 h-[500px] -skew-y-12 shadow" />
      <button
        onClick={() => {
          setCurrentPoition(currentPosition + 1);
        }}
        className={`${
          currentPosition === projects.length - 1 && "hidden"
        } absolute right-3 top-[40%] sm:top-1/2 md:right-10 z-20 py-5 pl-5 md:p-0 cursor-default`}
      >
        <BsArrowRightCircleFill className="arrow-icon" />
      </button>
      <button
        onClick={() => {
          setCurrentPoition(currentPosition - 1);
        }}
        className={`${
          currentPosition === 0 && "hidden"
        } absolute left-4 top-[40%] sm:top-1/2 md:left-10 z-20 py-5 pr-5 md:p-0 cursor-default`}
      >
        <BsArrowLeftCircleFill className="arrow-icon" />
      </button>
      <div className="uppercase z-10 px-10">
        <h3 className="tracking-[20px] section-title text-2xl md:text-3xl">
          Projects
        </h3>
        <h3 className="pt-6 tracking-[3px] text-color-custom-2 text-sm">
          <span className="md:hidden">Touch</span>
          <span className="hidden md:inline-block">Click</span> the image or
          title to visit the project
        </h3>
      </div>
      <div className="pt-8 md:pt-10 w-full h-full flex z-10">
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
