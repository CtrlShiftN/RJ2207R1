import { useParams } from "react-router-dom"

export const Contact2 = () => {
    let { pid } = useParams();
    return (
        <div>
            <h1>This is contact page with pid = {pid}</h1>
        </div>
    )
}