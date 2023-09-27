import { motion } from "framer-motion";

//icons
import { BsGithub, BsTwitter, BsFileEarmarkPdfFill } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Header = ({ socials, pageInfo: { cvUrl } }) => {
  return (
    <header className="fixed top-0 text-2xl z-30 w-full">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.2, delay: 0.5 }}
        className="flex flex-row items-start max-w-7xl mx-auto text-color-custom-2"
      >
        <div className="flex flex-col lg:flex-row gap-4 backdrop-blur bg-[#202323]/80 p-3 rounded-b-lg shadow">
          <a href={socials[0].url} target="_blank" rel="noreferrer">
            <BsGithub className="sm:hover:text-color-custom transition-all w-8 h-8" />
          </a>
          <a href={socials[1].url} target="_blank" rel="noreferrer">
            <GrLinkedinOption className="sm:hover:text-color-custom transition-all w-8 h-8" />
          </a>
          <a href={socials[2].url} target="_blank" rel="noreferrer">
            <BsTwitter className="sm:hover:text-color-custom transition-all w-8 h-8" />
          </a>
        </div>

        {/* <div className="flex ml-auto backdrop-blur bg-[#202323]/80 p-3 rounded-b-lg shadow">
          <a
            className="gap-2 p-2 h-10 flex justify-center items-center transition-colors group"
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
          >
            <BsFileEarmarkPdfFill className="" />
            <p className="invisible md:visible h-fit items-center text-sm  font-medium">
              PDF ver.
            </p>
          </a>
        </div> */}
      </motion.div>
    </header>
  );
};

export default Header;
