import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1)
    }
    const increasement = () => {
        setCount(count + 1)
    }
    return (
        <div className="container">
            <p>Count: {count}</p>
            <button onClick={increasement}>Count</button>
        </div>
    )
}