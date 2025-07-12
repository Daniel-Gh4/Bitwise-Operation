import "./App.css";
import { useState } from "react";

function App() {
  // States & Variable
  let [inputA, setInputA] = useState(Array(8).fill(true));
  let [inputB, setInputB] = useState(Array(8).fill(true));
  let [oper, setOper] = useState(Array(4).fill(false));
  let circleR = Array(8).fill("circleR");
  let circleA = Array(8).fill("circleA");
  let circleB = Array(8).fill("circleB");
  let opera = Array(4).fill("oper");

   // Set A Toggle
  for (let i = 0; i <= 8; i++) {
    circleA[i] = inputA[i] ? "circleA" : "active";
  }

  function handleActiveA(i) {
    let newInputA = [...inputA];
    newInputA[i] = !newInputA[i];
    setInputA((inputA = [...newInputA]));
  }

  // Set B Toggle
  for (let i = 0; i <= 8; i++) {
    if (oper[3]) {
      circleB = Array(8).fill("vanish");
    } else {
      circleB[i] = inputB[i] ? "circleB" : "active";
    }
  }

  function handleActiveB(i) {
    let newInputB = [...inputB];
    newInputB[i] = !newInputB[i];
    setInputB((inputB = [...newInputB]));
  }

  // Set Operation Toggle & functionality
  for (let i = 0; i <= 4; i++) {
    opera[i] = !oper[i] ? "oper" : "opermode";
  }

  function handleOper(i) {
    setOper((oper = Array(4).fill(false)));
    let newoper = [...oper];
    newoper[i] = !newoper[i];
    setOper((oper = [...newoper]));
  }

  if (oper[0]) {
    for (let i = 0; i <= 8; i++) {
      circleR[i] = !inputA[i] && !inputB[i] ? "active" : "circleR";
    }
  } else if (oper[1]) {
    for (let i = 0; i <= 8; i++) {
      circleR[i] = !inputA[i] || !inputB[i] ? "active" : "circleR";
    }
  } else if (oper[2]) {
    for (let i = 0; i <= 8; i++) {
      circleR[i] =
        (inputA[i] && !inputB[i]) || (!inputA[i] && inputB[i])
          ? "active"
          : "circleR";
    }
  } else if (oper[3]) {
    for (let i = 0; i <= 8; i++) {
      circleR[i] = inputA[i] ? "active" : "circleR";
    }
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
            <div  onClick={() => {handleActiveA(0);}} className={(circleA[0])}></div>
            <div  onClick={() => {handleActiveA(1);}} className={(circleA[1])}></div>
            <div  onClick={() => {handleActiveA(2);}} className={(circleA[2])}></div>
            <div  onClick={() => {handleActiveA(3);}} className={(circleA[3])}></div>
            <div  onClick={() => {handleActiveA(4);}} className={(circleA[4])}></div>
            <div  onClick={() => {handleActiveA(5);}} className={(circleA[5])}></div>
            <div  onClick={() => {handleActiveA(6);}} className={(circleA[6])}></div>
            <div  onClick={() => {handleActiveA(7);}} className={(circleA[7])}></div>
          </div>
        </div>
        {/* 2nd Input */}
        <div className="input">
          <h4>Enter B:</h4>
          <div className="circles">
            <div  onClick={() => {handleActiveB(0);}} className={(circleB[0])}></div>
            <div  onClick={() => {handleActiveB(1);}} className={(circleB[1])}></div>
            <div  onClick={() => {handleActiveB(2);}} className={(circleB[2])}></div>
            <div  onClick={() => {handleActiveB(3);}} className={(circleB[3])}></div>
            <div  onClick={() => {handleActiveB(4);}} className={(circleB[4])}></div>
            <div  onClick={() => {handleActiveB(5);}} className={(circleB[5])}></div>
            <div  onClick={() => {handleActiveB(6);}} className={(circleB[6])}></div>
            <div  onClick={() => {handleActiveB(7);}} className={(circleB[7])}></div>
          </div>
        </div>
        {/* OPeration */}
        <div className="choose">
          <h4>Choose The Operation:</h4>
          <div className="opers">
            <div onClick={() => {handleOper(0);}} className={opera[0]}>AND</div>
            <div onClick={() => {handleOper(1);}} className={opera[1]}>OR</div>
            <div onClick={() => {handleOper(2);}} className={opera[2]}>XOR</div>
            <div onClick={() => {handleOper(3);}} className={opera[3]}>NOT</div>
          </div>
        </div>
        {/* The Result */}
        <div className="result">
          <h4>Result:</h4>
          <div className="circles">
            <div className={circleR[0]}></div>
            <div className={circleR[1]}></div>
            <div className={circleR[2]}></div>
            <div className={circleR[3]}></div>
            <div className={circleR[4]}></div>
            <div className={circleR[5]}></div>
            <div className={circleR[6]}></div>
            <div className={circleR[7]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
