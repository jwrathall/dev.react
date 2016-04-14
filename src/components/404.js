"use strict";

var React = require("react");
var Link = require('react-router').Link;

var NotFound = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Page Not Found</h1>
        <p>Awwww SNAP, youre lost</p>
        <p><Link to="app">Back Home</Link></p>
      </div>
    );
  }
});

module.exports = NotFound;
