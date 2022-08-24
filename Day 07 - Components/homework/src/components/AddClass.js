import React from "react";
class AddClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <p>Total: {this.props.firstNumber + this.props.secondNumber}</p>
        )
    }
}
export default AddClass;