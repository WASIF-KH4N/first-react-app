import { useState } from "react";
import Button from "./button";
import './calculator.css'; // optional if separate styling
import toast, { Toaster } from "react-hot-toast";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
  if (value === "C") {
    setInput("");
  } 
  else if (value === "=") {
    try {
      if (!input) return;
      setInput(eval(input).toString());
    } catch (error) {
      toast.error("Invalid calculation ❌");
    }
  } 
  else {
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
    <>
    <Toaster position="top-right" />
  <div className="calculator">
    <div className="display">{input || "0"}</div>
    <div className="buttons">
      {buttons.map((btn, index) => (
        <Button key={index} value={btn} onClick={handleClick} />
      ))}
    </div>
  </div>
  </>
   
  );
}

export default Calculator;
