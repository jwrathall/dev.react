
$ = jQuery = require('jquery'); //2 different ways to ref jquery, both in global namespace
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;//part of react-router

var App = React.createClass({
  render:function(){

    return(
      <div>
        <Header/>
        <div className="container-fluid">
            <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App
