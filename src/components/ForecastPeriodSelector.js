import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ForecastWeek from './ForecastWeek';

function ForecastPeriodSelector(props) {
    return (
        <Tabs
        defaultActiveKey="hour"
        id="forecast-period-selector"
        className="mb-3"
        >
            <Tab eventKey="oneday" title="1 день">
                <ForecastWeek city={props.city} daysForward={1}/>
            </Tab>
            <Tab eventKey="twodays" title="2 дня">
                <ForecastWeek city={props.city} daysForward={2}/>
            </Tab>
            <Tab eventKey="fivedays" title="5 дней">
                <ForecastWeek city={props.city} daysForward={5}/>
            </Tab>
        </Tabs>
    );
}


export default ForecastPeriodSelector;
