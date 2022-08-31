import { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            operator: null,
            displayValue: ''
        }
    }
    calculate = (operator) => {
        const { firstNumber, secondNumber } = this.state;
        switch (operator) {
            case "+": this.setState({ displayValue: parseFloat(firstNumber) + parseFloat(secondNumber) }); break;
            case "-": this.setState({ displayValue: parseFloat(firstNumber) - parseFloat(secondNumber) }); break;
            case "*": this.setState({ displayValue: parseFloat(firstNumber) * parseFloat(secondNumber) }); break;
            case "/": this.setState({ displayValue: parseFloat(firstNumber) / parseFloat(secondNumber) }); break;
            default: this.setState({ displayValue: "Invalid input" }); break;
        }
    }
    render() {
        return (
            <div className="container pt-4">
                <h1>Calculator</h1>
                <Input type="number" onChange={(e) => this.setState({ firstNumber: e.target.value })} placeholder="Enter the first number" />
                <br />
                <Input type="number" onChange={(e) => this.setState({ secondNumber: e.target.value })} placeholder="Enter the second number" />
                <p>Result: {this.state.displayValue}</p>
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("+") }} label='+' />
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("-") }} label='-' />
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("*") }} label='*' />
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("/") }} label='/' />
            </div>
        )
    }
}
export default Calculator;