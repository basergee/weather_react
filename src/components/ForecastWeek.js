import React, { useState } from 'react';
import axios from 'axios';


class ForecastWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {
                list:[]
            }
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.city !== prevProps.city) {
            const apikey = process.env.REACT_APP_OPWEATHER_APIKEY;
            const city = this.props.city;
            const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apikey}&units=metric`;

            axios.get(url)
                .then(res => {
                    const weather = res.data;
                    this.setState({ weather });
                })
                .catch(error => {
                    console.log(error.response.statusText);
                });
        }
    }

    render() {
        return (
            <>
                <p>{console.log(this.state.weather.list)}Погода на неделю</p>
                <ul>
                {
                    this.state.weather.list.map(forecast =>
                        <li key={forecast.dt}>{forecast.dt_txt + ' -> ' +
                            forecast.main.temp}</li>
                    )
                }
                </ul>
            </>
        );
    }
}

export default ForecastWeek;
