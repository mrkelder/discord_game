"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = require("../config.json");
function default_1(obj) {
    var args = obj.args, message = obj.message;
    var readyArgs = args.join('').split('/');
    if (message.channel.name.toLowerCase() === config_json_1.reg_channel || message.channel.name.toLowerCase() === config_json_1.test_channel) {
        if (args.length === 0) {
            message.reply('Для того, чтобы зарегестрироваться, необходимо ввести комманду со следующими аргументами');
            message.reply('!reg <название-государства>/<цвет-в-формате-hex>/<форма-правления>');
            message.reply('Название: если вы хотите, чтобы название вашего государства состояло из нескольких слов, укажите их через знак черты "-"');
            message.reply('Цвет: цвет задается шестью символами. ');
            message.reply('Форма правления: всего две опции "dem" и "tol"');
        }
        else if (readyArgs.length === 3) {
            var readyName = void 0;
            var _a = __read(readyArgs, 3), name_1 = _a[0], color = _a[1], syst = _a[2];
            if (__spread(name_1).length > 0 && (__spread(color).length === 7 && color.includes('#') || __spread(color).length === 6 && !color.includes('#')) && (syst === 'dem' || syst === 'tol')) {
                readyName = name_1.split('-').join(' ');
                message.react('✅');
                message.reply("\u0412\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B\u044C:\n\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: " + readyName + "\n\u0426\u0432\u0435\u0442: " + color + "\n\u0424\u043E\u0440\u043C\u0430 \u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: " + (syst === 'dem' ? 'демократия' : 'тоталитаризм') + "\n\n\u0415\u0441\u043B\u0438 \u0432\u044B \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0443 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0435\u0449\u0435 \u0440\u0430\u0437");
            }
            else {
                message.react('⛔');
                message.reply('Данные введены неверно. Для помощи введите команду "!reg"');
            }
        }
        else {
            message.react('⛔');
            message.reply('Вы ввели не все данные');
        }
    }
}
exports.default = default_1;
