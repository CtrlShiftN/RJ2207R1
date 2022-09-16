import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"

export const Routing = () => {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}