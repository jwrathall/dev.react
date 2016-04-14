"use strict";

var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render:function(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            LOGO
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="heros">Heros</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>

    );
  }
});
module.exports = Header;
//Link uses the named routes as defined in the router.js file
