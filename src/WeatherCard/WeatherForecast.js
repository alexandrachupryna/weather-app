import React from 'react';
import Icon from '../Icon/index';
import moment from 'moment';

export default class WeatherForecast extends React.Component {
    
    render() {
      const weatherToday = this.props.weatherOnDate;
      const temperature = weatherToday.temp.day;
  
      return (
          <section>
              <div>{moment(weatherToday).add(this.props.id, 'days').format('dddd').substr(0, 3).toUpperCase()}</div>
              <div className="icon"><Icon size="small" weatherType={weatherToday.weather[0].main.toLowerCase()} /></div>
              <div><span>{Math.round(temperature)}&#176;C</span></div>
          </section>
        );
    }  
  }