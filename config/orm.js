var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);

        
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    
    create: function(table, vals, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + vals + "');"
        console.log(queryString);

        
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET ";
        
        objColVals = "devoured =true "
        queryString += objColVals
        queryString += "WHERE "
        queryString += condition;
        queryString += ";";

        console.log(queryString);

        connection.query(queryString, function(err, result){
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

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

};

module.exports = orm;