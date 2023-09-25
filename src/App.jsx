import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/misc/Navbar/Navbar";
import { Home } from "./views/misc/Home/Home";
// import { Projects } from "./views/Projects/Projects";
// import { Experience } from "./views/Experience/Experience";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          {/* MISC */}
          <Route path="/" element={<Home />} />

          {/* PROJECTS & EXPERIENCE
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
