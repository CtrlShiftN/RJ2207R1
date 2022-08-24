export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>{props.label}</button> 
    )
}