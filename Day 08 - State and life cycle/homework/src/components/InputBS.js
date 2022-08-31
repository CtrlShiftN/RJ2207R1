export default function InputBS(props) {
    return (
        <div className={props.classDivName}>
            <input className={props.className} type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
            <label>{props.label}</label>
        </div>
    )
}