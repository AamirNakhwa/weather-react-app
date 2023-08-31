import { useRef, useState } from 'react';
import '../Components/InputForm.css';
import axios from 'axios';
import WeatherCard from './WeatherCard';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

function InputForm(props) {
    console.log('InputForm');
    let [weatherData, setWeatherData] = useState([]);

    const cityInput = useRef(null);
    const [isLit, setLit] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();
        const city = cityInput.current.value;
        if (!city) {
            alert('Please enter city...');
            return;
        }
        
        const url = `http://api.weatherapi.com/v1/current.json?key=505cd211ccfb414b811153617230707&q=${city}&aqi=no`;
        const response = await axios.get(url);

        cityInput.current.value = '';
        setLit(!isLit)

        //weatherData.push(response.data);
        weatherData = [response.data, ...weatherData]
        setWeatherData(weatherData);
    }

    return (
        <>
            <h1>Hello {isLit ? "True" : "False"}</h1>
            <form className="input_form" onSubmit={submitHandler}>
                <div className="input-group">
                    <input type="text" className="form-control" name="city" placeholder="Enter city here"
                        ref={cityInput}
                    />
                    <span className="input-group-btn">
                        <input type="submit" value="Submit" className="btn btn-default" />
                    </span>
                </div>
            </form>

            <div className="location-results-container">
                {
                    weatherData.reverse().map((item, index) => 
                        <WeatherCard key={index} data={item} />
                    )
                }
            </div>
        </>
    );
}

export default InputForm;