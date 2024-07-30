import React, { useState } from "react";
// import withNavigation from "./withNavigation";
import { useNavigate } from "react-router-dom";
import { useContextCrud } from "../context/ContactsCRUDContext";
const AddContact = () => {
  const navigate=useNavigate();
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
  const { addFormHandler } = useContextCrud();
const add =(e)=>{
  e.preventDefault();
  if(name=="" || email==""){
    alert("All fields should be filled!")
    return
  }
  addFormHandler({name,email});
  setName("");
  setEmail("");
  navigate('/');
  // this.props.navigate("/");
  // console.log(this.state);
  // console.log(this.props);
}

 
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  
}

export default AddContact;
