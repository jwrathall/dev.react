
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//the addition of the second Router param has limited browser support, it uses the html5 history api
//also will need changes to the server to allow this feature
//Router.run(routes,Router.HistoryLocation,function(Handler){
Router.run(routes,function(Handler){
  React.render(<Handler/>,document.getElementById('app'));
});
//React.render(<Home/>, document.getElementById('app'));
//React.render(<Home/>, document.getElementById('app'));
