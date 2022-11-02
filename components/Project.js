import { motion } from "framer-motion";

//components
import SkillMin from "./SkillMin";

//sanity
import { urlFor } from "../sanity";

const Project = ({
  position,
  length,
  project: { title, summary, image, technologies },
}) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 xl:p-44 h-screen ">
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={urlFor(image).url()}
        alt="project-image"
        className="flex-shrink-0 object-cover h-32 md:h-44"
      />
      <div className="space-y-6 px-0 flex flex-col items-center">
        <div className="text-center">
          <h5 className="text-2xl underline decoration-[#b0ff5d]">
            Project {position} of {length}:<br />
          </h5>{" "}
          <h4 className="text-3xl font-semibold tracking-[8px] uppercase animate-pulse">
            {title}
          </h4>
        </div>
        <p className="font-light">{summary}</p>
        <div className="flex gap-5">
          {technologies.map((technology) => (
            <SkillMin key={technology._key} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
