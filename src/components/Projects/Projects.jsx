import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1>Projects</h1>
        <div className="project-info">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src="/public/images/wvsz.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Wacho vs. Zombies</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bul
              </p>
              <a
                href="https://wachovszombies.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark"
              >
                <i className="bi bi-eye"></i> Take a look!
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src="/public/images/horocrew.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">HoroCrew</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bul
              </p>
              <a
                href="https://horocrew.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark"
              >
                <i className="bi bi-eye"></i> Take a look!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
