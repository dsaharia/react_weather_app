import React from 'react';
import Titles  from './components/titles'
import Form from './components/form'
import Weather from './components/weather'
// Upto 41 min
const API_KEY = '6f551518ca05837d6e68777f9b8ff9b6';

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault(); // event object SEARCH IT!!!
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render () {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>   
    );
  }
};

export default App;