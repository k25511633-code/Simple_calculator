
import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleOperator = (op) => {
    if (display === "") return;

    setFirstValue(Number(display));
    setOperator(op);
    setDisplay("");
  };

  const calculate = () => {
    if (firstValue === null || operator === null || display === "") return;

    const secondValue = Number(display);
    let result;

    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "/":
        result = secondValue === 0
          ? "Error"
          : firstValue / secondValue;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setFirstValue(null);
    setOperator(null);
  };

  const clear = () => {
    setDisplay("");
    setFirstValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <h3>Simple Calculator</h3>

      <input
        type="text"
        value={display}
        readOnly
      />

      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleOperator("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleOperator("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleOperator("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
