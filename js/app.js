"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var config_json_1 = require("./config.json");
var commandManager_1 = require("./commands/commandManager");
var colors_1 = require("colors");
var client = new discord_js_1.Client();
client.once('ready', function () {
    console.log(colors_1.green('Bot is ready'));
});
client.on('message', function (message) {
    var _a;
    if (message.author.bot || message.content === config_json_1.prefix)
        return;
    else if (message.content.startsWith(config_json_1.prefix)) {
        var args = message.content.slice(config_json_1.prefix.length).trim().split(/ +/);
        var command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
        switch (command) {
            case 'reg':
                commandManager_1.reg({ args: args, message: message });
                break;
        }
    }
});
client.login(config_json_1.token);
