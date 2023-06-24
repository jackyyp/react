import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(
    // this  is the state obj
    ({ createCar, carsList: { cars, searchTerm } }) => {
      // lets put filtering logic inside
      const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars, // array
        name: createCar.name,
      };
    }
  );

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // see if name is empty , if not empty , return the last true (that thing)
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      // return early if bold is false ( && )
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        {/* use arrow function when passing in argument!!!!!!!!! */}
        <button className="button-is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{renderedCars}</div>;
}

export default CarList;
