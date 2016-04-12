"use strict";

var React = require('react');
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
        <HeroList heros={this.state.heros}/>
      </div>
    );
  }
});

module.exports = HerosPage;
