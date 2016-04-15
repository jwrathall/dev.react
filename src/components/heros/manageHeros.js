"use strict";
var React = require('react');
var HeroForm = require('./heroForm');
var HeroApi = require('../../api/heroApi');
var Router = require('react-router');
var Toastr = require('toastr');

var ManageHeros = React.createClass({
  //React needs this to be named mixins and to be defined as an array
  mixins:[
    Router.Navigation
  ],

  statics:{
    willTransitionFrom:function(transition, component){
      console.log(component.state);
      if(component.state.dirty && !confirm('Leave without saving?')){
        transition.abort();
      }
    }
  },
  getInitialState:function(){
    return{
      hero : {id:'', firstName:'', lastName:''},
      errors:{},
      dirty: false
    };
  },
  componentWillMount:function(){
    //setstate here will not cause a re-render
    //props.params allow access to the query params
    var heroId = this.props.params.id //fromt the path /author:id

    if(heroId){
      this.setState({hero: HeroApi.getHeroById(heroId)});
    }

  },
  setHeroState: function(event){
    //form has been changed, dirty = true
    this.setState({dirty:true});
    console.log(this.state.dirty);
    var field = event.target.name;
    var value = event.target.value;
    this.state.hero[field] = value;

    return this.setState({hero: this.state.hero});
  },
  heroFormIsValid:function(){
    var isValid = true;
    this.state.errors={};

    if(this.state.hero.firstName.length < 3){
      this.state.errors.firstName = "First Name must be at least 3 characters";
      isValid = false;
    }
    if(this.state.hero.lastName.length < 3){
      this.state.errors.lastName = "localhost Name must be at least 3 characters";
      isValid = false;
    }
    //anytime you update the state call setState
    this.setState({error:this.state.errors});
    return isValid;
  },
  saveHero:function(evt){
    evt.preventDefault();

    if(!this.heroFormIsValid()){
      return;
    }

    HeroApi.saveHero(this.state.hero);
    Toastr.success('Hero saved');
    this.setState({dirty:false});
    // uses the mixin
    this.transitionTo('heros');
  },
  render: function(){
    return(
        <HeroForm hero={this.state.hero}
          onChange={this.setHeroState}
          onSave={this.saveHero}
          errors={this.state.errors}/>
    );
  }
});

module.exports = ManageHeros;


/*id:'wolverine',
firstName:'James',
lastName:'Howlett',
heroName:'Wolverine'*/
