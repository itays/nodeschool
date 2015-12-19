'use strict';
var _ = require('lodash');

var sortFilter = function(items){
  return _.sortBy(items, function(item){
    return -item.quantity;

  })
  /* Also possible:
   return _.sortBy(collection,"quantity").reverse();
  */
}

module.exports = sortFilter;