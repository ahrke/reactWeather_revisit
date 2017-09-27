var React = require('react');

var WeatherOutput = ({location,temp}) => {
        
    return (
        <div>
            <h1>The weather in {location} is {temp}</h1>
        </div>
    );
}

module.exports = WeatherOutput;