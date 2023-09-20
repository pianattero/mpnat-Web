import "./Projects.css";

import { NavLink } from "react-router-dom";

export const Projects = () => {
  return (
    <>
      <h1>projects</h1>
      <NavLink to="/">
        <i className="bi bi-pencil-square"></i> Back Home
      </NavLink>
    </>
  );
};
