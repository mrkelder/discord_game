"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var assert_1 = require("assert");
var colors_1 = require("colors");
var url = 'mongodb://localhost:27017';
/* eslint-enable */
function main(func) {
    mongodb_1.MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        assert_1.strictEqual(null, err);
        console.log(colors_1.green("Connected successfully to server"));
        var db = client.db('civa_game');
        func({ client: client, db: db, ObjectID: mongodb_1.ObjectID });
    });
}
exports.default = main;
