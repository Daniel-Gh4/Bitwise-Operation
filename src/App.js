import "./App.css";
import { useState } from "react";

function App() {
  // States & Variable
  let [inputA, setInputA] = useState(Array(8).fill(true));
  let [inputB, setInputB] = useState(Array(8).fill(true));
  let [oper, setOper] = useState(Array(4).fill(false));
  let circle = Array(24).fill("bitCircle");
  let opera = Array(4).fill("oper");

   // Set A Toggle
  for (let i = 0; i < 8; i++) {
    circle[i] = inputA[i] ? "bitCircle" : "active";
  }

  function handleActiveA(i) {
    let newInputA = [...inputA];
    newInputA[i] = !newInputA[i];
    setInputA((inputA = [...newInputA]));
  }

  // Set B Toggle
  for (let i = 0; i < 8; i++) {
    if (oper[3]) {
      for(let i = 0; i < 8; i++){
        circle[i + 8] = "vanish" ;
      }
    } else {
      circle[i + 8] = inputB[i] ? "bitCircle" : "active";
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
    for (let i = 0; i < 8; i++) {
      circle[i + 16] = !inputA[i] && !inputB[i] ? "active" : "bitCircle";
    }
  } else if (oper[1]) {
    for (let i = 0; i < 8; i++) {
      circle[i + 16] = !inputA[i] || !inputB[i] ? "active" : "bitCircle";
    }
  } else if (oper[2]) {
    for (let i = 0; i < 8; i++) {
      circle[i + 16] =
        (inputA[i] && !inputB[i]) || (!inputA[i] && inputB[i])
          ? "active"
          : "bitCircle";
    }
  } else if (oper[3]) {
    for (let i = 0; i < 8; i++) {
      circle[i + 16] = inputA[i] ? "active" : "bitCircle";
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
            <div  onClick={() => {handleActiveA(0);}} className={(circle[0])}></div>
            <div  onClick={() => {handleActiveA(1);}} className={(circle[1])}></div>
            <div  onClick={() => {handleActiveA(2);}} className={(circle[2])}></div>
            <div  onClick={() => {handleActiveA(3);}} className={(circle[3])}></div>
            <div  onClick={() => {handleActiveA(4);}} className={(circle[4])}></div>
            <div  onClick={() => {handleActiveA(5);}} className={(circle[5])}></div>
            <div  onClick={() => {handleActiveA(6);}} className={(circle[6])}></div>
            <div  onClick={() => {handleActiveA(7);}} className={(circle[7])}></div>
          </div>
        </div>
        {/* 2nd Input */}
        <div className="input">
          <h4>Enter B:</h4>
          <div className="circles">
            <div  onClick={() => {handleActiveB(0);}} className={(circle[8])}></div>
            <div  onClick={() => {handleActiveB(1);}} className={(circle[9])}></div>
            <div  onClick={() => {handleActiveB(2);}} className={(circle[10])}></div>
            <div  onClick={() => {handleActiveB(3);}} className={(circle[11])}></div>
            <div  onClick={() => {handleActiveB(4);}} className={(circle[12])}></div>
            <div  onClick={() => {handleActiveB(5);}} className={(circle[13])}></div>
            <div  onClick={() => {handleActiveB(6);}} className={(circle[14])}></div>
            <div  onClick={() => {handleActiveB(7);}} className={(circle[15])}></div>
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
            <div className={circle[16]}></div>
            <div className={circle[17]}></div>
            <div className={circle[18]}></div>
            <div className={circle[19]}></div>
            <div className={circle[20]}></div>
            <div className={circle[21]}></div>
            <div className={circle[22]}></div>
            <div className={circle[23]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
