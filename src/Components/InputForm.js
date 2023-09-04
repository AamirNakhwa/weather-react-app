import { useRef, useState } from 'react';
import '../Components/InputForm.css';
import axios from 'axios';
import WeatherCard from './WeatherCard';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

function InputForm(props) {
    let [weatherData, setWeatherData] = useState([]);
    let [errorMessage, setErrorMessage] = useState(null);

    const cityInput = useRef(null);
    //const [isLit, setLit] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();
        const city = cityInput.current.value;
        if (!city) {
            setErrorMessage('Please enter city...');
            return;
        }
        try {
            const url = `https://api.weatherapi.com/v1/current.json?key=505cd211ccfb414b811153617230707&q=${city}&aqi=no`;
            const response = await axios.get(url);

            cityInput.current.value = '';
            //event.target.reset();

            //setLit(!isLit)

            //weatherData.push(response.data);
            weatherData = [response.data, ...weatherData]
            setWeatherData(weatherData);
            setErrorMessage(null);
        }
        catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong, kindly make sure you entered the correct city.');
        }
    }

    return (
        <>
            {/* <h1>Hello {isLit ? "True" : "False"}</h1> */}
            <form className="input_form" onSubmit={submitHandler}>
                <div className="input-group">
                    <input type="text" className="form-control" name="city" placeholder="Enter city here"
                        autoComplete="off" ref={cityInput}
                    />
                    <span className="input-group-btn">
                        <input type="submit" value="Submit" className="btn btn-default" />
                    </span>
                </div>
            </form>
            {(errorMessage !== null) ? <div className="error-container"><span>{errorMessage}</span></div> :
                <div className="location-results-container">
                    {
                        weatherData.map((item, index) =>
                            <WeatherCard key={index} data={item} />
                        )
                    }
                </div>
            }
        </>
    );
}

export default InputForm;