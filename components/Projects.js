import { motion } from "framer-motion";

//components
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center max-w-full overflow-hidden h-screen justify-evenly items-center px-10 mx-auto z-0 md:text-left"
    >
      <div className="w-full absolute top-[30%] bg-[#b1ff5d78]/10 left-0 h-[500px] -skew-y-12" />
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex snap-x snap-mandatory z-20 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-[#b0ff5d] scrollbar-track-gray-400/20">
        {projects.map((project, i) => (
          <Project
            project={project}
            key={project._id}
            position={i + 1}
            length={projects.length}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
