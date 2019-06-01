import React from "react";
import Nav from "./Nav";
import Checkbox from "./Checkbox";
import Todo from "./Welcome";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./jokesDate";
import contactData from "./contactData";
import Meny from "./compo/Meny";
import menyData from "./compo/menyData.js";

function App() {
  const jokeComponent = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punshLine={joke.punshLine} />
  ));
  /* const contactComponent = contactData.map(contact => <ContactCard key={contact.id} name={contact.name} email={contact.email} tel={contact.tel} img={contact.img}/>)
   */

  const contactComponent = contactData.map(function(cont) {
    return (
      <ContactCard
        key={cont.id}
        name={cont.name}
        email={cont.email}
        tel={cont.tel}
        img={cont.img}
      />
    );
  });

const menyComponent = menyData.map(meny => (
    <Meny
      key={meny.id}
      name={meny.name}
      price={meny.price}
      size={meny.size}
      img={meny.img}
    />
  ));

  return (
    <div>
      <Nav />
      <Todo className="to" />
      <Checkbox />

      <div className="card1">{contactComponent}</div>
      <div>{jokeComponent}</div>
      <div>{menyComponent}</div>
    </div>
  );
}

export default App;
