import React from "react";
import "./ContactPage.css";
const Contact = () => {
  return (
    <>
      <h2>Contact O-Robotics</h2>
      <div className="contact-container">
        {/* <p>Get in touch with us!</p> Maybe a paragraph with something? */}
        <ul>
          <li>
            <i className="fas fa-map-marker-alt" />
            <span>Find us at Ecopark:</span>
            <br />
            <br />
            <address> Bautavej 1A, 8210 Aarhus</address>
            <br />
          </li>
          {/* <li>
            <i className="fas fa-phone" />
            <span>Phone:</span>
            {/* which phone number should we add?  */}
          {/* <a href="tel:123-456-7890">123-456-7890</a>
          </li> */}
          <li>
            <i className="fas fa-envelope" />
            <span>Email:</span>
            <a href="mailto:hello@o-robotics.com">info@o-robotics.com</a>
          </li>
          <li>
            <i className="fas fa-globe" />
            <span>Website:</span>
            <a href="https://www.O-Robotics.com/">https://www.O-Robotics.com</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
