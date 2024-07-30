import React, { useState, useEffect } from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter , Routes, Route, Switch } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import api from '../api/contacts'
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCRUDContext";

function App() {

  


  // useEffect(() => {
  //   const getAllContacts = async ()=> {
  //     const allContacts = await retrieveContacts();
  //     if(allContacts) setContacts(allContacts)
  //   }
    // getAllContacts();
  //   // const retrievedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   // // setContacts(retrievedItems);
  //   // console.log("retireve items");
  //   // console.log(retrievedItems);
  //   // if (retrievedItems) setContacts(retrievedItems);
  // }, []) //EXECUTES ONCE AFTER THE COMPONENT  BUILD (GETING ALL THE ITEMS FROM THE LOCALSTORAGE AFTER THE FIRST RENDER)


  return (
    <div className="ui container">
      <BrowserRouter>
       <Header />   {/*Header constant throughout the page */}

{/* ROUTES ACT AS SWITCH IF FIRST PATH MATCHES IT WONT GO FOR OTHERS */}
   <ContactsCrudContextProvider>

    <Routes>  
      
      <Route path="/" element={<ContactList />} />  
      {/* ALL PATHS ARE ONLY LOAD IF IT EXACTLY MATCHES */}
        <Route path="/add" element={<AddContact />} />

        <Route path="/edit" element={<EditContact />} />

        <Route path="/contact/:id" element={<ContactDetails />}/>
        {/* <Route path="/add" 
        render={(props)=>(
          <AddContact {...props} addFormHandler={addFormHandler} />
        )} />  */}
      </Routes>
      </ContactsCrudContextProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
