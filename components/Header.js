import { motion } from "framer-motion";

//icons
import { BsGithub, BsTwitter, BsFileEarmarkPdfFill } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Header = ({ socials, pageInfo: { cvUrl } }) => {
  return (
    <header className="invisible md:visible fixed pr-6 pl-4 text-2xl z-30 w-full">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 0.7 }}
        className="flex flex-row items-start max-w-7xl mx-auto"
      >
        <div className="flex flex-row gap-1 lg:gap-3 backdrop-blur bg-[#202323]/40 py-1 rounded-b shadow">
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
        <div className="flex ml-auto backdrop-blur bg-[#202323]/40 py-1 rounded-b shadow">
          <a
            className="gap-2 p-2 h-10 flex justify-center items-center transition-colors group"
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            <BsFileEarmarkPdfFill className="header-icon" />
            <p className="invisible md:visible h-fit items-center text-sm header-icon font-medium">
              PDF ver.
            </p>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
