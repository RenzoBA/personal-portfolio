import { motion } from "framer-motion";

//icons
import { BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";

const Header = ({ socials }) => {
  return (
    <header className="fixed p-5 text-gray-500 text-2xl z-20 w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        className="flex flex-row items-start max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <a href={socials[0].url} target="_blank" rel="noreferrer">
            <BsLinkedin className="header-icon" />
          </a>
          <a href={socials[1].url} target="_blank" rel="noreferrer">
            <BsGithub className="header-icon" />
          </a>
        </div>
        <button className="gap-2 flex ml-auto items-center group">
          <BsDownload className="header-icon" />
          <p className="hidden md:inline-flex items-center text-sm header-icon w-20">
            PDF version
          </p>
        </button>
      </motion.div>
    </header>
  );
};

export default Header;
