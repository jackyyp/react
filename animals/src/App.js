import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["cow", "bird", "cat", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //array destructuring
  const [animals, setAnimals] = useState([]);
  // [state, setter(update)] = useState(default value of state)

  const handleClick = () => {
    //dont use animals.push(getRandomAnimal())! ( **we must use setter )
    setAnimals([...animals, getRandomAnimal()]); //only use setter to modify state value
    //calling setter ==> rerender this component
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />; // **key is very important here
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list"> {renderedAnimals} </div>
    </div>
  );
}

export default App;
