var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <h1>GitHub Battle</h1>
        <p>Hit the button to get started</p>
        <Link to='/playerOne'>
          <button type="button" className="btn btn-success btn-lg">Pick a fight!</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
