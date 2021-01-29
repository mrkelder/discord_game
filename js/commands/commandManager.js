"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reg = void 0;
var registration_1 = __importDefault(require("./registration"));
var commands = {
    reg: registration_1.default
};
exports.reg = commands.reg;
