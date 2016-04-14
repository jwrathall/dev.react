"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var HeroApi = require('../../api/HeroApi');
var HeroList = require('./HeroList');

var HerosPage = React.createClass({
  getInitialState: function(){
    return{
      heros:[]
    };
  },
  componentDidMount: function(){
    if(this.isMounted){
      this.setState({heros:HeroApi.getAllHeros()});
    }
  },
  render:function(){
    return(

      <div>
        <h1>Heros</h1>
        <Link to="addHero" className="btn btn-default">Add Hero</Link>
        <HeroList heros={this.state.heros}/>
      </div>
    );
  }
});

module.exports = HerosPage;
