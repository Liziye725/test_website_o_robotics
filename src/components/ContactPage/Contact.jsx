import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa"

const Contact = () => {

    return (
      <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.561839718683!2d10.143228976451983!3d56.16468006019244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c1543ccbb2469%3A0xf15096ef04cfd561!2sEcopark!5e0!3m2!1sda!2sdk!4v1718431647357!5m2!1sda!2sdk"
              width="100%"
              height="300px"
              frameBorder="0"
              style={{ border: "1px solid #ccc" }}
            ></iframe>
                    <div className="col-md-4">
       
          <p>
            <a href="mailto:info@o-robotics.com">
              <CiMail size={24} />
              info@o-robotics.com
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/orobotics" target="_blank">
              <FaFacebook size={24} />
              Facebook
            </a>
          </p>
      <div className="col-md-4">
          <p>&copy; 2024 O-Robotics</p>
          <p>CVR 43505718</p>
            </div>

        </div>
      </div>
    )
  }

  export default Contact;
