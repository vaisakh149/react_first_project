import React, {useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
// import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./components/Header"
import Addcontact from "./components/AddContact"
import ContsctList from './components/ContactList'
import ContactDetails from './components/ContactDetails';



function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const unique_id = uuid();
  const [contacts, setContacts]= useState([]); 
 

  const addcontactHamdler=(contact)=>{
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact}]);
  };
const removeContactHandler=(id) =>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id;
  });
  setContacts(newContactList);
};

  // useEffect is used to retrie the store the values in localy 
  useEffect(()=>{
    const retrivContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivContacts) setContacts(retrivContacts);
  },[]);
// useEffect is used to store the values localy 
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className='ui container'>
       <Router>
           <Header/>
            <Switch>
            <Route 
            path='/' 
            exact 
            render={(props)=>(
            <ContsctList 
            {...props}
            contacts={contacts}
            getContactId={removeContactHandler} 
            />
            )}
            
            /> 
            <Route path='/add' 
            render ={(props)=>(
             <Addcontact 
             {...props}
              addcontactHamdler={addcontactHamdler}/>
            )}
            />
            <Route path="/contact/:id" component ={ContactDetails}/>
            
            </Switch>
            {/* <Addcontact addcontactHamdler={addcontactHamdler}/>
            <ContsctList contacts={contacts} getContactId={removeContactHandler}/> 
            
            component ={()=>(
            <ContsctList 
             contacts={contacts} 
             getContactId={removeContactHandler}
            />
            )}*/}
      </Router>
     
     

      
    </div>
  );
}

export default App;
