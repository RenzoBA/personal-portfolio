import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

//components
import { Header, Hero, About, Skills, Projects, Contact } from "../components";

//sanity
import { client } from "../sanity";

//icons
import { BsArrowUpCircle } from "react-icons/bs";

export default function Home({ socials, pageInfo, skills, projects }) {
  return (
    <div className="relative bg-[rgb(50,50,50)] h-screen text-white md:snap-y md:snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#b0ff5d]">
      <Head>
        <title>Renzo Portfolio</title>
        <meta name="description" content="This is my personal portfolio :D" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header socials={socials} />

      <section id="developer" className="snap-center">
        <Hero pageInfo={pageInfo[0]} />
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
          className="fixed flex w-10 bottom-8 cursor-pointer rounded-full right-1 md:right-2 xl:right-10 z-50"
        >
          <BsArrowUpCircle className="h-7 w-7 md:h-8 md:w-8 opacity-40 hover:opacity-100 hover:text-[#b0ff5d]" />
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
