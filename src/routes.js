"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
//using the correct names are important

var routes=(
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')}/>
    <Route name="about" handler={require('./components/about/aboutPage')}/>
    <Route name="heros" handler={require('./components/heros/herosPage')}/>
    <Route name="addHero" path="hero" handler={require('./components/heros/manageHeros')}/>
      <NotFoundRoute handler={require('./components/404')}/>
      <Redirect from="about-us" to="about"/>
      /*can also be used for common typos
      <Redirect from="about/*" to="about"/>*/
  </Route>
);
module.exports = routes;
