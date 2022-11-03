import { motion } from "framer-motion";

//components
import SkillMin from "./SkillMin";

//sanity
import { urlFor } from "../sanity";

const Project = ({
  position,
  length,
  project: { title, summary, image, technologies, linkToBuild },
}) => {
  return (
    <div className="flex flex-col h-[85vh] w-screen flex-shrink-0 snap-center space-y-5 items-center justify-center p-16 xl:p-44">
      <a href={linkToBuild} target="_blank" rel="noreferrer">
        <motion.img
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={urlFor(image).url()}
          alt="project-image"
          className="flex-shrink-0 object-cover h-40 md:h-52"
        />
      </a>
      <div className="space-y-6 px-0 flex flex-col items-center">
        <div className="text-center">
          <h5 className="text-2xl underline decoration-element">
            Project {position} of {length}:<br />
          </h5>{" "}
          <a href={linkToBuild} target="_blank" rel="noreferrer">
            <h4 className="text-3xl font-semibold tracking-[8px] uppercase animate-pulse">
              {title}
            </h4>
          </a>
        </div>
        <p className="text-sm xl:text-base">{summary}</p>
        <div className="flex gap-5">
          {technologies.map((technology) => (
            <SkillMin key={technology._id} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
