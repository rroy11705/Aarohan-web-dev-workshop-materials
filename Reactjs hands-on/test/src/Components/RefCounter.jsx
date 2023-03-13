import React, { useRef, useEffect } from "react";

const Counter = () => {
    const counter = useRef(0);

    const clicked = (y) => {
        counter.current = y + 1
    }


    return (
        <React.Fragment>
            <p>Counter</p>
            <div style={{ display:'flex', gap: '10px', justifyContent: 'center' }}>
                <div>{counter.current}</div>
                <button onClick={() => clicked(counter.current)}>click me</button>
            </div>
        </React.Fragment>
    );
}

export default Counter;
