import React from "react";
import "./UserCard.css";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const UserCard = (props) => {
  return (
    <div className="userCard">
      <div className="user-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width="100%" height="100%" />
      </div>
      <h2>{props.user.name}</h2>
      <h3>{props.user.email}</h3>
      <div className="line"></div>
      <div className="social-icons">
        <FaInstagram color="red" href="#" />
        <FaWhatsapp color="green" />
        <CiLinkedin color="navyblue" />
        <FaTwitter color="skyblue" />
      </div>
    </div>
  );
};

export default UserCard;
