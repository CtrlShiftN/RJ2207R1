import { useEffect, useState } from "react";

export default function Selector() {
    const [valueSelected, setValueSelected] = useState('');
    const [selected, setSelected] = useState(0);
    let programmingLanguages = ['Java', 'Angular', 'Javascript', 'PHP'];
    const choice = (e) => {
        setSelected(e.target.value);
    }
    useEffect(() => {
        setValueSelected(programmingLanguages[selected]);
    }, [selected]);
    return (
        <div className="container">
            Khoá học :
            <select onChange={e => { choice(e); }}>
                {
                    programmingLanguages.map((language, index) => (
                        <option value={index} key={index}>{language}</option>
                    ))
                }
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    )
}