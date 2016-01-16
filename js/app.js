'use strict';

var Knight = React.createClass({

  render: function() {
    return (
      <span>
        <img src="/public/images/knight.png" style={{
                                               width:"100px",
                                               height:"100px"
                                             }}/>
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
  render: function() {
    return (
      <div>
        <Cell grey>
          <Knight />
        </Cell>
      </div>
    );
  }
});

ReactDOM.render(<ChessBoard knightPosition={[0,0]}/>, document.getElementById('content'));
