import React from 'react';
import Icon from '../Icon/index';
import WeatherForecast from './WeatherForecast';
import { API_KEY } from '../utils';
import moment from 'moment';

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: {} };

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  async fetchWeatherData() {
    const json = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Kyiv&units=metric&cnt=7&appid=${API_KEY}`);
    const data = await json.json();

    this.setState({weather: data});
  }
  
  render() {
    const { weather } = this.state;

    if(!weather.list) {
      return null;
    }

    const weatherToday = weather.list[0];
    const temperature = weatherToday.temp.day;
    let arr = [];
    for(let i = 0; i < 7; i++) {
      arr.push(<WeatherForecast weatherOnDate={weather.list[i]} id={i} key={i} />);
    }
    const city = "Kyiv";

    return (
        <div className="weatherCard">
            <section className="todayWeather">
            <div>
              <span className="date">{moment(weatherToday).format('MMMM Do YYYY').toUpperCase()}</span>
              <span className="date">{moment(weatherToday).format('dddd').toUpperCase()}</span>
              <div className="temperature">
                <span className='temperatureToday'>{Math.round(temperature)}&#176;C</span>
                <span><Icon size="large" weatherType={weatherToday.weather[0].main.toLowerCase()} /></span>
              </div>
            </div>
            <div>
              <span>
                {city.toUpperCase()}
              </span>
            </div>
            </section>
            <section className="forecast">
              {arr}
            </section>
        </div>
      );
  }  
}


