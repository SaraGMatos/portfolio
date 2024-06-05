import { Link } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";

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
            className="flex flex-wrap justify-around mt-12"
          >
            <section id="frontend" className="flex flex-col text-center w-80">
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl">
                front end
              </h3>
              <p className="text-teagreen text-justify">
                Planning and designing smart interfaces using visual tools like{" "}
                <b>Figma</b> and <b>Excalidraw</b>.
              </p>
              <p className="text-teagreen text-justify">
                Creating user-friendly interfaces with web technologies such as
                <b> JavaScript</b>, <b>HTML</b>, <b>CSS</b> and the much loved{" "}
                <b>ReactJS</b>.
              </p>
              <p className="text-teagreen text-justify">
                Using <b>Axios</b> as HTTP client for making API requests from
                the client side.
              </p>
              <p className="text-teagreen text-justify">
                Adding some colours and sparkles using popular framaworks like{" "}
                <b>TailwindCSS</b> or <b>Bootstrap</b>.
              </p>
            </section>
            <section id="backend" className="flex flex-col text-center w-80">
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl">
                back end
              </h3>
              <p className="text-teagreen text-justify">
                Building solid RESTful APIs using <b>Node.js</b> and{" "}
                <b>ExpressJS</b>.
              </p>
              <p className="text-teagreen text-justify">
                Creating, seeding and querying <b>PostgreSQL</b> databases using
                both <b>psql</b> and <b>Azure Data Studio</b>.
              </p>
              <p className="text-teagreen text-justify">
                Using <b>Supabase</b> as backend service to quickly build robust
                apps.
              </p>
              <p className="text-teagreen text-justify">
                Exploring the world of OOP using <b>C#</b> and <b>Java</b>.
              </p>
            </section>
            <section id="testing" className="flex flex-col text-center w-80">
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl">
                testing
              </h3>
              <p className="text-teagreen text-justify">
                Ensuring code efficiency and reliability through{" "}
                <b>test driven development</b>.
              </p>
              <p className="text-teagreen text-justify">
                Writing robust unit tests with <b>Jest</b>.
              </p>
              <p className="text-teagreen text-justify">
                Safeguarding API call reliability through integration testing
                with <b>Supertest</b>.
              </p>
            </section>
            <section id="teamwork">
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl">
                team work
              </h3>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
