import Button from "./Button";

export default function ActionLink() {
    const handleClick = (e) => {
        e.preventDefault();
        console.log((new Date()).getTime());
    }
    return (
        <div className="container pt-3">
            <a href="/index" onClick={handleClick}>
                Click_Me
            </a>
        </div>

    )
}