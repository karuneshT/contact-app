import React from "react"
import Card from "./Card"
import Contact from "../contacts"
import '../index.css';

function createCard(props){
  return (
    <Card 
    key={props.id}
    name={props.name} 
    img={props.img} 
    tel={props.tel} 
    email={props.email}/>
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="heading"> My Contacts</h1><br />
      {Contact.map(createCard)}
    </div>
  );
}

export default App;
