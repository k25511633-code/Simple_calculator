# Ex04 Simple Calculator - React Project
## Date:24-11-2026
## Name : Kaviya R
## Reg No :212225040179

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM
## App.jsx
```c

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
```
## App.css
```c

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.calculator {
  width: 217px;
  margin: 100px auto;
  padding: 18px;
  background-color: white;
  border-radius: 9px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

h3 {
  text-align: center;
  font-size: 16px;
  margin: 14px 0;
}

input {
  width: 100%;
  height: 37px;
  margin-bottom: 10px;
  text-align: right;
  font-size: 15px;
  padding: 5px;
  border: 1px solid #aaa;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
}

button {
  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #087bfa;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

## OUTPUT
![alt text](<Screenshot 2026-11-24 162239.png>)

## RESULT
The program for developing a simple calculator in React.js is executed successfully.
