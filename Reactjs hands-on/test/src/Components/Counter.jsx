import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCount = () => {
        setCounter(prev => prev + 1);
    }

    const decreaseCount = () => {
        setCounter(prev => prev - 1);
        console.log(counter)
    }


    return (
        <React.Fragment>
            <p>Counter</p>
            <div style={{ display:'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={decreaseCount}>-</button>
                <span>{counter}</span>
                <button onClick={increaseCount}>+</button>
            </div>
        </React.Fragment>
    );
}

export default Counter;
