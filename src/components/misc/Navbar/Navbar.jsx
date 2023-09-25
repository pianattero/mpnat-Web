import "./Navbar.css";

import { HashLink } from "react-router-hash-link";

import logo from "/images/mp.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <HashLink className="navbar-brand" to="#home">
            <img style={{ height: 35 }} src={logo} alt="MP logo" />
          </HashLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <HashLink className="navbar-brand" to="#about-me">
                <li className="nav-item">
                  <small>About Me ·</small>
                </li>
              </HashLink>
              <HashLink className="navbar-brand" to="#projects">
                <li className="nav-item">
                  <small>Projects ·</small>
                </li>
              </HashLink>
              <HashLink className="navbar-brand" to="#contact">
                <li className="nav-item">
                  <small>Contact Info ·</small>
                </li>
              </HashLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
