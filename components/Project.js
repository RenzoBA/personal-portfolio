import { motion } from "framer-motion";

//components
import SkillMin from "./SkillMin";

//sanity
import { urlFor } from "../sanity";

const Project = ({
  position,
  length,
  currentProject,
  project: { title, summary, image, technologies, linkToBuild },
}) => {
  return (
    <div
      className={`${
        currentProject === position ? "flex" : "hidden"
      } flex-col w-screen flex-shrink-0 snap-center space-y-5 items-center justify-center px-10 pb-8 lg:pb-0`}
    >
      <a href={linkToBuild} target="_blank" rel="noreferrer">
        <motion.img
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={urlFor(image).url()}
          alt="project-image"
          className="flex-shrink-0 object-cover w-[350px] sm:w-[450px]"
        />
      </a>
      <div className="space-y-6 px-5 flex flex-col items-center">
        <div className="text-center">
          <h5 className="text-2xl underline decoration-element font-thin">
            Project {position + 1} of {length}
            <br />
          </h5>{" "}
          <a href={linkToBuild} target="_blank" rel="noreferrer">
            <h4 className="text-3xl md:text-3xl tracking-[8px] uppercase">
              {title}
            </h4>
          </a>
        </div>
        <p className="text-base lg:text-lg font-thin">{summary}</p>
        <div className="flex flex-wrap justify-center gap-5">
          {technologies.map((technology) => (
            <SkillMin key={technology._id} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
