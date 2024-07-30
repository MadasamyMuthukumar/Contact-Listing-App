import React from "react";
import { createContext, useState } from "react";
import { uuid } from 'uuidv4'
import { useContext } from "react";
import api from '../api/contacts'
const contactsCRUDContext = createContext();

//FUNCTION PROVIDING CONTEXT
export function ContactsCrudContextProvider({children}){
    const [contacts,setContacts] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");
  const [searchResults,setSearchResults] = useState([]);

      //RETRIEVE CONTACTS FROM JSON-SERVER
  const retrieveContacts = async ()=>{
    const response= await api.get("/contacts");
    if(response.data) setContacts(response.data);
  } 


//ADD A CONTACT
  const addFormHandler = async (contact) => {
    const request = {
      id:uuid(),
      ...contact,
    };
    const response = await api.post("/contacts",request);
    setContacts([...contacts, response.data]);
    // console.log(contact);
    // setContacts([...contacts,contact]);
    // setContacts([...contacts, { id: uuid(), ...contact }])
  }
   //UPDATE CONTACT
   const updateFormHandler = async (contact)=>{
    const response = await api.put(`/contacts/${contact.id}`,contact);
    const { id }= response.data;
    console.log("response  ", response.data);
    console.log("contact ", contact);
    setContacts(contacts.map((contact)=>{
      return contact.id === id ? response.data : contact;
    }));
  };



  //DELETE A CONTACT
  const removeContactHandler = async (id) => {
    await api.delete(`contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  //SEARCH CONTACT 


  const searchHandler = (searchTerms) =>{
    // console.log(searchTerm);
    setSearchTerm(searchTerms); 
    // console.log(searchTerm); USE THIS TO SAW HOW THE ENTERED VALUE GETS APPENDED TO THE SEARCH TERM SATE
    if(searchTerms!==""){
      const filteredList = contacts.filter((contact)=>{
        console.log(Object.values(contact)); //GIVES ONLY VALUES OF ALL OBJECTS IN OUR  CONTACT ARRAY
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerms.toLowerCase());
      });
      setSearchResults(filteredList);
    }else{
      //IF NO SEARCH TERM PROVIDES NEEDS TO DISPLAY ORIGANL LIST
      setSearchResults(contacts)
    }
  }

    const value = {
       contacts,
       searchTerm,
       searchResults,
       searchHandler,
       retrieveContacts,
       removeContactHandler,
       addFormHandler,
       updateFormHandler
       
    }
  
   
    return <contactsCRUDContext.Provider value={ value }>
          {children}
    </contactsCRUDContext.Provider>
}

//FUNCTION THAT WILL GIVE CONTEXT TO OTHER COMPONENTS
export function useContextCrud(){
    return useContext(contactsCRUDContext);
}