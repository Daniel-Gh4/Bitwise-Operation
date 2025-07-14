function Operator({handleOper, operatorClass}) {


  return <>
      <div className="choose">
        <h4>Choose The Operation:</h4>
        <div className="operators">
          <div onClick={() => {handleOper(0);}} className={operatorClass[0]}>AND</div>
          <div onClick={() => {handleOper(1);}} className={operatorClass[1]}>OR</div>
          <div onClick={() => {handleOper(2);}} className={operatorClass[2]}>XOR</div>
          <div onClick={() => {handleOper(3);}} className={operatorClass[3]}>NOT</div>
        </div>
      </div>
      </>;
}

export default Operator;
