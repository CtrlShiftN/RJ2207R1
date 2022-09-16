import { useLocation } from "react-router-dom"

export const EmployeeDetail = () => {
    const { state } = useLocation();
    return (
        <div>Employee detail: {state.name} - {state.age} years old</div>
    )
}