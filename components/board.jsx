var React = require('react'),
    Tile = require('./tile');



var Board = React.createClass({
  render: function(){
    var self = this;
    var rows = this.props.board.grid.map(
      // each row
      function (row, rowIndex) {
        return row.map(
          // each tile
          function (tile, tileIndex) {
            return <Tile
              tile={tile}
              key={rowIndex.toString() +  tileIndex.toString()}
              updateGame={self.props.updateGame}
              />;
          }
        );
      }
    );


    return (
      <div className='board'>
        {rows}
      </div>
    );
  }
});

module.exports = Board;
