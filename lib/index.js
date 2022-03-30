"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLang = exports.setLang = void 0;
const util_1 = require("./util");
/* MAIN */
var LANG = {};
function setLang(lang) {
    LANG = lang;
}
exports.setLang = setLang;
function getLang() {
    return LANG;
}
exports.getLang = getLang;
/**
 * reads language json (just strings)
 * @param id ex: discord.error.noActiveQueue
 * @param argsraw list of key/value pairs to represent template values
 * @returns language value, defaults to `id` parameter
 */
function get(id, argsraw = {}) {
    const args = (0, util_1.convertBasicObject)(argsraw), keySpl = id.split('.').map(k => k.trim()).filter(k => k);
    let finding = LANG;
    for (const key of keySpl) {
        if (key in finding) {
            const found = finding[key];
            if (typeof found === 'string')
                return (0, util_1.template)(found, args);
            if (found.embed === true)
                return (0, util_1.embedObjStr)(found, args, id);
            finding = found;
        }
        else
            break;
    }
    return id;
}
exports.default = {
    setLang,
    get
};
__exportStar(require("./types"), exports);
__exportStar(require("./util"), exports);
