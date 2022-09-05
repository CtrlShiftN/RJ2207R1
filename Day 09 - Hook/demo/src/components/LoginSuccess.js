import { useState } from "react";

export default function LoginSuccess() {
    const [username, setUsername] = useState('Admin');
    console.log(username);
    return (
        <div className="container">
            <p>Hello {username}</p>
            <button onClick={() => setUsername("Nam")}>Change name</button>
        </div>
    )
}