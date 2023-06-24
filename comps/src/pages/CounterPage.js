import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// are we going to use immer? (optional at all)
//mutate state directly,and simply return nothing.

//prevent typo
const INCREMENT = "increment";
const CHANGE_VALUE = "change-value";
const DECREMENT = "decrement";
const ADD_VALUE = "add-value";

const counterReducer = (state, action) => {
  //return a new state ,
  //**no async ,no outside variable(recommended)
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case CHANGE_VALUE:
      return { ...state, valueToAdd: action.payload };
    case ADD_VALUE:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 }; //reset to 0
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  const initState = {
    count: initialCount,
    valueToAdd: 0,
  };

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({ type: CHANGE_VALUE, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent

    dispatch({ type: ADD_VALUE });
  };

  const [state, dispatch] = useReducer(counterReducer, initState);

  return (
    <Panel className="m-3">
      <h1>Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={state.valueToAdd || ""}
          type="number"
          onChange={handleChange}
        ></input>
      </form>
      <Button onClick={handleSubmit}>Add</Button>
    </Panel>
  );
}

export default CounterPage;

//count useEffect handleClick JSX
//create state ,log value , way to change value ,??

// --- create custom hook ---
// useCounter()
//  with count ,useEffect,handleClick() (just copy and cut that part of code lmao)
//

// --- using useReducer ---
// (alternative to multiple useState)
