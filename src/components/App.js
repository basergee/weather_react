import React from "react";

import ForecastPeriodSelector from './ForecastPeriodSelector';
import CitySelector from './CitySelector';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from React Component</h1>
                <CitySelector />
                <ForecastPeriodSelector />
            </div>
        )
    }
}

export default App;
