//sanity
import Image from "next/image";
import { urlFor } from "../sanity";

const SkillMin = ({ technology }) => {
  return (
    <div className="relative flex justify-center w-12 h-12 cursor-default bg-skill-custom shadow-[#202020] shadow-lg rounded-full ">
      <Image
        src={urlFor(technology.image).url()}
        width={100}
        height={100}
        alt={technology.title}
        className="rounded-full border border-gray-500 object-cover p-1"
      />
    </div>
  );
};

export default SkillMin;
