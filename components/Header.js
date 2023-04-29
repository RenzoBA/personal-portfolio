import { motion } from "framer-motion";

//icons
import { BsGithub, BsTwitter, BsDownload } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Header = ({ socials, pageInfo: { cvUrl } }) => {
  return (
    <header className="invisible md:visible fixed pr-6 pl-4 text-gray-500 text-2xl z-30 w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        className="flex flex-row items-start max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-3 backdrop-blur bg-[#f5f5f5]/40 py-1 rounded-b shadow">
          <a
            href={socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 w-10 h-10 flex justify-center items-center transition-colors"
          >
            <BsGithub className="header-icon sm:hover:text-white" />
          </a>
          <a
            href={socials[1].url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 w-10 h-10 flex justify-center items-center transition-colors"
          >
            <GrLinkedinOption className="header-icon sm:hover:text-[#0077b5]" />
          </a>
          <a
            href={socials[2].url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 w-10 h-10 flex justify-center items-center transition-colors"
          >
            <BsTwitter className="header-icon sm:hover:text-[#1da1f2]" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-3 ml-auto backdrop-blur bg-[#f5f5f5]/40 py-1 rounded-b shadow">
          <a
            className="gap-2 p-1 flex items-center group"
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            <BsDownload className="header-icon" />
            <p className="hidden md:inline-flex items-center text-sm header-icon w-20 font-medium">
              PDF version
            </p>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
