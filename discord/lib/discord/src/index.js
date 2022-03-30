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
const __1 = require("../..");
const util_1 = require("./util");
/**
 * reads language json as an object (could be embed or just string)
 * @param id ex: discord.error.noActiveQueue
 * @param argsraw list of key/value pairs to represent template values
 * @param otherOptions values to be passed through to the return value
 * @returns language value, defaults to `id` parameter
 */
function getEmbed(id, argsraw = {}, otherOptions = {}) {
    const args = (0, __1.convertBasicObject)(argsraw), embedData = Object.assign(Object.assign({}, otherOptions), { embeds: [] });
    const keySpl = id.split('.').map(k => k.trim()).filter(k => k);
    let finding = (0, __1.getLang)();
    for (const key of keySpl) {
        if (key in finding) {
            const found = finding[key];
            if (typeof found === 'string') {
                embedData.content = (0, __1.template)(found, args);
                break;
            }
            if (found.embed === true) {
                const embedObj = found, { content } = embedObj, embed = (0, util_1.embedObjEmbed)(embedObj, args);
                embedData.embeds.push(embed);
                if (content !== undefined)
                    embedData.content = content;
                return embedData;
            }
            finding = found;
        }
        else
            break;
    }
    return embedData;
}
__exportStar(require("../.."), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./util"), exports);
exports.default = Object.assign(Object.assign({}, __1.default), { getEmbed });
