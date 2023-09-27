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
      className="relative flex flex-col min-h-screen justify-center items-center text-center text-color-custom mb-20 lg:mb-5"
    >
      <div className="absolute top-80 md:top-20 bg-color-custom-2 w-full h-[600px] skew-y-12 shadow-lg z-0" />
      <h3 className="uppercase tracking-[20px] section-title text-2xl md:text-3xl">
        Contact
      </h3>
      <div className="pt-8 md:pt-10 flex flex-col gap-10 z-10">
        <h4 className="text-4xl px-5 xl:text-5xl font-semibold">
          You found the right developer. <br className="md:hidden" />
          <span className="underline decoration-element">Lets Talk</span>.
        </h4>
        <div className="flex flex-col gap-6">
          <div className="contact-info">
            <FiMail className="contact-icon" />
            <p className="text-xl sm:text-2xl select-element font-thin">
              {pageInfo.email}
            </p>
          </div>
          <div className="contact-info">
            <FiMapPin className="contact-icon" />
            <p className="text-xl sm:text-2xl font-thin">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-80 sm:w-[26rem] mx-auto"
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
            className="bg-[#f1d85d] sm:hover:bg-[#e7d476] transition-colors py-5 rounded-md text-[#3c3c3c] font-bold"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
