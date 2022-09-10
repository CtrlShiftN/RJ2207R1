import { useState } from "react";

function Submit() {
    const [account, setAccount] = useState({ username: '', password: '' });
    // const [username, setUsername] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        // alert("You are submitting " + username);
        console.log(account);
    };
    const handleChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={submitHandler}>
            {/* <h1>Hello {username}</h1> */}
            <p>Enter your name, and submit:</p>
            <input type='text' name="username" onChange={handleChange} placeholder="Enter your name" />
            <br />
            <input type='text' name="password" onChange={handleChange} placeholder="Enter your password" />
            <br />
            <input type='submit' />
        </form>
    );
}
export default Submit;