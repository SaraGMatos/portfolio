import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="w-screen h-screen m-0 p-8">
      <nav className="flex m-4 xl:ml-5 font-poppins text-base">
        <Link
          to="https://www.linkedin.com/in/saragmatos"
          target="_blank"
          className="m-2 mr-5 ml-6 text-huntergreen font-semibold hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200"
        >
          LinkedIn
        </Link>
        <Link
          to="https://www.github.com/SaraGMatos"
          target="_blank"
          className="m-2 mr-5 ml-6 text-huntergreen font-semibold hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200"
        >
          GitHub
        </Link>
        <hr
          width="120px"
          size="20px"
          className="ml-6 self-center h-1 border-huntergreen"
        ></hr>
      </nav>
      <div className="flex flex-wrap w-screen">
        <section className="m-10 mt-0 mb-0 xl:ml-15 grow self-center font-poppins">
          <h1 className="font-bold mb-3 text-3xl text-huntergreen">
            SARA MATOS
          </h1>
          <h2 className="mb-3 text-lg text-huntergreen">
            Junior Software Developer
          </h2>
          <p className="mb-3 text-lg text-huntergreen">
            Working on personal projects and volunteering
          </p>
          <p className="mb-3 text-lg text-huntergreen">
            Actively looking for a dev role within the UK
          </p>
        </section>
        <nav className="flex flex-col m-10 mt-1 grow font-antic text-[80px] sm:text-9xl md:text-[160px] lg:text-[180px] xl:text-[180px] 2xl:text-[160px] xl:mr-20 max-w-fit">
          <Link className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200">
            SKILLS
          </Link>
          <Link className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200">
            PROJECTS
          </Link>
          <Link className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200">
            ABOUT
          </Link>
          <Link className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200">
            CONTACT
          </Link>
        </nav>
        <section className="main-page-description"></section>
      </div>
    </div>
  );
}

export default MainPage;
