'use strict';
var _ = require("lodash");

var filterwhere = function(workers){
  return _.where(workers, {active: true});
}

module.exports = filterwhere;