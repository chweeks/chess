'use strict';

var PropTypes = React.PropTypes;

var Knight = React.createClass({

  render: function() {
    return (
      <img id="knight" src="/public/images/knight.png" height="100%" width="100%"/>
    );
  }
});

var ChessBoard = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(PropTypes.number)
  },

  startPosition: function(x, y) {
    return (x==this.props.knightPosition[0] && y==this.props.knightPosition[1]) ? <Knight /> : null;
  },

  isGrey: function(x, y) {
    var grey = (x + y) % 2 === 1;
    return grey ? "grey" : "white";
  },

  createCell: function(i) {
    var x = i % 8;
    var y = Math.floor(i / 8);

    var colour = this.isGrey(x, y)
    var knight = this.startPosition(x, y)

    return (
      <div id="cell" style={{ width: "100px",
                              height: "100px",
                              paddingLeft: "0px",
                              paddingTop: "0px",
                              paddingRight: "0px",
                              border: "solid",
                              borderWidth: "2px",
                              borderColor: "grey",
                              display: "inline-flex",
                              backgroundColor: colour}} key={i}>
        {knight}
      </div>
    );
  },

  render: function() {
    var cells = []
    for(var i=0; i<64; i++){
      cells.push(this.createCell(i))
    };
    return (
      <div className="board">
        {cells}
        {this.props.children}
      </div>
    );
  }
});

var UnleaseChess = React.createClass({

  render: function() {
    return (
      <div className="container">
        <ChessBoard />
      </div>
    );
  },
});

ReactDOM.render(<ChessBoard knightPosition={[0,0]}/>, document.getElementById('content'));
