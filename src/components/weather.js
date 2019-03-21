import React from 'react';
// Using something called a stateless functional components rather than a class based component because
// Weather does not have any state, no need to import the class, then we cannot use the this keyword
// and have to pass the props as argument.

const Weather = props => 
	(
		<div className="weather__info">
			{
				props.city && props.country && <p className="weather__key">Location: 
				<span className="weather__value"> {props.city}, {props.country} </span>
				</p>
			}
			{
				props.temperature && <p className="weather__key">Temperature: <span className="weather__value"> {props.temperature} </span></p>
			}
			{
				props.humidity &&  <p className="weather__key">Humidity: <span className="weather__value"> {props.humidity} </span></p>
			}
			{
				props.description &&  <p className="weather__key">Conditions: <span className="weather__value"> {props.description} </span></p>
			}
			{
				props.error && <p className="weather__error">Error: {props.error} </p>
			}
		</div>
	);

export default Weather;