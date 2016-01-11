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

var Cell = React.createClass({

  propTypes: {
    grey: PropTypes.bool
  },

  render: function() {
    var grey = this.props.grey;
    var colour = grey ? "grey" : "white"

    return(
      <div className= {colour}>
        {this.props.children}
      </div>
    );
  }
});

var Knight = React.createClass({
  propTypes: {
    position: PropTypes.arrayOf(PropTypes.number)
  },

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
          <Cell grey>
            <Knight position={[0, 0]}/>
          </Cell>
        </ChessBoard>
      </div>
    );
  },
});

ReactDOM.render(<UnleaseChess />, document.getElementById('content'));
