//sanity
import { urlFor } from "../sanity";

const SkillMin = ({ technology }) => {
  return (
    <div className="relative flex justify-center shadow-[#202020] shadow-lg rounded-full">
      <img
        src={urlFor(technology.image).url()}
        className="rounded-full border border-gray-500  object-cover w-12 h-12 p-1"
      />
    </div>
  );
};

export default SkillMin;
