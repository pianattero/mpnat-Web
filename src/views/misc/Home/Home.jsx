import "./Home.css";

import { Summary } from "../../../components/Summary/Summary";
import { AboutMe } from "../../../components/AboutMe/AboutMe";
import { Projects } from "../../../components/Projects/Projects";
import { ContactForm } from "../../../components/ContactForm/ContactForm";
import { Footer } from "../../../components/misc/Footer/Footer";

export const Home = () => {
  return (
    <>
      <div id="home">
        <Summary />
        <AboutMe />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
