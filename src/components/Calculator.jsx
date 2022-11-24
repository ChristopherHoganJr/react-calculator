import React, { useState } from "react";

// components
import CalcScreen from "./CalcScreen";
import CircleBtn from "./CircleBtn";
import EqualBtn from "./EqualBtn";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState("");
  const [equation, setEquation] = useState("");

  const addToEquation = (operator) => {
    setScreenValue(screenValue + `${operator}`);
    switch (operator) {
      case "x":
        setEquation(`${eval(equation)}` + "*");
        break;
      case "C":
        setEquation("");
        setScreenValue(0);
        break;
      case "÷":
        setEquation(`${eval(equation)}` + "/");
        break;
      case "+":
        setEquation(`${eval(equation)}` + "+");
        break;
      case "-":
        setEquation(`${eval(equation)}` + "-");
        break;
      case ".":
        setEquation(equation + ".");
        break;
      default:
        setEquation(equation + `${operator}`);

        break;
    }

    console.log(equation);
  };

  const calculateAll = () => {
    setEquation(eval(equation));
    setScreenValue(equation);
  };

  return (
    <div className="bg-slate-900 p-4 rounded-lg">
      {equation ? (
        <CalcScreen screenValue={equation} />
      ) : (
        <CalcScreen screenValue={equation} />
      )}

      <div className="cal-numbers grid grid-cols-4 gap-4">
        <CircleBtn sign={7} addToEquation={addToEquation} />
        <CircleBtn sign={8} addToEquation={addToEquation} />
        <CircleBtn sign={9} addToEquation={addToEquation} />
        <CircleBtn sign={"÷"} addToEquation={addToEquation} />
        <CircleBtn sign={4} addToEquation={addToEquation} />
        <CircleBtn sign={5} addToEquation={addToEquation} />
        <CircleBtn sign={6} addToEquation={addToEquation} />
        <CircleBtn sign={"x"} addToEquation={addToEquation} />
        <CircleBtn sign={1} addToEquation={addToEquation} />
        <CircleBtn sign={2} addToEquation={addToEquation} />
        <CircleBtn sign={3} addToEquation={addToEquation} />
        <CircleBtn sign={"-"} addToEquation={addToEquation} />
        <CircleBtn sign={"C"} addToEquation={addToEquation} />
        <CircleBtn sign={0} addToEquation={addToEquation} />
        <CircleBtn sign={"."} addToEquation={addToEquation} />
        <CircleBtn sign={"+"} addToEquation={addToEquation} />
      </div>
      <EqualBtn calculateAll={calculateAll} />
    </div>
  );
};

export default Calculator;
