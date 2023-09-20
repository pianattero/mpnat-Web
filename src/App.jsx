import { Route, Routes } from "react-router-dom";

import { Home } from "./views/misc/Home/Home";
import { Projects } from "./views/Projects/Projects";
import { Experience } from "./views/Experience/Experience";

function App() {
  return (
    <>
      <div>
        <Routes>
          {/* MISC */}
          <Route path="/" element={<Home />} />

          {/* PROJECTS & EXPERIENCE */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
