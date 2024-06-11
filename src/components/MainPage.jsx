import { Link } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoJava } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSms } from "react-icons/fa";

import {
  SiJest,
  SiExpress,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiReactrouter,
} from "react-icons/si";
import { useEffect, useState } from "react";

function MainPage() {
  const width = window.screen.width;
  const [screenWidth, setScreenWidth] = useState(width);
  const [profilePic, setProfilePic] = useState(
    "https://i.postimg.cc/VvB0QbVR/Screenshot-2024-06-07-at-14-17-07.png"
  );
  const [pictureRadius, setPictureRadius] = useState("rounded-full");

  useEffect(() => {
    if (screenWidth < 768) {
      setProfilePic(
        "https://i.postimg.cc/VvB0QbVR/Screenshot-2024-06-07-at-14-17-07.png"
      );
      setPictureRadius("rounded-full");
    } else {
      setProfilePic(
        "https://i.postimg.cc/nLzbfbC9/PXL-20240421-144759058-3.jpg"
      );
      setPictureRadius("rounded-2xl");
    }
    window.onresize = () => {
      setScreenWidth(window.screen.width);
    };
  }, [width]);

  return (
    <div id="home" className="w-screen">
      <nav
        id="socials"
        className="flex m-4 xl:ml-12 font-poppins text-base lg:text-lg"
      >
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
          className="m-10 mt-0 mb-0 xl:ml-20 grow self-center font-poppins"
        >
          <h1 className="font-bold mb-5 text-3xl xl:text-5xl text-huntergreen">
            SARA MATOS
          </h1>
          <h2 className="mb-3 text-lg xl:text-xl text-huntergreen">
            Junior Software Developer
          </h2>
          <p className="mb-3 text-lg xl:text-xl text-huntergreen">
            Working on personal projects and volunteering
          </p>
          <p className="mb-3 text-lg xl:text-xl text-huntergreen">
            Actively looking for a dev role within the UK
          </p>
        </section>
        <nav
          id="sidenav"
          className="flex self-center flex-col m-10 ml-9 mt-1 grow font-antic text-[75px] sm:text-9xl md:text-[130px] lg:text-[110px] xl:text-[140px] 2xl:text-[160px] xl:mr-20 max-w-fit"
        >
          <Link
            to="/#skills"
            className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200"
          >
            SKILLS
          </Link>
          <Link
            to="/#projects"
            className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200"
          >
            PROJECTS
          </Link>
          <Link
            to="/#about"
            className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200"
          >
            ABOUT
          </Link>
          <Link
            to="/#contact"
            className="xl:m-3 text-ferngreen hover:italic hover:translate-x-4 hover:transition-transform ease-in duration-200"
          >
            CONTACT
          </Link>
        </nav>
      </div>

      <section id="skills" className="bg-pakistangreen w-full p-9">
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
          <Link
            to="/#projects"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Projects
          </Link>
          <Link
            to="/#about"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Contact
          </Link>
        </div>
        <div
          id="skills-content"
          className="flex flex-col flex-wrap justify-around gap-11 mt-12"
        >
          <div
            id="section-one"
            className="flex flex-wrap justify-around w-full gap-5"
          >
            <section
              id="frontend"
              className="flex flex-col text-center max-w-md gap-3 md:text-lg lg:text-xl mb-5"
            >
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
                Handling client and server-side routing in React applications
                with <b>React Router</b>.
              </p>
              <p className="text-teagreen text-justify">
                Styling using popular frameworks like <b>TailwindCSS</b> or{" "}
                <b>Bootstrap</b>.
              </p>
            </section>
            <section
              id="backend"
              className="flex flex-col text-center max-w-md gap-3 md:text-lg lg:text-xl mb-5"
            >
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl">
                back end
              </h3>
              <p className="text-teagreen text-justify">
                Building solid RESTful APIs using <b>Node.js</b> and{" "}
                <b>ExpressJS</b>.
              </p>
              <p className="text-teagreen text-justify">
                Structuring servers according to the <b>MVC</b>{" "}
                (Model-View-Controller) design pattern.
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
            <section
              id="testing"
              className="flex flex-col text-center max-w-md gap-3 md:text-lg lg:text-xl mb-5"
            >
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
          </div>

          <div
            id="section-two"
            className="flex flex-wrap justify-around w-full gap-5"
          >
            <section
              id="teamwork"
              className="flex flex-col text-center max-w-md gap-3 md:text-lg lg:text-xl mb-5"
            >
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl">
                pair & team work
              </h3>
              <p className="text-teagreen text-justify">
                Fostering an efficient flow of work and communication within a
                pair/team.
              </p>
              <p className="text-teagreen text-justify">
                Adhering to <b>Agile practices</b> like <b>Scrum</b>.
              </p>
              <p className="text-teagreen text-justify">
                Leading daily stand-ups.
              </p>
              <p className="text-teagreen text-justify">
                Utilising <b>Kanban boards</b> for visualising and managing
                work.
              </p>
            </section>
            <section
              id="other-technologies"
              className="flex flex-col text-center max-w-md gap-3 md:text-lg lg:text-xl mb-5"
            >
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl">
                other technologies
              </h3>
              <p className="text-teagreen text-justify">
                <b>Git</b> as version control.
              </p>
              <p className="text-teagreen text-justify">
                Employing some popular hosting services like <b>Netlify</b>,{" "}
                <b>Render</b> or <b>Railway</b>.
              </p>
              <p className="text-teagreen text-justify">
                Implementing live chat functionality with <b>Socket.IO</b>.
              </p>
              <p className="text-teagreen text-justify">
                Using <b>Inquirer</b> to create simple command line
                applications.
              </p>
            </section>
          </div>
          <section
            id="favourite-technologies"
            className="flex flex-col text-center w-full gap-3 md:text-lg lg:text-xl mb-5"
          >
            <div>
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl mb-5">
                some favourites
              </h3>
              <div
                id="technologies-container"
                className="flex flex-col items-center gap-5"
              >
                <div
                  id="first-row-technologies"
                  className="flex flex-wrap w-full justify-evenly text-5xl sm:text-7xl text-teagreen"
                >
                  <Link
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <IoLogoJavascript className="hover:text-earthyellow " />
                  </Link>
                  <Link to="https://nodejs.org/en" target="_blank">
                    <SiNodedotjs className="hover:text-earthyellow " />
                  </Link>
                  <Link to="https://www.postgresql.org/" target="_blank">
                    <SiPostgresql className="hover:text-earthyellow " />
                  </Link>
                  <Link to="https://jestjs.io/" target="_blank">
                    <SiJest className="hover:text-earthyellow" />
                  </Link>
                </div>
                <div
                  id="first-row-technologies"
                  className="flex flex-wrap w-full justify-evenly text-5xl sm:text-7xl text-teagreen"
                >
                  <Link to="https://expressjs.com/" target="_blank">
                    {" "}
                    <SiExpress className="hover:text-earthyellow" />
                  </Link>
                  <Link to="https://react.dev/" target="_blank">
                    <SiReact className="hover:text-earthyellow" />
                  </Link>
                  <Link to="https://reactrouter.com/en/main" target="_blank">
                    <SiReactrouter className="hover:text-earthyellow" />
                  </Link>
                  <Link to="https://tailwindcss.com/" target="_blank">
                    <SiTailwindcss className="hover:text-earthyellow" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section
            id="learning"
            className="flex flex-col text-center w-full gap-3 md:text-lg lg:text-xl mb-5"
          >
            <div>
              <h3 className="text-earthyellow font-poppins text-2xl sm:text-3xl mb-5">
                exploring
              </h3>
              <div id="learning-container" className="flex items-center gap-5">
                <div
                  id="learning-icons"
                  className="flex flex-wrap w-full justify-evenly text-5xl sm:text-7xl text-teagreen"
                >
                  <Link to="https://www.typescriptlang.org/" target="_blank">
                    {" "}
                    <BiLogoTypescript className="hover:text-earthyellow" />
                  </Link>
                  <Link to="https://dev.java/" target="_blank">
                    <BiLogoJava className="hover:text-earthyellow" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="projects" className="bg bg-beige w-full p-9">
        <h2 className="mb-5 sm:mb-8 text-buff font-antic text-[70px] sm:text-9xl md:text-[160px] lg:text-[160px] xl:text-[140px] 2xl:text-[140px] xl:mr-20">
          PROJECTS
        </h2>
        <div className="flex text-xl justify-evenly text-buff md:text-2xl flex-wrap mb-7">
          <Link
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
            to="/#home"
          >
            Home
          </Link>
          <Link
            to="/#skills"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Skills
          </Link>
          <Link
            to="/#about"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Contact
          </Link>
        </div>

        <section id="projects-content">
          <article id="news-api">
            <h3 className="text-huntergreen font-poppins text-3xl sm:text-3xl md:text-4xl w-full text-center mb-6 mt-11 font-semibold hover:text-buff hover:scale-125 transition-all ease-in-out">
              <Link
                to="https://github.com/SaraGMatos/backend-project"
                target="_blank"
              >
                NC News API
              </Link>
            </h3>
            <div
              id="project-content"
              className="flex flex-col sm:flex-row md:justify-evenly ml-3 mr-3"
            >
              <img
                src="https://i.postimg.cc/hGVyvZhj/Screenshot-2024-06-06-at-15-37-24.png"
                className="mb-6 rounded-xl w-3/5 sm:w-1/2 md:max-w-[334px] self-center sm:self-start sm:mr-7"
              />
              <div
                id="text"
                className="text-huntergreen text-justify flex flex-col gap-3 self-center mb-6 text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                <p>
                  A <b>RESTful API</b> for a Reddit-like web app.
                </p>
                <p>
                  Served with <b>ExpressJS</b> and developed using{" "}
                  <b>Node.js</b> and <b>Postgres </b>
                  as database service.
                </p>
                <p>
                  I thoroughly enjoyed building this humble API as my very first
                  solo backend project.
                </p>
                <p>
                  It was developed in just five days during the Northcoders
                  Software Engineering bootcamp.
                </p>
                <p>
                  Feel free to access the <b>GitHub</b> repo{" "}
                  <Link
                    to="https://github.com/SaraGMatos/backend-project"
                    target="_blank"
                    className="font-bold underline hover:text-buff transition-all ease-in-out"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>

          <article id="news-fe">
            <h3 className="text-huntergreen font-poppins text-3xl sm:text-3xl md:text-4xl w-full text-center mb-6 mt-11 font-semibold hover:text-buff hover:scale-125 transition-all ease-in-out">
              <Link to="https://github.com/SaraGMatos/nc-news" target="_blank">
                NC News
              </Link>
            </h3>
            <div
              id="project-content"
              className="flex flex-col-reverse sm:flex-row md:justify-evenly ml-3 mr-3"
            >
              <div
                id="text"
                className="text-huntergreen text-justify flex flex-col gap-3 self-center mb-6 text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                <p>
                  This is the <b>front-end result</b> of the full-stack project
                  that started with the NC News REST API.
                </p>
                <p>
                  Built using the amazing <b>ReactJS</b> framework,
                  <b> Node.js</b> and <b>vanilla CSS</b>.
                </p>
                <p>
                  I used <b>Axios</b>, a browser-compatible HTTP client, to
                  contact the API.
                </p>
                <p>
                  It was planned, designed & developed in a week during the
                  Northcoders Software Engineering bootcamp.
                </p>
                <p>Please note that, for now, it is best viewed on mobile!</p>
                <p>
                  Feel free to access the <b>GitHub</b> repo{" "}
                  <Link
                    to="https://github.com/SaraGMatos/nc-news"
                    target="_blank"
                    className="font-bold underline hover:text-buff transition-all ease-in-out"
                  >
                    here
                  </Link>{" "}
                  or explore the app, hosted on <b>Netlify</b>,{" "}
                  <Link
                    to="https://my-ncnews.netlify.app/"
                    target="_blank"
                    className="font-bold underline hover:text-buff transition-all ease-in-out"
                  >
                    here
                  </Link>
                  .
                </p>
              </div>
              <img
                src="https://i.postimg.cc/FsKZMqHQ/Screenshot-2024-06-06-at-18-30-45.png"
                className="mb-6 rounded-xl w-3/5 sm:w-1/2 md:max-w-[334px] self-center sm:self-start sm:ml-7"
              />
            </div>
          </article>

          <article id="skillmatch">
            <h3 className="text-huntergreen font-poppins text-3xl sm:text-3xl md:text-4xl w-full text-center mb-6 mt-11 font-semibold hover:text-buff hover:scale-125 transition-all ease-in-out">
              <Link
                to="https://github.com/SaraGMatos/skillmatch"
                target="_blank"
              >
                SkillMatch
              </Link>
            </h3>
            <div
              id="project-content"
              className="flex flex-col sm:flex-row md:justify-evenly ml-3 mr-3"
            >
              <img
                src="https://i.postimg.cc/LX295jJj/Screenshot-2024-06-06-at-20-45-53.png"
                className="mb-6 rounded-xl w-3/5 sm:w-1/2 md:max-w-[334px] self-center sm:self-start sm:mr-7"
              />
              <div
                id="text"
                className="text-huntergreen text-justify flex flex-col gap-3 self-center mb-6 text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                <p>
                  A <b>full-stack application</b> that was brought from concept
                  to life in eight days as a final group project during the
                  Northcoders Software Engineering bootcamp.
                </p>
                <p>
                  SkillMatch is a community-driven app that allows users to do
                  skill exchanges matching anc connecting with people by their
                  abilities and sought interests.
                </p>
                <p>
                  Developed using the much loved trio of <b>ReactJS</b>,{" "}
                  <b>Node.js</b> and vanilla <b>CSS</b>.
                </p>
                <p>
                  This app integrates a user authentication system provided by{" "}
                  <b>Supabase</b>, a cloud-based service that we also use as
                  backend.
                </p>
                <p>
                  In addition, SkillMatch offers its users the opportunity to
                  connect with their matches through a live chat, implemented
                  using <b>Socket.IO</b>.
                </p>
                <p>
                  Feel free to access the <b>GitHub</b> repo{" "}
                  <Link
                    to="https://github.com/SaraGMatos/skillmatch"
                    target="_blank"
                    className="font-bold underline hover:text-buff transition-all ease-in-out"
                  >
                    here
                  </Link>{" "}
                  or explore the app, hosted on <b>Netlify</b>,{" "}
                  <Link
                    to="https://skillmatched.netlify.app/"
                    target="_blank"
                    className="font-bold underline hover:text-buff transition-all ease-in-out"
                  >
                    here
                  </Link>
                  . Note that SkillMatch is best experienced in mobile.
                </p>
              </div>
            </div>
          </article>

          <article id="portfolio">
            <h3 className="text-huntergreen font-poppins text-3xl sm:text-3xl md:text-4xl w-full text-center mb-6 mt-11 font-semibold hover:text-buff hover:scale-125 transition-all ease-in-out">
              Portfolio
            </h3>
            <div
              id="project-content"
              className="flex flex-col-reverse sm:flex-row md:justify-evenly ml-3 mr-3"
            >
              <div
                id="text"
                className="text-huntergreen text-justify flex flex-col gap-3 self-center mb-6 text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                <p>
                  A humble but sleek-ish (I hope?) first portfolio page. I
                  wanted to make something that I could use to expand my CV and
                  that showcased my work and myself in a more personal way.
                </p>
                <p>
                  Built with <b>ReactJS</b> and styled with <b>TailwindCSS</b>,
                  this wee page can be viewed in a range of devices, so feel
                  free to open it in your phone, tablet or laptop!
                </p>

                <p>
                  Feel free to access the <b>GitHub</b> repo{" "}
                  <Link
                    to="https://github.com/SaraGMatos/portfolio"
                    target="_blank"
                    className="font-bold underline hover:text-buff transition-all ease-in-out"
                  >
                    here
                  </Link>{" "}
                  and do reach out if you have any comments or suggestions .
                </p>
              </div>
              <img
                src="https://i.postimg.cc/7Ldx1jtM/Screenshot-2024-06-06-at-21-25-13.png"
                className="mb-6 rounded-xl w-3/5 sm:w-1/2 md:max-w-[334px] self-center sm:self-start sm:ml-7"
              />
            </div>
          </article>
        </section>
      </section>

      <section id="about" className="bg bg-pakistangreen w-full p-9">
        <h2 className="mb-5 sm:mb-8 text-earthyellow font-antic text-[70px] sm:text-9xl md:text-[160px] lg:text-[160px] xl:text-[140px] 2xl:text-[140px] xl:mr-20">
          ABOUT
        </h2>
        <div className="flex text-xl justify-evenly text-earthyellow md:text-2xl flex-wrap mb-9">
          <Link
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
            to="/#home"
          >
            Home
          </Link>
          <Link
            to="/#skills"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Skills
          </Link>
          <Link
            to="/#projects"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Contact
          </Link>
        </div>

        <article
          id="about-content-one"
          className="flex flex-col md:flex-row gap-5"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <img
              src={profilePic}
              className={`${pictureRadius} w-9/12 sm:w-8/12 md:w-5/12 self-center`}
            />
            <div
              id="profile-text"
              className="flex flex-col gap-3 text-teagreen text-lg lg:text-xl xl:text-2xl lg:gap-7 xl:gap-11 leading-relaxed text-justify self-center m-3 md:ml-4"
            >
              <p>
                Born in sunny Gran Canaria, I migrated to Edinburgh in the
                Summer of 2016 and I have been fortunate enough to see Scotland
                as my home since then.
              </p>
              <p>
                I hold a degree in Spanish Language and Hispanic Literature and
                a master's in Teaching Spanish as a Second Language, having
                graduated with Honours from both.
              </p>
              <p>
                Professionally, I have dedicated myself to hospitality and
                education, working as a Spanish teacher, tutor and proofreader.
              </p>
              <p>
                At around September 2023, my curiosity led me to do a five-day
                coding challenge; I enjoyed it so much that I started to learn
                programming on the side while working full-time as a teacher. By
                the end of the year, I was seriously considering changing
                careers as I found an unexpected joy in coding, and decided to
                enrol in the Northcoders Software Engineering bootcamp, from
                which I graduated at the start of June.
              </p>
              <p>
                Despite the obvious steep learning curve, the course has
                equipped me with some decent programming skills and a nice tech
                stack to expand from.
              </p>
            </div>
          </div>
        </article>

        <hr className="w-vw border-earthyellow border-2 m-7" />

        <article id="about-content-two" className="flex flex-col gap-6">
          <div className="flex flex-col w-vw">
            <img
              src="https://i.postimg.cc/kgSnGtCF/Screenshot-2024-06-07-at-15-42-40.png"
              className="self-center rounded-xl mt-4 mb-5"
            />
            <div
              id="text-container"
              className="flex flex-col sm:flex-col md:flex-row"
            >
              <div
                id="profile-text-left"
                className="flex flex-col gap-3 text-teagreen text-lg lg:text-xl xl:text-2xl lg:gap-7 xl:gap-11 leading-relaxed text-justify m-3 md:pr-5 lg:pr-7 xl:pr-8 md:w-1/2"
              >
                <h3 className="text-earthyellow font-poppins text-3xl sm:text-3xl md:text-4xl w-full text-center">
                  Work
                </h3>
                <p>
                  When it comes to work, I thrive in goal-oriented environments
                  where purpose and pragmatism drive progress. My teaching
                  career has instilled in me the importance of clear
                  communication and building respectful and friendly
                  interpersonal relationships, skills I am very proud of.
                </p>
                <p>
                  Always seeking opportunities to grow and learn, I can
                  confidently say that I am comfortable stepping out of my
                  comfort zone and embracing the challenges that come with it.
                </p>
                <p>
                  Coding wise, I strive for clean and readable code and I
                  personally prefer a more elaborate piece of code that is
                  robust and reliable over a shorter, cryptic solution. I enjoy
                  tackling every problem as an opportunity to pick up new
                  approaches and patterns.
                </p>
              </div>
              <div
                id="profile-text-right"
                className="flex flex-col gap-3 text-teagreen text-lg lg:text-xl xl:text-2xl lg:gap-7 xl:gap-11 leading-relaxed text-justify m-3 md:pl-5 lg:pl-7 xl:pl-8 md:w-1/2"
              >
                <h3 className="text-earthyellow font-poppins text-3xl sm:text-3xl md:text-4xl w-full text-center">
                  Life
                </h3>
                <p>
                  In my spare time I enjoy giving myself away to a book. I am
                  currently captivated by contemporary Latinamerican narrative
                  written by women. Give me a shout if you need a book
                  recommendation!
                </p>
                <p>
                  I love art, and losing track of time in museums and
                  exhibitions is another of my favourite pastimes, along with
                  going to live concerts whenever I can - I find they are the
                  perfect excuse to travel and explore new places.
                </p>
                <p>
                  Coming from a place where there is not a lot of rainfall, I
                  can't help it but to feel stunned by the green and leafy
                  nature in the beautiful Scottish countryside, reason why you
                  will find me hiking every other weekend accompanied by my dog
                  Mocha.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="contact" className="bg bg-papayawhip w-full p-9">
        <h2 className="mb-6 sm:mb-8 text-ferngreen font-antic text-[70px] sm:text-9xl md:text-[160px] lg:text-[160px] xl:text-[140px] 2xl:text-[140px] xl:mr-20">
          CONTACT
        </h2>
        <div className="flex text-xl justify-evenly text-ferngreen md:text-2xl flex-wrap mb-12">
          <Link
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
            to="/#home"
          >
            Home
          </Link>
          <Link
            to="/#skills"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Skills
          </Link>
          <Link
            to="/#projects"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            Projects
          </Link>
          <Link
            to="#about"
            className="m-2 hover:italic hover:translate-x-2 hover:transition-transform ease-in duration-200 font-poppins"
          >
            About
          </Link>
        </div>

        <section id="contact-header" className="mt-8">
          <p className="text-huntergreen text-xl lg:text-2xl xl:text-2xl text-center">
            You have all my contact details on my CV, which you can download{" "}
            <Link
              to="https://drive.google.com/file/d/11JhUYU5F2qrCbwptpt_TOm-EW7aaX1uE/view?usp=sharing"
              target="_blank"
              className="font-bold underline hover:text-buff transition-all ease-in-out"
            >
              here
            </Link>
            .
          </p>
          <p className="text-huntergreen text-xl lg:text-2xl xl:text-2xl text-center mt-4">
            Or feel free to use any of the mediums below to reach out:
          </p>
        </section>
        <article className="flex flex-col h-80 justify-evenly">
          <section
            id="contact-container-1"
            className="mt-4 flex flex-wrap w-full justify-evenly text-5xl sm:text-7xl text-huntergreen"
          >
            <Link to="mailto:saragarciamatos@gmail.com">
              <MdOutlineMail className="hover:text-buff hover:scale-125 transition-all ease-in-out" />
            </Link>
            <Link to="tel:+447591594294" target="_blank">
              <IoIosCall className="hover:text-buff hover:scale-125 transition-all ease-in-out" />
            </Link>
            <Link to="https://wa.me/447591594294" target="_blank">
              <FaWhatsapp className="hover:text-buff hover:scale-125 transition-all ease-in-out" />
            </Link>
          </section>
          <section
            id="contact-container-2"
            className=" flex flex-wrap w-full justify-evenly text-5xl sm:text-7xl text-huntergreen"
          >
            <Link to="sms:+447591594294" target="_blank">
              <FaSms className="hover:text-buff hover:scale-125 transition-all ease-in-out" />
            </Link>
            <Link to="https://www.linkedin.com/in/saragmatos/" target="_blank">
              <AiOutlineLinkedin className="hover:text-buff hover:scale-125 transition-all ease-in-out" />
            </Link>
          </section>
        </article>
      </section>
      <footer className="bg-ferngreen h-35 p-4 border-t-8 border-double border-papayawhip">
        <h4 className="font-poppins text-papayawhip text-lg text-center">
          Sara Matos
          <br />
          saragarciamatos@gmail.com
          <br />
          07591594294
        </h4>
      </footer>
    </div>
  );
}

export default MainPage;
