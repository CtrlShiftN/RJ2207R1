import { useState } from "react";

function Form() {
    const [state, setState] = useState({
        username: '',
        age: null
    });

    const handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
            if (!Number(val)) {
                alert("Your age must be a number");
            }
        }
        setState({ [nam]: val });
    }

    return (
        <form>
            {/* <h1>Hello {username}</h1> */}
            <p>Enter your name, and submit:</p>
            <input type='text' name="username" onChange={handleChange} placeholder="Enter your name" />
            <br />
            <input type='text' name="age" onChange={handleChange} placeholder="Enter your age" />
            <br />
            <input type='submit' />
        </form>
    );
}

export default Form;
