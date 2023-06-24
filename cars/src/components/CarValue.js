import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ carsList: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc, car) => acc + car.cost, 0); // acc
  });

  //     let total = 0;
  //     for (let car of filteredCars) {
  //       total += car.cost;
  //     }
  //     return total;
  //   });

  //lets use reduce function

  return <div className="car-value">Total Cost: $ {totalCost}</div>;
}

export default CarValue;
