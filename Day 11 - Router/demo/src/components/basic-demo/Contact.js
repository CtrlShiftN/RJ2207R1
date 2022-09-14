import { useNavigate } from "react-router-dom"

export const Contact = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1>This is contact page</h1>

            <button type="button" onClick={() => navigate(-1)}>Back</button>
            <button type="button" onClick={() => navigate('/')}>Home</button>
        </div>
    )
}