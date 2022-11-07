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
      className="relative flex flex-col h-full md:h-screen max-w-full mx-auto justify-start items-center text-center pt-28 pb-20 md:py-0 text-color-custom"
    >
      <div className="w-full absolute top-[30%] bg-color-custom-2 left-0 h-[500px] -skew-y-12" />
      <h3 className="absolute top-16 uppercase tracking-[20px] section-title text-2xl md:text-3xl">
        Projects
      </h3>
      <div className="w-full h-full flex snap-x snap-mandatory z-10 overflow-x-scroll overflow-y-hidden scroll-color-custom">
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
