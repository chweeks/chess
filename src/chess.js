'use strict';

var knightPosition = [0, 0];
var observer = null;

function emitChange() {
  observer(knightPosition);
};

function observe(board) {
  observer = board;
  emitChange();

  return () => {
    observer = null;
  };
};

function moveKnight(newX, newY) {
  knightPosition = [newX, newY];
  emitChange();
};

function validMove(newX, newY) {

  var x = knightPosition[0];
  var y = knightPosition[1];

  function knightRules(newX, newY) {
    return ( (Math.abs(newX - x) == 2 && (Math.abs(newY - y) == 1)) ||
             (Math.abs(newY - y) == 2 && (Math.abs(newX - x) == 1)) )
  }

  return knightRules
};

var Knight = React.createClass({
  render: function() {
    return (
      <span>
        <img src="/public/images/knight.png"
        style={{ width:"100px",
                 height:"100px"}}/>
      </span>
    );
  }
});

var Cell = React.createClass({
  propTypes: {
    grey: React.PropTypes.bool
  },

  render: function() {
    var cellColour = this.props.grey ? "grey" : "white";

    return (
      <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: cellColour,
        borderWidth: "2px",
        borderColor: "grey"
      }}>
      {this.props.children}
      </div>
    );
  }
});

var ChessBoard = React.createClass({
  propTypes: {
    knightPosition: React.PropTypes.arrayOf(React.PropTypes.number)
  },

  createCells: function(i) {
    var x = i % 8;
    var y = Math.floor(i / 8);
    var grey = (x + y) % 2 === 1;

    var knightX = this.props.knightPosition[0];
    var knightY = this.props.knightPosition[1];

    // ^ alternates grey and white cells and doubles up every 8 cells

    var knightPiece = (x==knightX && y==knightY) ? <Knight /> : null

    return (
      <div key={i} onClick={this.handleSquareClick.bind(this, x, y)}>
        <Cell grey={grey}>
          {knightPiece}
        </Cell>
      </div>
    );
  },

  handleSquareClick: function (newX, newY) {

    validMove(newX, newY) ? moveKnight(newX, newY) : alert("Not a valid move");
  },

  render: function() {
    var cells = [];
    for (let i= 0; i < 64; i++) {
      cells.push(this.createCells(i))
    };

    return (
      <div className="board">
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap'}}>
            {cells}
        </div>
      </div>
    )
  }
});

observe(function(knightPosition) {
  ReactDOM.render(
    <ChessBoard knightPosition={knightPosition}/>, document.getElementById('content')
  );
});
