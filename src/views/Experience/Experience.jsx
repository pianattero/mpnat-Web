import "./Experience.css";

import { NavLink } from "react-router-dom";

export const Experience = () => {
  return (
    <>
      <h1>experience</h1>
      <NavLink to="/">
        <i className="bi bi-pencil-square"></i> Back Home
      </NavLink>
    </>
  );
};
