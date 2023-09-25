import { useState } from "react";

import "./Summary.css";

import lnkOut from "../../../public/images/linkedin.png";
import lnkOver from "../../../public/images/linkedin2.png";
import gitOut from "../../../public/images/github.png";
import gitOver from "../../../public/images/github2.png";

export const Summary = () => {
  const [lnkMouOver, setLknOver] = useState(false);
  const [gitMouOver, setgitOver] = useState(false);

  return (
    <>
      <div className="summary">
        <div className="summary-info">
          <div className="sum-links">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/maria-pia-nattero"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div
                    onMouseOver={() => setLknOver(true)}
                    onMouseOut={() => setLknOver(false)}
                  >
                    <img src={lnkMouOver ? lnkOver : lnkOut} />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pianattero"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div
                    onMouseOver={() => setgitOver(true)}
                    onMouseOut={() => setgitOver(false)}
                  >
                    <img src={gitMouOver ? gitOver : gitOut} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>
              Hello! <br /> I am Pía
            </h1>
            <h2 style={{ color: "gray", fontWeight: 200 }} className="pb-2">
              Frontend Developer
            </h2>
            <button className="m-3 btn btn-dark">
              <i className="bi bi-send"></i> Contact Me
            </button>
          </div>
          <img className="pp" src="../../../public/images/pp.png" />
        </div>
        <button className="btn btn-dark mt-5">
          <i className="bi bi-arrow-down-short"></i>
          Scroll down
          <i className="bi bi-arrow-down-short"></i>
        </button>
      </div>
    </>
  );
};
