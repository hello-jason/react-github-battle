var React = require('react');
var PropTypes = React.PropTypes;

function Prompt(props) {
  return (
    <div className="jumbotron col-md-8 col-md-offset-2 text=center">
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="GitHub username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
            <button
              className="btn btn-success"
              type="submit">
              Continue
            </button>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

module.exports = Prompt;
