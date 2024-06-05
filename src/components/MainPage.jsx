import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div id="home" className="w-screen">
      <div className="h-screen">
        <nav id="socials" className="flex m-4 xl:ml-5 font-poppins text-base">
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
        <div className="flex flex-wrap w-screen h-screen content-around">
          <section
            id="description"
            className="m-10 mt-0 mb-0 xl:ml-15 grow self-center font-poppins"
          >
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
          <nav
            id="sidenav"
            className="flex self-center flex-col m-10 ml-7 mt-1 grow font-antic text-[70px] sm:text-9xl md:text-[130px] lg:text-[160px] xl:text-[140px] 2xl:text-[140px] xl:mr-20 max-w-fit"
          >
            <Link
              to="/#skills"
              className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200"
            >
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
        </div>

        <section id="skills" className="bg-pakistangreen w-full h-full p-9">
          <h2 className="mb-5 sm:mb-8 text-teagreen font-antic text-[80px] sm:text-9xl md:text-[160px] lg:text-[160px] xl:text-[140px] 2xl:text-[140px] xl:mr-20">
            SKILLS
          </h2>
          <div className="flex text-xl justify-evenly text-teagreen md:text-2xl flex-wrap">
            <Link
              className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
              to="/#home"
            >
              Home
            </Link>
            <Link className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins">
              Projects
            </Link>
            <Link className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins">
              About
            </Link>
            <Link className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins">
              Contact
            </Link>
          </div>
          <div
            id="skills-content"
            className="flex flex-wrap justify-around mt-12 md:text-3xl"
          >
            <section>
              <h3 className="text-earthyellow font-poppins">front end</h3>
              <div className="text-3xl">
                <p>JavaScript</p>
                <p>ReactJS</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind</p>
              </div>
            </section>
            <section>
              <h3 className="text-earthyellow font-poppins">back end</h3>
              <div>
                <p>PostgreSQL</p>
                <p>Supabase</p>
                <p>ExpressJS</p>
                <p>Axios</p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
