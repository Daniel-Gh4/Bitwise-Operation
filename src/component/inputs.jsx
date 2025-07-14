function Inputs({handleActiveA, handleActiveB, circleClass}) {
  
  return <>
  
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
      </>;
}

export default Inputs;
