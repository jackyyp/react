import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../store";

function CarSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.carsList.searchTerm;
  });

  const handleSearchChange = (event) => {
    dispatch(changeSearch(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3"> Mycars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
