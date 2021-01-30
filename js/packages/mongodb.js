"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var assert_1 = require("assert");
var url = 'mongodb://localhost:27017';
function main(func) {
    mongodb_1.MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        assert_1.strictEqual(null, err);
        var db = client.db('civa_game');
        func({ client: client, db: db, ObjectID: mongodb_1.ObjectID });
    });
}
exports.default = main;
