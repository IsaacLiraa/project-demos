import { useReducer, useState } from "react"

const initialState = {count: 0}

const CounterReducer = () => {
    const [inputValue, setInputValue] = useState(0)

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return {count: parseInt(state.count + 1)}
            case "decrement":
                return {count: parseInt(state.count - 1)}
            case "reset":
                return {count : state.count = 0}
            case "increaseByAmount":
                return {count: state.count + action.payload}
            case "decreaseByAmount":
                return {count: state.count - action.payload}
            default:
                return state.count;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        <button onClick={() => dispatch({type: "increaseByAmount", payload: Number(inputValue)})}>Add</button>
        <button onClick={() => dispatch({type: "decreaseByAmount", payload: Number(inputValue)})}>Subtract</button>
    </div>
  )
}

export default CounterReducer