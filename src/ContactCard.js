import React from "react";

function ContactCard(props) {
  return (
      <div className='card'>
          <h3 className='huvud'>{props.name}</h3>
          <h4>Email: {props.email}</h4>
          
          <p>phone: {props.tel}</p>
          <img src={props.img} alt=""/>

      </div>
  )
}

export default ContactCard;
