export default function Alert(props) {
    return (
        <div className="alert alert-warning" role="alert">
            {props.text}
        </div>
    )
}