import { useState } from "react"

export const MyConditionalForm = () => {
    const [mode, setMode] = useState("edit")
    const [account, setAccount] = useState({ username: "", age: 1 });
    const [error, setError] = useState()

    const handleChange = (e) => {
        if (account.age < 0 || account.age >= 200) {
            setError("Age should be between 0 and 200");
        } else {
            setAccount({ ...account, [e.target.name]: e.target.value });
        }

        // console.log(account);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (account.age < 0 || account.age >= 200) {
            setError("Age should be between 0 and 200");
        }
        console.log(error);
        // setMode("view")
    }

    const changeMode = () => {
        setMode("edit");
    }

    if (mode === "view") {
        return (
            <div className="container pt-3">
                <h1>Hello {account.username}</h1>
                <button onClick={changeMode}>Change mode</button>
            </div>
        )
    } else {
        return (
            <div className="container pt-3">
                <h1>My Form</h1>
                <form onSubmit={handleSubmit}>
                    <p>Username: {account.username}</p>
                    <input name="username" type="text" value={account.username} onChange={handleChange} placeholder="Enter your username" />
                    <br />
                    <input name="age" type="number" value={account.age} onChange={handleChange} placeholder="Enter your age" />
                    {
                        error ? <span className="text-danger">{error}</span> : ""
                    }
                    <br />
                    <input type="submit" ></input>
                </form>
            </div>
        )
    }
}