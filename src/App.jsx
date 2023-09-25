import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/misc/Navbar/Navbar";
import { Home } from "./views/misc/Home/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
