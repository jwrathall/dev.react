"use strict";

var React  =require('react');

var About = React.createClass({
  render:function(){
    return(
      <div>
        <h1>About</h1>
        <p>
          This application uses the following
          <ul>
            <li>React</li>
            <li>react-router</li>
            <li>flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});
module.exports = About;
