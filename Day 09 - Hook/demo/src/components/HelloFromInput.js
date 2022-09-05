import { useState } from "react";

export default function Hello() {
    const [username, setUsername] = useState('');
    const [nameInput, setNameInput] = useState('');
    const handleChange = (e) => {
        setNameInput(e.target.value);
        console.log(e.target.value);
    }
    const handleClick = () => setUsername(nameInput);
    return (
        <div className="container">
            <p>Hello, {username}</p>
            <input type="text" onChange={handleChange} placeholder="Enter username"></input>
            <button onClick={handleClick}>Save</button>
        </div>
    )
}