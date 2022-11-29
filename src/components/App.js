import React from "react";

import ForecastPeriodSelector from './ForecastPeriodSelector';
import CitySelector from './CitySelector';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleCitySelect = this.handleCitySelect.bind(this);
        this.state = {
            city: ''
        }
    }

    handleCitySelect(city) {
        this.setState({city});
    }

    render() {
        return (
            <div>
                <h1>Hello from React Component</h1>
                <CitySelector onCitySelect={this.handleCitySelect}/>
                {console.log(`Выбрали город ${this.state.city}`)}
                <ForecastPeriodSelector city={this.state.city}/>
            </div>
        )
    }
}

export default App;
