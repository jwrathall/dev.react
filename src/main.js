
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes,function(Handler){
  React.render(<Handler/>,document.getElementsById('app'));
});
//React.render(<Home/>, document.getElementById('app'));
//React.render(<Home/>, document.getElementById('app'));
