var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
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
                    <form>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Where do you want the weather for?"/>
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
