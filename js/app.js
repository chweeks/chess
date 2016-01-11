'use strict';

var Header = React.createClass({
  render: function(){
    return(
      <h1>
        Unlease Chess
      </h1>
    );
  }
});

var UnleaseChess = React.createClass({
  render: function() {
    return (
      <div class="container">
        <Header />
      </div>
    );
  },
});

ReactDOM.render(<UnleaseChess />, document.getElementById('content'));
