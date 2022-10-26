import { Component } from "react";

export default class WelcomeClass extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} - {this.props.age}</h1>
            </div>
        )
    }
}