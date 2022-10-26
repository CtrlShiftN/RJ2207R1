export const WelcomeFunc = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello, {props.name} - {props.age}</h1>
        </div>
    )
}