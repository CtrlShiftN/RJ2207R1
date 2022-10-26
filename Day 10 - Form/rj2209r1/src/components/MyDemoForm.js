import { useState } from "react"

export const MyForm = () => {
    const [username, setUsername] = useState("");

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div className="container pt-3">
            <h1>My Form</h1>
            <form>
                <p>Username: {username}</p>
                <input type="text" onChange={handleChange} placeholder="Enter your username" />
                <input type="submit"></input>
            </form>
            <hr></hr>
            {/* <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
        </div>
    )
}