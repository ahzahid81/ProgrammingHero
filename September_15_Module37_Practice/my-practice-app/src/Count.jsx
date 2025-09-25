import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0);

    function increseCount(){
        const temp = count + 1;
        setCount(temp);
    }
    function decreseCount(){
        const temp = count - 1;
        setCount(temp);
    }
    function resetCount(){
        const temp = 0
        setCount(temp);
    }

    return (
        <div className>
            <p>Count is: {count}</p>
            <button onClick={increseCount}>Count++</button>
            <button onClick={decreseCount}>Count--</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}