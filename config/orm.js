var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    
    create: function(table, vals, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + vals + "');"
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

};

module.exports = orm;