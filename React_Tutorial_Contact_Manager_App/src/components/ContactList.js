import React, { useRef , useEffect } from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';
import { useContextCrud } from "../context/ContactsCRUDContext";


 
const ContactList = (props) => {
  //  console.log(props);
  const { contacts , retrieveContacts,searchTerm,searchResults,searchHandler} = useContextCrud();
  const inputEl = useRef('');
 
  useEffect(()=>{
    retrieveContacts();
  },[])

 
//  const contacts =[
//   {
//     id:12,
//     name:"ewre",
//     email:"ddfd",
//   },
//  ];
const getSearchTerm = (e)=>{
  // console.log(inputEl.current.value);
  searchHandler(e.target.value);
}


  const renderContactList = (searchTerm.length<1 ? contacts:searchResults).map((contact) => {
    return (
      <ContactCard contact={contact}
      key={contact.id}/>
    );
  });
  return (
  <div className="main">
    <h2>
      Contact List
      <Link to="/add">
      <button className="ui button blue right">Add Contact</button>
      </Link>
    </h2>
    <div className="ui search">
      <div className="ui icon input">
        <input  value={searchTerm} type="text" placeholder="Search Contact" className="prompt" onChange={(e)=>getSearchTerm(e)} />
        <i className="search icon"></i>
      </div>
    </div>
    <div className="ui celled list">{renderContactList.length >0 ? renderContactList: "No Results Found..!!"}</div>
  </div>
  );
};

export default ContactList;
