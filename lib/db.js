'use strict';

(function () {

    module.exports = {
        GetConnection: GetConnection
    };

    var env = process.env;
    const mysql = require('promise-mysql');

    var connectionSettings = {
        host: 'localhost',
        user: 'root',
        database: 'sys',
        charset: 'utf8mb4',
        supportBigNumbers: true
    };

    if (!global.pool) {
        global.pool = mysql.createPool(connectionSettings);
    }

    function GetConnection() {

        if (!connectionSettings.host) {
            console.log('------- DO NOT KNOW WHAT DB TO CONNECT TO ------------')
        }
        console.log('NEW Connection! Using host:' + connectionSettings.host + '; db:' + connectionSettings.database);

        return  mysql.createConnection(connectionSettings);

    };





})();
