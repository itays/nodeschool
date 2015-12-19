'use strict';
var _ = require('lodash');

module.exports = function(towns){
  var groups = {
    hot: [],
    warm: []
  };

  function check_temp(temp){
    return temp > 19;
  }
  
  _.forEach(towns, function(town, townname) {
    if (_.every(town, check_temp)) {
      groups.hot.push(townname);
    }
    else if (_.some(town, check_temp())) {
     groups.warm.push(townname); 
    }
  });
  return groups;
}