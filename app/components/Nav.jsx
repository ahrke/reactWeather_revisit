var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
    handleSearch: function(e) {
        e.preventDefault();
        
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
        
        if(location.length > 0){
            this.refs.search.value = "";
            
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function() {
        return (
            <div className="top-bar" role="navigation">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="text">
                            Dave's Weather App
                        </li>
                        <li>
                           <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink> 
                        </li>
                        <li>
                            <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.handleSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="search" placeholder="Where do you want the weather for?"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Give me the weather!"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
})

module.exports = Nav;
