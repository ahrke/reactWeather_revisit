var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
            <div className="text-center">
                <h1>Examples</h1>
                <p>Here are some example locations to try out:</p>
                <ul className="no-bullet">
                    <li>
                        <Link to="/?location=toronto">Toronto, Canada</Link>
                    </li>
                    <li>
                        <Link to="/?location=bangkok">Bangkok, Thailand</Link>
                    </li>
                </ul>
            </div>
        );
}

module.exports = Examples;