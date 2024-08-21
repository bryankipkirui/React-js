import React from "react";
import './App.css';
import Card from "./card";
import contacts from "../contacts";


function CreateCard(contact){
   return (
    <Card 
        id = {contact.id}
        key = {contact.id}
        name = {contact.name}
        img = {contact.imgURL}
        tel ={contact.phone}
        em = {contact.email}
    />
   );
}

function App(){
    return(
    <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(CreateCard)}
    </div>
    );
}

export default App;