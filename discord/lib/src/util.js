"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBasicObject = exports.embedObjStr = exports.resolveColor = exports.bigString = exports.template = void 0;
/**
 *
 * @param str
 * @param args
 * @returns
 */
function template(str, args) {
    return str.replace(/{\w+}/g, str => {
        const key = str.substring(1, str.length - 1);
        if (key in args)
            return args[key];
        return key;
    });
}
exports.template = template;
/**
 * converts bigString to string
 */
function bigString(bigStr) {
    if (Array.isArray(bigStr))
        return bigStr.join('\n');
    return bigStr;
}
exports.bigString = bigString;
/**
 * converts Hex Color string to an RGB array
 */
function resolveColor(color) {
    color = color.replace(/[^0-9a-f]/gi, '');
    const colorNum = [0, 0, 0];
    if (color.length === 3 || color.length === 6) {
        const colorSplRaw = /([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})/.exec(color);
        if (!colorSplRaw)
            return colorNum;
        const colorSpl = colorSplRaw.slice(1, 4);
        if (color.length === 3)
            colorSpl.map(c => c + c);
        for (let i = 0; i < colorSpl.length && i < colorNum.length; i++)
            colorNum[i] = parseInt(colorSpl[i], 16);
    }
    return colorNum;
}
exports.resolveColor = resolveColor;
/**
 * converts embedObj to a string if applicable
 * @param fallback the string to use if no valid strings can be found
 */
function embedObjStr(embedObj, args = {}, fallback = '') {
    if (embedObj.content !== undefined)
        return template(bigString(embedObj.content), args);
    if (embedObj.description !== undefined)
        return template(bigString(embedObj.description), args);
    return fallback;
}
exports.embedObjStr = embedObjStr;
function convertBasicObject(obj) {
    let ret = {};
    for (const key in obj) {
        const val = obj[key];
        if (typeof val === 'string')
            ret[key] = val;
        else if (typeof val === 'boolean')
            ret[key] = val.toString();
        else if (typeof val === 'number')
            ret[key] = val.toString();
        else
            ret[key] = '';
    }
    return ret;
}
exports.convertBasicObject = convertBasicObject;
