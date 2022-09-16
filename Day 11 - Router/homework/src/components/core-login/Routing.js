import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Employee } from "./Employee"
import { EmployeeDetail } from "./EmployeeDetail"
import { Login } from "./Login"

export const Routing = () => {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/employee-detail/:pid" element={<EmployeeDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}