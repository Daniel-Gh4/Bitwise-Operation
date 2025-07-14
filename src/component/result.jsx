function Result({circleClass}) {
    return <>
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
        </>;
}

export default Result;