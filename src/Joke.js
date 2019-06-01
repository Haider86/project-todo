import React from "react";

function Joke(props) {
  return (
    
      <div className="joke-main">
        <h3 style={{ display: props.question ? "block" : "none" }}>
          Question: {props.question}
        </h3>
        <h3 style={{ color: !props.question && "red" }}>
          Answer:{props.punshLine}
        </h3>
        <hr />
      </div>
    
  );
}

export default Joke;
