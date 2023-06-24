import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  // onSubmit is a prop
  const [term, setTerm] = useState(""); // we can set default value in here

  const handleFormSubmit = (event) => {
    event.preventDefault(); // prevent the default behavior of form submit (reloading the page)
    //DONT write this to retrieve input: document.querySelector('input').value
    onSubmit(term);
  };

  const handleChange = (event) => {
    //update the state and pass back to parent
    setTerm(event.target.value); // we know this from F12 by logging the whole event into browser
  }; //.replace(/[a-z]/,'') this regex disabled lowercase letter

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
