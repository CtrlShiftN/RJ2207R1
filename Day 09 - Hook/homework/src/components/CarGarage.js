import { useState } from "react";

export default function CarGarage() {
    const carArr = ['Audi', 'Beverly', 'Volvo', 'KIA', 'Mayback'];
    const colorArr = ['Red', 'Green', 'Yellow', 'Blue', 'Magenta'];

    const [selectedCar, setSelectedCar] = useState({ car: carArr[0], color: colorArr[0] });

    const handleChange = e => {
        setSelectedCar({ ...selectedCar, [e.target.name]: e.target.value });
    }
    return (
        <div className="container">
            <h2>Select your car</h2>
            Select a car
            <select name="car" onChange={handleChange}>
                {
                    carArr.map((car, index) => (
                        <option value={car} key={index}>{car}</option>
                    ))
                }
            </select>
            <br />
            Select a color
            <select name="color" onChange={handleChange}>
                {
                    colorArr.map((color, index) => (
                        <option value={color} key={index}>{color}</option>
                    ))
                }
            </select>
            <p>You selected a {selectedCar.color} - {selectedCar.car}</p>
        </div>
    )
}