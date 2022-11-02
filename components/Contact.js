import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

//icons
import { FiMail, FiMapPin } from "react-icons/fi";

const Contact = ({ pageInfo }) => {
  const { register, handleSubmit } = useForm();
  //add onSubmit body
  const onSubmit = (data) => console.log(data);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center max-w-7xl h-screen justify-evenly items-center px-10 mx-auto md:text-left "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          You found the right developer.{" "}
          <span className="underline decoration-[#b0ff5d]">Lets Talk</span>.
        </h4>
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-5">
            <FiMail className="text-[#b0ff5d] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FiMapPin className="text-[#b0ff5d] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name*"
              className="contactInput"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email*"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject", { required: true })}
            type="text"
            placeholder="Subject*"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            type="text"
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#b0ff5d] py-5 px-10 rounded-md text-black font-bold">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
