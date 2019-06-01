import React from 'react';

function Meny(props){
    return(
        <div className="meny">
            <h3>Name: {props.name}</h3>
            <h3>price: {props.price}</h3>
            <h3>size: {props.size}</h3>
            <img src={props.img} alt=""/>
        </div>
    )
}


export default Meny