'use strict';

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
        <Cell />
      </div>
    );
  }
});

var Cell = React.createClass({
  render: function() {
    return (
      <div>
        <div className="cell" id="A1"></div>
        <div className="cell" id="A2"></div>
        <div className="cell" id="A3"></div>
        <div className="cell" id="A4"></div>
        <div className="cell" id="A5"></div>
        <div className="cell" id="A6"></div>
        <div className="cell" id="A7"></div>
        <div className="cell" id="A8"></div>
        <div className="cell" id="B1"></div>
        <div className="cell" id="B2"></div>
        <div className="cell" id="B3"></div>
        <div className="cell" id="B4"></div>
        <div className="cell" id="B5"></div>
        <div className="cell" id="B6"></div>
        <div className="cell" id="B7"></div>
        <div className="cell" id="B8"></div>
        <div className="cell" id="C1"></div>
        <div className="cell" id="C2"></div>
        <div className="cell" id="C3"></div>
        <div className="cell" id="C4"></div>
        <div className="cell" id="C5"></div>
        <div className="cell" id="C6"></div>
        <div className="cell" id="C7"></div>
        <div className="cell" id="C8"></div>
        <div className="cell" id="D1"></div>
        <div className="cell" id="D2"></div>
        <div className="cell" id="D3"></div>
        <div className="cell" id="D4"></div>
        <div className="cell" id="D5"></div>
        <div className="cell" id="D6"></div>
        <div className="cell" id="D7"></div>
        <div className="cell" id="D8"></div>
        <div className="cell" id="E1"></div>
        <div className="cell" id="E2"></div>
        <div className="cell" id="E3"></div>
        <div className="cell" id="E4"></div>
        <div className="cell" id="E5"></div>
        <div className="cell" id="E6"></div>
        <div className="cell" id="E7"></div>
        <div className="cell" id="E8"></div>
        <div className="cell" id="F1"></div>
        <div className="cell" id="F2"></div>
        <div className="cell" id="F3"></div>
        <div className="cell" id="F4"></div>
        <div className="cell" id="F5"></div>
        <div className="cell" id="F6"></div>
        <div className="cell" id="F7"></div>
        <div className="cell" id="F8"></div>
        <div className="cell" id="G1"></div>
        <div className="cell" id="G2"></div>
        <div className="cell" id="G3"></div>
        <div className="cell" id="G4"></div>
        <div className="cell" id="G5"></div>
        <div className="cell" id="G6"></div>
        <div className="cell" id="G7"></div>
        <div className="cell" id="G8"></div>
        <div className="cell" id="H1"></div>
        <div className="cell" id="H2"></div>
        <div className="cell" id="H3"></div>
        <div className="cell" id="H4"></div>
        <div className="cell" id="H5"></div>
        <div className="cell" id="H6"></div>
        <div className="cell" id="H7"></div>
        <div className="cell" id="H8"></div>
      </div>
    )
  }
})

var UnleaseChess = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Header />
        <ChessBoard />
      </div>
    );
  },
});

ReactDOM.render(<UnleaseChess />, document.getElementById('content'));
