import React, { useState } from 'react';

const ColorGenerator = () => {
    const [red, setRed] = useState(37);
    const [green, setGreen] = useState(37);
    const [blue, setBlue] = useState(37);

    const updateColor = (e) => {
        const value = Number(e.target.value);
        const name = e.target.name;
        if (value >= 0 && value <= 255) {
            if (name === 'red') setRed(value);
            if (name === 'green') setGreen(value);
            if (name === 'blue') setBlue(value);
        }else{
            alert('⚠ Invalid Input please enter value in the range 0-255')
        }
    };

    const bgColor =`rgb(${red}, ${green}, ${blue})`

    return (
        <div style={{
            marginTop: '1rem',
            display: 'grid',
            placeItems: 'center'
        }}>
            <h1>Color Generator</h1>
            <div>
                <div>
                    <label htmlFor="red">RED: </label>
                    <input
                        type="number"
                        placeholder='0-255'
                        name="red"
                        onChange={updateColor}
                    />
                </div>
                <div>
                    <label htmlFor="green">GREEN: </label>
                    <input
                        type="number"
                        placeholder='0-255'
                        name="green"
                        onChange={updateColor}
                    />
                </div>
                <div>
                    <label htmlFor="blue">BLUE: </label>
                    <input
                        type="number"
                        placeholder='0-255'
                        name="blue"
                        onChange={updateColor}
                    />
                </div>
                <div id='displayColor' style={{ width: '100px', height: '100px', background:bgColor}}></div>
            </div>
        </div>
    );
};

export default ColorGenerator;
