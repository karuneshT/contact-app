import React from "react";
import '../index.css';
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props){
    return (
        <div className="Card">
          <div className="top">
            <h2>{props.name}</h2>
            <Avatar img={props.img}/>
          </div>
          <div className="bottom">
            <Detail info={props.tel}/>
            <Detail info={props.email}/>
          </div>
        </div>
    );
};

export default Card;