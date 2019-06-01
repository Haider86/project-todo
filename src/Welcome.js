import React from "react";

export default function Todo() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const style={
      fontSize:30
  }

  if (hours < 12) {
    timeOfDay = "morning";
    style.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay="afternoon";
    style.color="#2e0927"
  } else {
    timeOfDay = "night";
    style.color="#d90000"

  }
  return (
    <div className='to'>
      <h1 style={style}>Good {timeOfDay}</h1>
    </div>
  );
}
