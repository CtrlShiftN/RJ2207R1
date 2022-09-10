import { useState } from "react";

function MyForm() {
    const [username, setUsername] = useState('');
    return (
        <div>
            <form>
                <h1>Hello {username}</h1>
                <p>Enter your name:</p>
                <input type='text'
                    onChange={event => setUsername(event.target.value)}
                />
            </form>
        </div>
    )
}
export default MyForm;