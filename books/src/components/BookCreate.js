import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");

  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle(""); // empty input after each submit
  };

  return (
    <div className="book-create">
      <h3>Add a new book</h3>
      <form>
        <label>title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
