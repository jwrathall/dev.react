
$ = jQuery = require('jquery'); //2 different ways to ref jquery, both in global namespace
var React = require('react');
var Header = require('./components/common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render:function(){

    return(
      <div>
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App
