import "./Home.css";

import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>María Pía Nattero</h1>
      <NavLink to="/projects">
        <i className="bi bi-pencil-square"></i> Projects
      </NavLink>
      <NavLink to="/experience">
        <i className="bi bi-pencil-square"></i> Work experience
      </NavLink>
    </>
  );
};
