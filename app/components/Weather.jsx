var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var thisSearch = this;
        this.setState({
            isLoading: true
        })
        openWeatherMap.getTemp(location).then(function(temp){
            thisSearch.setState({
                location: location,
                temp: temp
            });
            thisSearch.setState({
                isLoading: false
            })
        }, function(err){
            alert(err);
        });
        thisSearch.setState({
                isLoading: false
            })
    },
    render: function() {
        var {isLoading, location,temp} = this.state;
        
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            } else if (location && temp){
                return <WeatherOutput location={location} temp={temp}/>;
            }
        };
        
        return (
            <div>
                <h4>Weather Component</h4>
                <WeatherForm onSearch={this.handleSearch}/>
                <br/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Weather;