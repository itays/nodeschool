'use strict';
var _ = require('lodash');

module.exports = function(arr) {
  var result = [];
  arr = _.groupBy(arr, 'username');
  _.forEach(arr, function(item, key){
    result.push({username: key, comment_count: _.size(item)});
  });
  return _.sortBy(result, 'comment_count').reverse();
}