"use strict";
var React = require('react');
var Input  = require('../common/textInput');
//in its first iteration you cannot enter data into the form
//due to it being rendered by React and not having a change handler attached and because of the shadow DOM
//React ignores any changes to the value

var heroForm = React.createClass({
  render: function(){
    console.log(this.props.hero);
    return(
        <form>
          <h1>Manage Hero</h1>
          <Input type="text"
            name="firstName"
            label="First Name"
            value={this.props.hero.firstName}
            onChange={this.props.onChange} />
            <br/>
            <Input type="text"
              name="lastName"
              label="Last Name"
              value={this.props.hero.lastName}
              onChange={this.props.onChange} />
            <br/>
          <input type="submit" className="btn btn-default" value="save"/>
        </form>
    );
  }
});

module.exports = heroForm;
