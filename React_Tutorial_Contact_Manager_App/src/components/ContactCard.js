import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";  
import Swal from "sweetalert2"; 
import { useContextCrud } from "../context/ContactsCRUDContext";
const ContactCard = (props) => {
 const { removeContactHandler } = useContextCrud()
  const confirm = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeContactHandler(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
}
  const { id,name, email } = props.contact;
  // const data =[
  //   {
  //     id:1,
  //     name:"dfd",
  //     email:"fd",
  //   },
  // ];
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        {/* <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}> */}
        <Link to={`/contact/${id}`} state={{contact: props.contact}}>
        <div className="header">{name}</div>
        <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px",marginLeft:"10px" }}
        onClick={()=> confirm(id)}
      ></i>
      <Link to={`/edit`} state={{contact: props.contact}}>
       <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }}
      ></i>
      </Link>
 
    </div>
  );
};

export default ContactCard;
