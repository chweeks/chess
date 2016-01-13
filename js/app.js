'use strict';

var PropTypes = React.PropTypes;

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <h1>Unlease Chess</h1>
      </header>
    );
  }
});

var ChessBoard = React.createClass({
  render: function() {
    return (
      <div className="board">
        {this.props.children}
      </div>
    );
  }
});

var Cells = React.createClass({

  propTypes: {
    grey: PropTypes.bool
  },

  createCell: function(i) {
    var x = i % 8;
    var y = Math.floor(i / 8);
    var grey = (x + y) % 2 === 1;

    var colour = grey ? "grey" : "white"

    return (
      <div key={i} className={colour}>
        {this.props.children}
      </div>
    );
  },

  render: function() {
    var cells = []
    for(var i=0; i<64; i++){
      cells.push(this.createCell(i))
    };
    return (
      <div>
        {cells}
      </div>
    );
  }
});

var Knight = React.createClass({
  propTypes: {
    position: PropTypes.arrayOf(PropTypes.number)
  },

  render: function() {
    return (
      <span><img src="/public/images/knight.png" height="80" width="80"/></span>
    );
  }
});

var UnleaseChess = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Header />
        <ChessBoard>
          <Cells />
        </ChessBoard>
      </div>
    );
  },
});

ReactDOM.render(<UnleaseChess />, document.getElementById('content'));
