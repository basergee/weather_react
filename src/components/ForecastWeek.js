import React, { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


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
        let someDate = new Date();
        let result = someDate.setDate(someDate.getDate() + this.props.daysForward);
        let endDate = new Date(result);

        // Отбрасываем секунды и миллисекунды, чтобы привести время к одному
        // формату, потому что в данных прогноза от сервера их нет.
        endDate = new Date(endDate.setSeconds(0, 0) / 1000);

        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Время</th>
                            <th>Температура, С</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.weather.list.map(forecast => {
                            // Выводим прогноз только на заданное количество дней
                            if (forecast.dt < endDate.getTime()) {
                                return (
                                    <tr>
                                        <td key={forecast.dt}>{forecast.dt_txt}</td>
                                        <td>{forecast.main.temp}</td>
                                    </tr>
                                );
                            }
                        })
                    }
                    </tbody>
                </Table>
            </>
        );
    }
}

export default ForecastWeek;
