import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
