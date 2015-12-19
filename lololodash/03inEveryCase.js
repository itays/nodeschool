'use strict';
var _ = require('lodash');
/*
var addSize = function(collection){
  _.forEach(collection, function(item){
    var size;
    if (item.population > 1) {
      size = 'big';
    }
    else if(item.population < 1 && item.population > 0.5){
      size = 'med';
    }
    else {
      size = 'small';
    }
    item.size = size;
  });
  return collection;
}

module.exports = addSize;
*/
module.exports = function(collection){
  return _.forEach(collection, function(item) {
    if (item.population > 1) {
      item.size = 'big';
    }
    else if(item.population > 0.5) {
      item.size = 'med';
    }
    else {
      item.size = 'small';
    }
  });
};