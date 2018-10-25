import React from 'react';


import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY = "ba05ead8681146c63311bb1f050ddb26"


class App extends React.Component {
	// Don't need constructor or to pass in props in react 16
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}
	getWeather = async (e) => {
		e.preventDefault()
		const city = e.target.elements.city.value
		const country = e.target.elements.country.value
		const api_call = await fetch (
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
		)
		const data = await api_call.json();
		console.log(data)
		this.setState({
			city: data.name,
			temperature: data.main.temp - 273.15,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: ""
		})
	}
  render() {
    return(
      <div>
        <Titles />
        <Form 
        	getWeather = {this.getWeather}
        />
        <Weather
        	temperature={this.state.temperature}
        	city={this.state.city}
        	country={this.state.country}
        	humidity={this.state.humidity}
        	description={this.state.description}
        />

      </div>
    )
  }
}

export default App;