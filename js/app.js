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

var Cells = React.createClass({

  startPosition: function(x, y) {
    (x==0 && y==0) ? <Knight /> : null;
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
      <div style={{ width: "100px",
                    height: "100px",
                    paddingLeft: "6px",
                    paddingTop: "5px",
                    paddingRight: "10px",
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
      <div style={{width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexWrap: 'wrap'}}>
        {cells}
      </div>
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
