"use strict";

var React  =require('react');

var About = React.createClass({
  //The below are called Transitions
  statics:{
    willTransitionTo:function(transition, params, query, callback){
      if(!confirm('Are you sure???')){
        transition.about();
      }
      else{
        callback(); //allows transition to occur
      }
    },
    willTransitionFrom:function(transition, component){
      if(!confirm('Are you sure you want to leave???')){
        transition.about();
      }
    }
  },
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
