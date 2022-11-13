import Head from "next/head";

//components
import { Header, Hero, About, Skills, Projects, Contact } from "../components";

//sanity
import { client } from "../sanity";

export default function Home({ socials, pageInfo, skills, projects }) {
  return (
    <div className="relative bg-color-custom h-screen text-white overflow-y-scroll overflow-x-hidden scroll-color-custom cursor-default">
      <Head>
        <title>Renzo Portfolio</title>
        <meta name="description" content="This is my personal portfolio" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header socials={socials} pageInfo={pageInfo[0]} />

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
