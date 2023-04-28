import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

//icons
import { FiMail, FiMapPin } from "react-icons/fi";

const Contact = ({ pageInfo }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:renzobocanegra.contact@gmail.com?subject=${formData.subject}&body=Hi, I'm ${formData.name}. ${formData.message}. (${formData.email})`;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-full md:h-screen max-w-7xl mx-auto px-10 justify-center items-center text-center py-16 pb-20 md:py-0 text-color-custom"
    >
      <h3 className="md:absolute top-16 uppercase tracking-[20px] section-title text-2xl md:text-3xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-10">
        <h4 className="text-4xl px-5 xl:text-5xl font-semibold">
          You found the right developer. <br className="md:hidden" />
          <span className="underline decoration-element">Lets Talk</span>.
        </h4>
        <div className="space-y-6">
          <div className="contact-info">
            <FiMail className="contact-icon" />
            <p className="text-xl sm:text-2xl select-element">
              {pageInfo.email}
            </p>
          </div>
          <div className="contact-info">
            <FiMapPin className="contact-icon" />
            <p className="text-xl sm:text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 sm:w-[26rem] mx-auto"
        >
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name*"
            className="contact-input"
          />
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
          <button
            type="submit"
            className="bg-[#f1d85d] sm:hover:bg-[#e7d476] transition-colors py-5 px-10 rounded-md text-[#3c3c3c] font-bold"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
