var React = require('react'),
    Game = require('./components/game'),
    ReactDOM = require('react-dom');

var ReactMinesweeper = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="minesweeper-header">Minesweeper time</h1>
        <h3 className="minesweeper-header"><em>by Matt and Nate</em></h3>
        <Game/>
        <p className="minesweeper-header"><em>Alt-click to flag</em></p>
      </div>
    );
  }
});



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<ReactMinesweeper />, document.getElementById('main'));
});
