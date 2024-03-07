import { useReducer, useState } from "react";

function Test() {
  // const [count, setCount] = useState(0);

  // // function add() {
  // //   setCount(() => count + 1);
  // // }
  // // function minus() {
  // //   setCount(() => count - 1);
  // // }

  function reducer(state, action) {
    switch (action.type) {
      case "minus":
        return {
          ...state,
          count: state.count - 1,
        };
      case "add":
        return {
          ...state,
          count: state.count + 1,
        };

      default:
        throw new Error("action Unkown");
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "minus" })}>minus</button>
      <br></br>
      <span>{state.count}</span>
      <br></br>
      <button onClick={() => dispatch({ type: "add" })}>add</button>
    </div>
  );
}

export default Test;
