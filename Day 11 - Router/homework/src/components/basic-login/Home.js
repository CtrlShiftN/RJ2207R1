import { useLocation } from "react-router-dom";

export const Home = () => {
    let {state} = useLocation();
    console.log(state);
    return (
        <div className="container pt-3">
           <p>Account: {state.username} - {state.password}</p>
        </div>
    )
}