"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = require("../config.json");
var mongodb_1 = __importDefault(require("../packages/mongodb"));
function default_1(obj) {
    var _this = this;
    var args = obj.args, message = obj.message;
    var readyArgs = args.join('').split('/');
    if (message.channel.name.toLowerCase() === config_json_1.reg_channel || message.channel.name.toLowerCase() === config_json_1.test_channel) {
        // If users types in the channel for registration or in the testing channel
        if (args.length === 0) {
            // If users only typed "!reg"
            message.reply('Для того, чтобы зарегестрироваться, необходимо ввести комманду со следующими аргументами');
            message.reply('!reg <название-государства>/<цвет-в-формате-hex>/<форма-правления>');
            message.reply('Название: если вы хотите, чтобы название вашего государства состояло из нескольких слов, укажите их через знак черты "-"');
            message.reply('Цвет: цвет задается шестью символами. ');
            message.reply('Форма правления: всего две опции "dem" и "tol"');
        }
        else if (readyArgs.length === 3) {
            // If user typed in all three required arguments
            var readyName = void 0;
            var _a = __read(readyArgs, 3), name_1 = _a[0], color_1 = _a[1], syst_1 = _a[2];
            if (__spread(name_1).length > 0 && (__spread(color_1).length === 7 && color_1.includes('#') || __spread(color_1).length === 6 && !color_1.includes('#')) && (syst_1 === 'dem' || syst_1 === 'tol')) {
                readyName = name_1.split('-').join(' ');
                message.react('✅');
                message.reply("\u0412\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B\u044C:\n\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: " + readyName + "\n\u0426\u0432\u0435\u0442: " + color_1 + "\n\u0424\u043E\u0440\u043C\u0430 \u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: " + (syst_1 === 'dem' ? 'демократия' : 'тоталитаризм') + "\n\n\u0415\u0441\u043B\u0438 \u0432\u044B \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0443 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0435\u0449\u0435 \u0440\u0430\u0437");
                mongodb_1.default(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                    var userId, client, db, ObjectID, availableUsers;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                userId = message.author.id;
                                client = obj.client, db = obj.db, ObjectID = obj.ObjectID;
                                return [4 /*yield*/, db.collection('users').find({}).toArray()];
                            case 1:
                                availableUsers = _a.sent();
                                if (!(availableUsers.length > 0)) return [3 /*break*/, 3];
                                return [4 /*yield*/, db.collection('users').updateOne({ user_id: userId }, { $set: { name: name_1, color: color_1, syst: syst_1 } })];
                            case 2:
                                _a.sent();
                                message.reply('Информация обновлена');
                                return [3 /*break*/, 5];
                            case 3: return [4 /*yield*/, db.collection('users').insertOne({ user_id: userId, name: name_1, color: color_1, syst: syst_1 })];
                            case 4:
                                _a.sent();
                                message.reply('Профиль занесен в базу данных');
                                _a.label = 5;
                            case 5:
                                client.close();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            else {
                // If users typed in incorrect data
                message.react('⛔');
                message.reply('Данные введены неверно. Для помощи введите команду "!reg"');
            }
        }
        else {
            // If users typed in data incorrectly
            message.react('⛔');
            message.reply('Вы ввели не все данные');
        }
    }
}
exports.default = default_1;
