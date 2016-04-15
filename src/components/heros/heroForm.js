"use strict";
var React = require('react');
var Input  = require('../common/textInput');
//in its first iteration you cannot enter data into the form
//due to it being rendered by React and not having a change handler attached and because of the shadow DOM
//React ignores any changes to the value

var heroForm = React.createClass({
  propTypes:{
    hero: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors:React.PropTypes.object
  },
  render: function(){
    console.log(this.props.hero);
    return(
        <form>
          <h1>Manage Hero</h1>
          <Input type="text"
            name="firstName"
            label="First Name"
            value={this.props.hero.firstName}
            onChange={this.props.onChange}
            error = {this.props.errors.firstName}/>
            <br/>
            <Input type="text"
              name="lastName"
              label="Last Name"
              value={this.props.hero.lastName}
              onChange={this.props.onChange}
              error = {this.props.errors.lastName}/>
            <br/>
          <input type="submit" className="btn btn-default" value="save" onClick={this.props.onSave}/>
        </form>
    );
  }
});

module.exports = heroForm;
