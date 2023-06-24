import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./component/SearchBar";
import ImageList from "./component/ImageList";

function App() {
  const [images, setImages] = useState([]); // use state to trigger screen update

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
