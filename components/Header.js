import { motion } from "framer-motion";

//icons
import { BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

const Header = ({ socials }) => {
  return (
    <header className="sticky top-0 max-w-7xl mx-auto p-5 text-gray-500 text-2xl flex justify-between z-20 xl:items-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        className="flex flex-row items-center gap-5 w-full"
      >
        <a href={socials[0].url} target="_blank">
          <BsLinkedin className="cursor-pointer hover:text-[#b0ff5d] transition-all" />
        </a>
        <a href={socials[1].url} target="_blank">
          <BsGithub className="cursor-pointer hover:text-[#b0ff5d] transition-all" />
        </a>
        <button className="gap-2 flex ml-auto items-center hover:text-[#b0ff5d] transition-all">
          <BsDownload />
          <p className="hidden md:inline-flex text-sm">PDF version</p>
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
