import { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class BMICalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
            bmi: 0
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    check = (e) => {
        e.preventDefault(); // prevent default behaviors
        var bmiResult = this.state.weight / Math.pow(this.state.height, 2);
        this.setState({bmi: bmiResult});
    }
    handleSubmit = (e) => {
        console.log("Submit");
    }
    render() {
        return (
            <div className="container">
                <h1>Tính chỉ số BMI</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input value={this.state.height} name="height" type="number" onChange={this.handleChange} label="Chiều cao: " placeholder="Nhập vào chiều cao" />
                    <Input value={this.state.weight} name="weight" type="number" onChange={this.handleChange} label="Cân nặng: " placeholder="Nhập vào cân nặng" />
                    <p>Chỉ số BMI của bạn: {this.state.bmi}</p>
                    <Button className="btn btn-primary" label="Check" onClick={this.check} />
                </form>
            </div>
        )
    }
}

export default BMICalculator;