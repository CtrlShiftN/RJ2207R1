export default function Input(props) {
    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label><br/>
            <input type={props.type} className={props.className} onChange={props.onChange} onKeyUp={props.onKeyUp} placeholder={props.placeholder} value={props.value} size={props.size} name={props.name}></input>
        </div>
    )
}