import { useState } from "react";
import Button from "./button";
import './calculator.css'; // optional if separate styling

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // simple eval for calculation
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+",
    "C"
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
