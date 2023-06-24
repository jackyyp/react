// We use <(contextName).provider value={values}> wrapper to pass down values
// in index.js , we also wrap with <Provider> (import from here)

import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const stableFetchBooks = useCallback(fetchBooks, []);

  const createBook = async (title) => {
    //do not use books.push({id:1 title: title})
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    // id may repeat (very low chance)
    const updatedBooks = [...books, response.data]; // create a brand new array for new reference and trigger rerender

    setBooks(updatedBooks);

    console.log("create book:", title);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }; // dont use {..books, title:newTitle}
        //reason: the other attributes may be outdated (multi users)
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    // key value is hv same name
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
    stableFetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
