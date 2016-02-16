var React = require('react');


var Tile = React.createClass({
  handleClick: function (event) {
    this.props.updateGame(this.props.tile, event.altKey);
  },
  render: function(){
    var className = "tile";

    var appearance = "";


    if(this.props.tile.flagged){
        className+= " flagged";
        appearance = "🐻";
    }

    if(this.props.tile.explored){
      var adjBombs = this.props.tile.adjacentBombCount();
      if (adjBombs > 0) {
        appearance = adjBombs.toString();
      }
      if (this.props.tile.bombed) {
        appearance = 	"💣";
      }
      className += " explored";
    }

    return (
      <div
        onClick={this.handleClick}
        className={className}>
        {appearance}
      </div>
    );
  }
});

module.exports = Tile;
