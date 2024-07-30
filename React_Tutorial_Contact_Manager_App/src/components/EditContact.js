import React, { useState } from "react";
// import withNavigation from "./withNavigation";
// import withLocation from './withLocation';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContextCrud } from "../context/ContactsCRUDContext";
const EditContact =()=> {
  const navigate=useNavigate();
  const location=useLocation();
  const {id,name,email}=location.state.contact;

  const { updateFormHandler }= useContextCrud();
  const [newName,setName]=useState(name);
   const [newEmail,setEmail]=useState(email);

 
// constructor(props){
//     super(props);
//     const {id,name,email} = this.props.location.state.contact;
//     this.state ={
//         id,
//         name,
//         email,
//     }
// }
 const update =(e)=>{
  e.preventDefault();
  if(newName=="" || newEmail==""){
    alert("All fields should be filled!")
    return
  }
  updateFormHandler({id,name:newName,email:newEmail});
  setName("");
  setEmail("");
 navigate('/');
  // this.props.navigate("/");
  // console.log(this.state);
  // console.log(this.props);
}


    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newName}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) =>setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );

}

export default EditContact;