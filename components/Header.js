import { motion } from "framer-motion";

//icons
import { BsGithub, BsLinkedin, BsTwitter, BsDownload } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Header = ({ socials, pageInfo: { cvUrl } }) => {
  return (
    <header className="fixed px-4 py-5 text-gray-500 text-2xl z-20 w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        className="flex flex-row items-start max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-3">
          <a
            href={socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 w-10 h-10 sm:hover:bg-[#0d1116] flex justify-center items-center transition-colors"
          >
            <BsGithub className="header-icon" />
          </a>
          <a
            href={socials[1].url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 w-10 h-10 sm:hover:bg-[#0077b5] flex justify-center items-center transition-colors"
          >
            <GrLinkedinOption className="header-icon" />
          </a>
          <a
            href={socials[2].url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 w-10 h-10 sm:hover:bg-[#1da1f2] flex justify-center items-center transition-colors"
          >
            <BsTwitter className="header-icon " />
          </a>
        </div>
        <a
          className="gap-2 flex ml-auto items-center group "
          href={cvUrl}
          target="_blank"
          rel="noreferrer"
        >
          <BsDownload className="header-icon" />
          <p className="hidden md:inline-flex items-center text-sm header-icon w-20 ">
            PDF version
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
