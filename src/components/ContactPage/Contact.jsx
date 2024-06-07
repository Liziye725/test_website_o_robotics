import React from "react";
// import { CiMail } from "react-icons/ci";
// import { FaFacebook } from "react-icons/fa";
// import { GoogleMap, Marker } from "@react-google-maps/api";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="col-md-4">
          <h5>Find Us at Ecopark</h5>
          <p>Bautavej 1A, 8210 Aarhus</p>
          <p>
            <a href="info@o-robotics.com">
              {/* <CiMail size={24} /> */}
              info@o-robotics.com
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/orobotics" target="_blank">
              {/* <FaFacebook size={24} /> */}
              Facebook
            </a>
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8890.594753148!2d10.152964247369264!3d56.14588807171537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c1554fa9b3b5f%3A0x2f522fa34ebf0d39!2zQWFieSwgw4VyaHVz!5e0!3m2!1ssv!2sdk!4v1717871976207!5m2!1ssv!2sdk"
            width="100%"
            height="300px"
            frameBorder="0"
            style={{ border: "1px solid #ccc" }}
          ></iframe>
        </div>

        <div className="col-md-4">
          <p>&copy; 2024 O-Robotics</p>
          <p>CVR-nr 43505718</p>
        </div>
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
          <li>
            <i className="fas fa-phone" />
            <span>Phone:</span>
            {/* which phone number should we add?  */}
            <a href="tel:123-456-7890">123-456-7890</a>
          </li>
          <li>
            <i className="fas fa-envelope" />
            <span>Email:</span>
            <a href="mailto:hello@o-robotics.com">hello@o-robotics.com</a>
          </li>
          <li>
            <i className="fas fa-globe" />
            <span>Website:</span>
            <a href="https://www.O-Robotics.com/">https://www.O-Robotics.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
