import React from "react";
import { FaPhone, FaUserAlt } from "react-icons/fa";
const Contact = ({ icon, altImg, firstName, lastname, phoneNumber }) => {
  return (
    <div className="contact">
      <div>
        {!icon ? (
          <FaUserAlt className="no-user-img" />
        ) : (
          <img src={icon} alt={altImg} />
        )}
      </div>
      <div>{!firstName ? "John" : firstName}</div>
      <div>{!lastname ? "Smith" : lastname}</div>
      <div>
        {!phoneNumber ? (
          "000-000"
        ) : (
          <a href={`tel:${phoneNumber}`} style={{ color: "lightblue" }}>
            {phoneNumber}
          </a>
        )}
        <FaPhone
          style={{
            color: "green",
            marginLeft: "10px",
            fontSize: "15px",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
