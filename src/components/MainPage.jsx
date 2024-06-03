import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="w-screen">
      <nav className="flex m-4 xl:ml-5 font-poppins text-base">
        <Link
          to="https://www.linkedin.com/in/saragmatos"
          target="_blank"
          className="m-2 mr-5 ml-5"
        >
          LinkedIn
        </Link>
        <Link
          to="https://www.github.com/SaraGMatos"
          target="_blank"
          className="m-2 mr-5 ml-5"
        >
          GitHub
        </Link>
      </nav>
      <div className="flex flex-wrap w-screen">
        <section className="m-10 mt-0 mb-0 xl:ml-15 grow self-center font-poppins">
          <h1 className="font-bold mb-3 text-xl">SARA MATOS</h1>
          <h2 className="mb-3 text-lg">Junior Software Developer</h2>
          <p className="mb-3 text-lg">
            Working on personal projects and volunteering
          </p>
          <p className="mb-3 text-lg">
            Actively looking for a dev role within the UK
          </p>
        </section>
        <nav className="flex flex-col m-10 mt-1 grow font-antic text-[80px] sm:text-9xl md:text-[160px] lg:text-[180px] xl:text-[180px] 2xl:text-[160px] xl:mr-20 max-w-fit">
          <Link className="xl:m-3">SKILLS</Link>
          <Link className="xl:m-3">PROJECTS</Link>
          <Link className="xl:m-3">ABOUT</Link>
          <Link className="xl:m-3">CONTACT</Link>
        </nav>
        <section className="main-page-description"></section>
      </div>
    </div>
  );
}

export default MainPage;
