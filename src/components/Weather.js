import React from 'react';

class Weather extends React.Component {
	render() {
		return (
			<div>
				<div className="card">
				  <div className="card-body">
				    <h5 className="card-title">Weather for {this.props.city}, {this.props.country}</h5>
				    <h6 className="card-subtitle mb-2 text-muted">{this.props.description}</h6>
				    <p className="card-text">Temperature: {this.props.temperature}</p>
				    <p className="card-text">Humidity: {this.props.humidity}</p>
				  </div>
				</div>			
			</div>
		)
	}
}

export default Weather;