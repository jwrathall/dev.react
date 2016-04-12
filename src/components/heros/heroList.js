"use strict";

var React = require('react');


var HeroList = React.createClass({
  //only runs in the expanded development code version
  //good way to show expectations for a components
  propTypes:{
    heros:React.PropTypes.array.isRequired
  },
  render:function(){
    var createRow = function(hero){
      return(
        //react needs a key for child elements or multiple instances to keep track
        <tr key={hero.id}>
          <td>{hero.id}</td>
          <td>
            <a href={"#heros/" + hero.id}>
              {hero.firstName} {hero.lastName}
            </a>
          </td>
        </tr>
      )
    };
    return(

      <div>
        <table className="table">
          <thead>
            <th>Id</th>
            <th>Name</th>
          </thead>
          <tbody>
              {this.props.heros.map(createRow,this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = HeroList;
