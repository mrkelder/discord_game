"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var config_json_1 = require("./config.json");
var colors_1 = require("colors");
var client = new discord_js_1.Client();
client.once('ready', function () {
    console.log(colors_1.green('Bot is ready'));
});
client.on('message', function (message) {
    if (message.author.bot)
        return;
});
client.login(config_json_1.token);
