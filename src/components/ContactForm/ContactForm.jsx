import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <>
      <div id="contact-form">
        <h1 className="text-center">Contact Info</h1>
        <h6 style={{ color: "gray", fontWeight: 100, textAlign: "center" }}>
          Get In Touch
        </h6>

        <div className="contacts">
          <div>
            <h6>
              <i className="bi bi-telephone"></i> Call me
            </h6>
            <h6>+34 617 14 06 35</h6>
          </div>
          <div>
            <h6>
              <i className="bi bi-envelope"></i> Email
            </h6>
            <h6>mariapianattero@gmail.com</h6>
          </div>
        </div>
      </div>
    </>
  );
};
