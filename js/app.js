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
        {this.props.children}
      </div>
    );
  }
});

var Cell = React.createClass({
  render: function() {
    return (
      <div className="greyCell" id="A1">
        {this.props.children}
      </div>
    )
  }
})

var Knight = React.createClass({
  render: function() {
    return(
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
          <Cell>
            <Knight />
          </Cell>
        </ChessBoard>
      </div>
    );
  },
});

ReactDOM.render(<UnleaseChess />, document.getElementById('content'));
