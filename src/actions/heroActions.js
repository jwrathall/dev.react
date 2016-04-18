"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var HeroApi = require('../api/heroApi');

var HeroActions = {
  createHero : function(hero){
      var newHero = HeroApi.saveHero(hero);
  }
}
module.exports = HeroActions;
