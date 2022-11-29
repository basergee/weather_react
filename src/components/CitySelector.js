import React, { useState } from 'react';


function CitySelector(props) {
    const arOptions = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Лондон'];
    const [cityIdx, setValue] = useState('');

    const options = arOptions.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });

    return (
        <div>
            <span>Выберите город: </span>
            <select value={cityIdx} onChange={(event) => {
                    setValue(event.target.value);
                    props.onCitySelect(arOptions[event.target.value]);
                }}>
                {options}
            </select>
            <p>
                Выбран: {arOptions[cityIdx]}
            </p>
        </div>
    );
}


export default CitySelector;
