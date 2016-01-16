'use strict';

var Knight = React.createClass({

  render: function() {
    return (
      <span>
        <img src="/public/images/knight.png" style={{
                                               width:"100px",
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

    var knightPiece = (x==knightX && y==knightY) ? <Knight /> : null

    return (
      <div key={i}>
        <Cell grey={grey}>
          {knightPiece}
        </Cell>
      </div>
    );
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

ReactDOM.render(<ChessBoard knightPosition={[0,0]}/>, document.getElementById('content'));
