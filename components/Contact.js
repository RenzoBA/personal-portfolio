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
      className="relative flex flex-col h-full md:h-screen max-w-7xl mx-auto px-10 justify-center items-center text-center py-16 pb-32 md:py-0 text-color-custom"
    >
      <h3 className="md:absolute top-16 uppercase tracking-[20px] text-color-custom-2 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-10">
        <h4 className="text-4xl xl:text-5xl font-semibold">
          You found the right developer. <br className="md:hidden" />
          <span className="underline decoration-element">Lets Talk</span>.
        </h4>
        <div className="space-y-6">
          <div className="contact-info">
            <FiMail className="contact-icon" />
            <p className="text-xl sm:text-2xl">{pageInfo.email}</p>
          </div>
          <div className="contact-info">
            <FiMapPin className="contact-icon" />
            <p className="text-xl sm:text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 sm:w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name*"
              className="contact-input"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email*"
              className="contact-input"
            />
          </div>
          <input
            {...register("subject", { required: true })}
            type="text"
            placeholder="Subject*"
            className="contact-input"
          />
          <textarea
            {...register("message")}
            type="text"
            placeholder="Message"
            className="contact-input"
          />
          <button className="bg-[#f1f15d] py-5 px-10 rounded-md text-black font-bold">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
