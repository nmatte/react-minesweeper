var React = require('react'),
    Board = require('./board'),
    Minesweeper = require('../minesweeper');

var Game = React.createClass({
  getInitialState: function(){
    return {board: new Minesweeper.Board(10, 10)};
  },
  updateGame: function(tile, isFlagClick){

    if(isFlagClick){
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  },
  restartGame: function(){
    this.setState({board: new Minesweeper.Board(10, 10)});
  },

  render: function(){

    var hideOrShow = "hide";
    var msg = "";
    if (this.state.board.won() || this.state.board.lost()){
      hideOrShow = "display";
      if (this.state.board.won()) {
        msg = "Congratulations, well done!";
      } else {
        msg = "Sorry, try again!";
      }
    }

    return (
      <div>
      <Board board={this.state.board} updateGame={this.updateGame}/>
      <div className={"modal " + hideOrShow}>
        <div className="modal-content">
          <p className="modal-text">{msg}</p>
          <span className="close" onClick={this.restartGame}><em>reset</em></span>
        </div>
      </div>
    </div>
    );
  }
});


module.exports = Game;
