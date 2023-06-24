import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  //useSelector: retrieve a state object from store
  //global state
  //@useSelector(func(state)=> return obj (state.SliceName.StateName))
  const { name, cost } = useSelector((state) => {
    return {
      name: state.createCar.name,
      cost: state.createCar.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0; // 0 if not a number (cant parseInt)
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost })); //identical key&value
  };

  // <input> , onChange = handleChange , value : change as controlled variable

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              value={name}
              onChange={handleNameChange}
              className="input is-expanded"
            />
            <label className="label">Cost</label>
            <input
              value={cost || ""} // see if cost is defined , not default with 0
              onChange={handleCostChange}
              className="input is-expanded"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
