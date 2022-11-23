import React, { useState } from 'react';


function CitySelector() {
    const arOptions = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Лондон'];
    const [value, setValue] = useState('');

    const options = arOptions.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });

    return (
        <div>
            <span>Выберите город: </span>
            <select value={value} onChange={(event) =>
                setValue(event.target.value)}>
                {options}
            </select>
            <p>
                Выбран: {arOptions[value]}
            </p>
        </div>
    );
}


export default CitySelector;
