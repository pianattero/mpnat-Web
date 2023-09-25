import "./AboutMe.css";

import pic2 from "/images/pic.png";

export const AboutMe = () => {
  return (
    <>
      <div id="about-me">
        <h1>About me</h1>
        <h6 style={{ color: "gray", fontWeight: 100 }}>My Introduction</h6>

        <div className="about-me-info">
          <img className="pics" src={pic2} />
          <div className="download-btns">
            <button className="btn btn-dark">
              <a
                style={{ textDecoration: "none" }}
                download
                href="https://drive.google.com/file/d/1oIVvKWc6oqBY6nAGbKYqyav_L55g6VPL/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-download"></i> Download CV (English)
              </a>
            </button>
            <button className="btn btn-dark">
              <a
                style={{ textDecoration: "none" }}
                download
                href="https://drive.google.com/file/d/1MIA-OW96WmxthTuW0SHRm1G6ltsIsA7e/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                <i className="bi bi-download"></i> Download CV (Spanish)
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
