var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var thisSearch = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        })
        openWeatherMap.getTemp(location).then(function(temp){
            thisSearch.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e){
            thisSearch.setState({
                isLoading: false,
                errorMessage: e.message
            })
        });
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;
        
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;
        
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function() {
        var {isLoading, location,temp, errorMessage} = this.state;
        
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            } else if (location && temp){
                return <WeatherOutput location={location} temp={temp}/>;
            }
        };
        
        function renderError(){
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        };
        
        return (
            <div className="text-center">
                <h1 className="text page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <br/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
})

module.exports = Weather;