import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div>
				temperature={this.props.temperature}
	        	city={this.props.city}
	        	country={this.props.country}
	        	humidity={this.props.humidity}
	        	description={this.props.description}
			</div>
		)
	}
}

export default Weather;