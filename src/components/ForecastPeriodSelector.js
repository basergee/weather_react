import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function ForecastPeriodSelector() {
    return (
        <Tabs
        defaultActiveKey="hour"
        id="forecast-period-selector"
        className="mb-3"
        >
            <Tab eventKey="hour" title="Час">
                <p>Погода на час</p>
            </Tab>
            <Tab eventKey="twodays" title="2 дня">
                <p>Погода на два дня</p>
            </Tab>
            <Tab eventKey="week" title="Неделя">
                <p>Погода на неделю</p>
            </Tab>
        </Tabs>
    );
}


export default ForecastPeriodSelector;