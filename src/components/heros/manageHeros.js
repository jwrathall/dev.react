"use strict";
var React = require('react');
var HeroForm = require('./heroForm');

var ManageHeros = React.createClass({
  getInitialState:function(){
    return{
      hero : {id:'', firstName:'', lastName:''}
    };
  },
  setHeroState: function(event){

    var field = event.target.name;
    var value = event.target.value;
    this.state.hero[field] = value;
    console.log(event.target) ;
      console.log(this.refs) ;
    return this.setState({hero: this.state.hero});
  },
  render: function(){
    return(
        <HeroForm hero={this.state.hero} onChange={this.setHeroState}/>
    );
  }
});

module.exports = ManageHeros;


/*id:'wolverine',
firstName:'James',
lastName:'Howlett',
heroName:'Wolverine'*/
