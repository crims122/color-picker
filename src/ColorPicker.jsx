import React, {useState} from 'react'

export default function ColorPicker() {

    const [color, setColor] = useState("#FFFF");

    function handleColorChange(e) {
        setColor(e.target.value)
    }   

    
    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Color: {color}</p>
            </div>
            <div className="color-changer">
                <label>Select: </label>
                <input type="color" onChange={handleColorChange}></input>
            </div>
        </div>
    )

}