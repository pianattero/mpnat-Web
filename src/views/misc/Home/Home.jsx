import "./Home.css";

import { Summary } from "../../../components/Summary/Summary";
import { AboutMe } from "../../../components/AboutMe/AboutMe";
import { Projects } from "../../../components/Projects/Projects";
import { ContactForm } from "../../../components/ContactForm/ContactForm";

export const Home = () => {
  return (
    <>
      <div className="home">
        <Summary />
        <AboutMe />
        <Projects />
        <ContactForm />
      </div>
    </>
  );
};
