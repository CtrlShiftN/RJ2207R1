import { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            currentValue: ''
        };
    }
    handleChange = (e) => {
        this.setState({ currentValue: e.target.value });
    }
    handleClick = (e) => {
        const { todos } = this.state;
        if (!todos.includes(this.state.currentValue)) {
            todos.push(this.state.currentValue);
            this.setState({ todos: todos });
        } else {
            alert(this.state.currentValue + " is already in the list.");
        }
    }
    render() {
        return (
            <div className="container pt-4">
                <Input onChange={this.handleChange} type="text" placeholder="Enter a work to do" />
                <Button onClick={this.handleClick} label="Add" />
                <hr />
                <ol>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ol>
            </div>
        )
    }
}
export default TodoList;