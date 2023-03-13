import React, { useState, useEffect } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    useEffect(() => {
        console.log(`counter 1: ${count}, counter 2: ${counter2}`);
    }, [counter2])
  
    return (
        <>
            <h1>Counter 1</h1>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(prev => prev + 1)}>Click me</button>

            <h1>Counter 2</h1>
            <p>You Clicked {counter2} times</p>
            <button onClick={() => setCounter2(prev => prev + 1)}>Click me</button>
        </>
    );
}

export default UseEffect;
