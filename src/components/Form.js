import React from 'react';

class Form extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit = {this.props.getWeather}>
				  <div className="form-group">
				    <label>City</label>
				    <input name="city" type="text" className="form-control" placeholder="Enter city here..."/>
				  </div>
				  <div className="form-group">
				    <label>Country</label>
				    <input name="country" type="text" className="form-control" placeholder="Enter country here..."/>
				  </div>
				  <button className="btn btn-danger">Get Weather</button>
				</form>
			</div>
		)
	}
}

export default Form;