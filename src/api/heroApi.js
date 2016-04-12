"use strict";

//This file is mocking a web API by hitting hard coded data.
var heros = require('./heroData').heros;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(hero) {
	return hero.firstName.toLowerCase() + '-' + hero.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var HeroApi = {
	getAllHeros: function() {
		return _clone(heros);
	},

	getHeroById: function(id) {
		var hero = _.find(heros, {id: id});
		return _clone(hero);
	},

	saveHero: function(hero) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');

		if (hero.id) {
			var existingHeroIndex = _.indexOf(heros, _.find(heros, {id: hero.id}));
			heros.splice(existingHeroIndex, 1, hero);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			hero.id = _generateId(hero);
			heros.push(hero);
		}

		return _clone(hero);
	},

	deleteHero: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(heros, { id: id});
	}
};

module.exports = HeroApi;
