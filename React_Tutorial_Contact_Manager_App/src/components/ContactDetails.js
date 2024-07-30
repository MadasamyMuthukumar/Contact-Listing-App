import React from "react";
import userpic from "../images/userpic.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ContactDetails = (props) => {
//  console.log(props);
const location=useLocation();
const { contact } = location.state;
console.log(contact);
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
            <img src={userpic} alt="user" />
        </div>
        <div className="content">
            <div className="header">{contact.name}</div>
            <div className="description">{contact.email}</div>
        </div>
        </div>  
      <div className="center-div">
        <Link to="/">
        <button className="ui button blue center">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
