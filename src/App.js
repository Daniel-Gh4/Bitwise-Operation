import "./App.css";
import Inputs from "./component/inputs";
import Operator from "./component/operators";
import Result from "./component/result";
import { useState } from "react";

function App() {
  // States & Variable
  let [inputA, setInputA] = useState(Array(8).fill(true));
  let [inputB, setInputB] = useState(Array(8).fill(true));
  let [operator, setOperator] = useState("AND");
  let circleClass = Array(24).fill("bitCircle");
  let operatorClass = Array(4).fill("operator");

   // Set A Toggle
  for (let i = 0; i < 8; i++) {
    circleClass[i] = inputA[i] ? "bitCircle" : "active";
  }

  function handleActiveA(i) {
    let newInputA = [...inputA];
    newInputA[i] = !newInputA[i];
    setInputA([...newInputA]);
  }

  // Set B Toggle
  for (let i = 0; i < 8; i++) {
      circleClass[i + 8] = inputB[i] ? "bitCircle" : "active";
    }

  function handleActiveB(i) {
    let newInputB = [...inputB];
    newInputB[i] = !newInputB[i];
    setInputB([...newInputB]);
  }

  // Set Operators Functionality
  function handleOper(i) {
    switch (i) {
      case 0:
        setOperator("AND");
      case 1:
        setOperator("OR");
        break;
      case 2:
        setOperator("XOR");
        break;
      case 3:
        setOperator("NOT");
        break;
      default:
    }
  }

  switch (operator) {
    case "AND":
      operatorClass[0] = "activeOperator";
      for (let i = 0; i < 8; i++) {
        circleClass[i + 16] = !inputA[i] && !inputB[i] ? "active" : "bitCircle";
      }
      break;
    case "OR":
      operatorClass[1] = "activeOperator";
      for (let i = 0; i < 8; i++) {
        circleClass[i + 16] = !inputA[i] || !inputB[i] ? "active" : "bitCircle";
      }
      break;
    case "XOR":
      operatorClass[2] = "activeOperator";
      for (let i = 0; i < 8; i++) {
        circleClass[i + 16] =
          (inputA[i] && !inputB[i]) || (!inputA[i] && inputB[i])
            ? "active"
            : "bitCircle";
      }
      break;
    case "NOT":
      for (let i = 0; i < 8; i++) {
        circleClass[i + 8] = "disActive";
      }
      operatorClass[3] = "activeOperator";
      for (let i = 0; i < 8; i++) {
        circleClass[i + 16] = inputA[i] ? "active" : "bitCircle";
      }
      break;
    default:
  }


  return (
    // BODY
    <div className="center body">
      {/* Main Project */}
      <div className="main">
        <h1>Bitwise Operation</h1>
        <Inputs handleActiveA={handleActiveA} handleActiveB={handleActiveB} circleClass={circleClass} />
        <Operator handleOper={handleOper} operatorClass={operatorClass} />
        <Result circleClass={circleClass} />
      </div>
    </div>
  );
}

export default App;
