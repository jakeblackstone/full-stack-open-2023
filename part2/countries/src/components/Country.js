import {useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({data}) => {
    const [hidden, setHidden] = useState(true)
    const [weather, setWeather] = useState(null)

    const api_key = process.env.REACT_APP_API_KEY

    const lat = data.latlng[0]
    const long = data.latlng[1]
    const unit = 'metric'
useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=${unit}`)
        .then(response => {
          setWeather(response.data)
        })
        .catch(err => console.log(`error getting weather: ${err}`))
      })

    const name = data.name.common

    const handleClick = () => setHidden(false)

    const langs = Object.values(data.languages).map(v => <li key={v.id}>{v}</li>)

    if(hidden){
        return(<div>
            {name} <button onClick={handleClick}>show</button>
        </div>)
    } else {
        return(
            <div>
                <h2>{name}</h2>
                <p>Capital: {data.capital[0]}</p>
                <p>Area: {data.area}</p>
                <p><b>Languages:</b></p>
                <ul>
                    {langs}
                </ul>
                <img src={data.flags.png} alt={data.flags.alt}/>
                <h3>Weather in {name}</h3>
                <p>Temp: {weather.main.temp} C</p>
                <p>{weather.weather[0].main}</p>
                <p>wind: {weather.wind.speed} m/s</p>
            </div>
        )
    }
};
export default Country;
