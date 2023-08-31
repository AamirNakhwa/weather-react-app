import './WeatherCard.css';
import * as Icon from 'react-feather';

function WeatherCard(props) {
    const location = props.data.location;
    const current = props.data.current;

    return (
        <div className="container">
            <div className="weather-side">
                <div className="weather-gradient">

                </div>
                <div className="date-container">
                    <h2 className="date-dayname">{location.name}, {location.country}</h2>
                    <span className="date-day">{location.region}</span>
                    <span>{location.lat} {location.lon}</span>
                    <Icon.MapPin /><br />
                    <span>{location.tz_id}</span><br />
                    <span className="location">{location.localtime}</span>
                </div>
                <div className="weather-container">
                    <img src={current.condition.icon} alt={current.condition.text} />
                    <h1 className="weather-temp">
                    {current.temp_c}°C
                    </h1>
                    <h3 className="weather-desc">{current.condition.text}</h3>
                </div>
            </div>
            <div className="info-side">
                <div className="today-info-container">
                    <div className="today-info">
                        <div>
                            <span className="title">TEMPERATURE</span>
                            <span className="value">{current.temp_c} C° | {current.temp_f} F°</span>
                            <div className="clear"></div>
                        </div>

                        <div>
                            <span className="title">FEELS LIKE</span>
                            <span className="value">{current.feelslike_c} C° | {current.feelslike_f} F°</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">HUMIDITY</span>
                            <span className="value">{current.humidity}</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">CLOUD</span>
                            <span className="value">{current.cloud}</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">DAY/NIGHT</span>
                            <span className="value">{current.is_day === 1 ? <span>Day <Icon.Sun /></span> : <span>Night <Icon.Moon /></span>}</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">WIND</span>
                            <span className="value">{current.wind_mph} (mph) | {current.wind_kph} (kph)</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">WIND DEGREE</span>
                            <span className="value">{current.wind_degree}°-${current.wind_dir}</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">PRESSURE</span>
                            <span className="value">{current.pressure_mb}mb/{current.pressure_in}in</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">PRECIP</span>
                            <span className="value">{current.precip_mm}(mm)/{current.precip_in}(in)</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">VIS</span>
                            <span className="value">{current.vis_km}(km)/{current.vis_miles}(m) | {current.uv}(UV)</span>
                            <div className="clear"></div>
                        </div>
                        <div>
                            <span className="title">GUST </span>
                            <span className="value">{current.gust_mph}(mph) | {current.gust_kph}(kph)</span>
                            <div className="clear"></div>
                        </div>
                        <small className="time-stamp"><b>Last Updated:</b> {current.last_updated}</small>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default WeatherCard;
