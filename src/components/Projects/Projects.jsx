import "./Projects.css";

import wvsz from "/images/wvsz.jpg";
import horocrew from "/images/horocrew.jpg";

export const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <h6 style={{ color: "gray", fontWeight: 100 }}>Most Recent Work</h6>

      <div className="project-info">
        <div className="card" style={{ width: "20rem" }}>
          <img src={wvsz} className="card-img-top" alt="Wacho vs. Zombies" />
          <div className="card-body">
            <h5 className="card-title">Wacho vs. Zombies</h5>
            <p className="card-text">2D video game created with canvas.</p>
            <a
              href="https://wachovszombies.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              <i className="bi bi-eye"></i> Try it!
            </a>
            <a
              href="https://github.com/pianattero/wachovszombies"
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark mt-2"
            >
              <i className="bi bi-file-code"></i> Repository
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <img src={horocrew} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">HoroCrew</h5>
            <p className="card-text">
              Horoscope social page. Frontend & Backend tools.
            </p>
            <a
              href="https://horocrew.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              <i className="bi bi-eye"></i> Try it
            </a>
            <a
              href="https://github.com/orgs/P-B-org/repositories"
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark mt-2"
            >
              <i className="bi bi-file-code"></i> Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
