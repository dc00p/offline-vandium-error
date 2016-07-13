'use strict';

const vandium = require('vandium');
const db = require('offline-vandium-lib/db.js');

var _connection = {};

vandium.after(function () {
  return _connection.release();
});

module.exports.handler = vandium(main);

/***************MAIN IMPLEMENTATION********************/
function main(event) {

  return db.GetConnection()
    .then(function (connection) {
      _connection = connection;
    }).then(function(){
      return _connection.query("SELECT 1+1 as result")
    })
}