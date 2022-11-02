import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

//components
import Header from "../components/Header";
import Developer from "../components/Developer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

//sanity
import { client } from "../sanity";

//icons
import { BsArrowUpCircle } from "react-icons/bs";

export default function Home({ socials, pageInfo, skills, projects }) {
  return (
    <div className="bg-[rgb(50,50,50)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-[#b0ff5d] scrollbar-track-gray-400/20">
      <Head>
        <title>Renzo's Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="developer" className="snap-start">
        <Developer pageInfo={pageInfo[0]} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo[0]} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo[0]} />
      </section>

      <Link href="#developer">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 2 }}
          className="sticky flex w-10 bottom-7 cursor-pointer rounded-full hover:text-[#b0ff5d] left-[49%] lg:left-[95%]"
        >
          <BsArrowUpCircle className="h-8 w-8 opacity-50 hover:opacity-100" />
        </motion.div>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const socials = await client.fetch(`*[_type == "social"]`);
  const pageInfo = await client.fetch(`*[_type == "pageInfo"]`);
  const skills = await client.fetch(`*[_type == "skill"]`);
  const projects = await client.fetch(
    `*[_type == "project"] {..., technologies[]->}`
  );

  return {
    props: {
      socials,
      pageInfo,
      skills,
      projects,
    },
  };
}
