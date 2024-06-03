import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <nav className="flex w-2/12 m-4">
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
          className="m-2 mr-5 ml-5 mb-10"
        >
          GitHub
        </Link>
      </nav>
      <section>
        <h1>Sara Matos</h1>
        <h2>Junior Software Developer</h2>
        <p>Working on personal projects and volunteering.</p>
        <p>Actively looking for a dev role within the UK.</p>
      </section>
      <nav className="main-nav">
        <Link>SKILLS</Link>
        <Link>PROJECTS</Link>
        <Link>ABOUT</Link>
        <Link>CONTACT</Link>
      </nav>
      <section className="main-page-description"></section>
    </div>
  );
}

export default MainPage;
