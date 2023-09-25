import "./Footer.css";

import { useState } from "react";

import lnkOut from "/images/linkedin.png";
import lnkOver from "/images/linkedin2.png";
import gitOut from "/images/github.png";
import gitOver from "/images/github2.png";

export const Footer = () => {
  const [lnkMouOver, setLknOver] = useState(false);
  const [gitMouOver, setgitOver] = useState(false);

  return (
    <footer id="footer">
      <div className="footer-info mb-5">
        <div>
          <h3>María Pía Nattero</h3>
          <h6>
            <small>Frontend Developer</small>
          </h6>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/maria-pia-nattero"
            rel="noreferrer"
            target="_blank"
            className="mx-2"
          >
            <div
              onMouseOver={() => setLknOver(true)}
              onMouseOut={() => setLknOver(false)}
            >
              <img src={lnkMouOver ? lnkOver : lnkOut} />
            </div>
          </a>
          <a
            href="https://github.com/pianattero"
            rel="noreferrer"
            target="_blank"
            className="mx-2"
          >
            <div
              onMouseOver={() => setgitOver(true)}
              onMouseOut={() => setgitOver(false)}
            >
              <img src={gitMouOver ? gitOver : gitOut} />
            </div>
          </a>
        </div>
      </div>
      <p className="text-center">
        <small>© María Pía Nattero | Development</small>
      </p>
    </footer>
  );
};
