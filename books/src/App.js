import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  //DONT do: fetchBooks(); Re-render will be done immediately (loop forever)
  //DO: useEffect always call the function at first render,
  //**the following re-render may also have useeffect called by [] argument

  //pulling out the fetchbook function from context
  const { stableFetchBooks } = useContext(BooksContext);

  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);

  return (
    <div className="app">
      <h1>Your Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
