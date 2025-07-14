import "./App.css";
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

  // Set Operation Toggle & functionality

  function handleOper(i) {
    switch(i){
      case 0:
        setOperator("AND")
        break;
      case 1:
        setOperator("OR")
        break;
      case 2:
        setOperator("XOR")
        break;
      case 3:
        setOperator("NOT")
        break;
      default:
    }
  }

  switch(operator){
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
      for(let i = 0; i < 8; i++){
        circleClass[i + 8] = "disActive" ;
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
        {/* 1st Input */}
        <div className="input">
          <h4>Enter A:</h4>
          <div className="circles">
            <div  onClick={() => {handleActiveA(0);}} className={(circleClass[0])}></div>
            <div  onClick={() => {handleActiveA(1);}} className={(circleClass[1])}></div>
            <div  onClick={() => {handleActiveA(2);}} className={(circleClass[2])}></div>
            <div  onClick={() => {handleActiveA(3);}} className={(circleClass[3])}></div>
            <div  onClick={() => {handleActiveA(4);}} className={(circleClass[4])}></div>
            <div  onClick={() => {handleActiveA(5);}} className={(circleClass[5])}></div>
            <div  onClick={() => {handleActiveA(6);}} className={(circleClass[6])}></div>
            <div  onClick={() => {handleActiveA(7);}} className={(circleClass[7])}></div>
          </div>
        </div>
        {/* 2nd Input */}
        <div className="input">
          <h4>Enter B:</h4>
          <div className="circles">
            <div  onClick={() => {handleActiveB(0);}} className={(circleClass[8])}></div>
            <div  onClick={() => {handleActiveB(1);}} className={(circleClass[9])}></div>
            <div  onClick={() => {handleActiveB(2);}} className={(circleClass[10])}></div>
            <div  onClick={() => {handleActiveB(3);}} className={(circleClass[11])}></div>
            <div  onClick={() => {handleActiveB(4);}} className={(circleClass[12])}></div>
            <div  onClick={() => {handleActiveB(5);}} className={(circleClass[13])}></div>
            <div  onClick={() => {handleActiveB(6);}} className={(circleClass[14])}></div>
            <div  onClick={() => {handleActiveB(7);}} className={(circleClass[15])}></div>
          </div>
        </div>
        {/* OPeration */}
        <div className="choose">
          <h4>Choose The Operation:</h4>
          <div className="operators">
            <div onClick={() => {handleOper(0);}} className={operatorClass[0]}>AND</div>
            <div onClick={() => {handleOper(1);}} className={operatorClass[1]}>OR</div>
            <div onClick={() => {handleOper(2);}} className={operatorClass[2]}>XOR</div>
            <div onClick={() => {handleOper(3);}} className={operatorClass[3]}>NOT</div>
          </div>
        </div>
        {/* The Result */}
        <div className="result">
          <h4>Result:</h4>
          <div className="circles">
            <div className={circleClass[16]}></div>
            <div className={circleClass[17]}></div>
            <div className={circleClass[18]}></div>
            <div className={circleClass[19]}></div>
            <div className={circleClass[20]}></div>
            <div className={circleClass[21]}></div>
            <div className={circleClass[22]}></div>
            <div className={circleClass[23]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
