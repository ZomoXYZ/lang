import { basicObjectStringable, embedObject, LangObj } from './types';
import { convertBasicObject, embedObjStr, template } from './util';

/* MAIN */
var LANG: LangObj = {};

export function setLang(lang: LangObj) {
    LANG = lang;
}

export function getLang(): LangObj {
    return LANG;
}

/**
 * reads language json (just strings)
 * @param id ex: discord.error.noActiveQueue
 * @param argsraw list of key/value pairs to represent template values
 * @returns language value, defaults to `id` parameter
 */
function get(id: string, argsraw: basicObjectStringable = {}): string {

    const args = convertBasicObject(argsraw),
        keySpl = id.split('.').map(k => k.trim()).filter(k => k);

    let finding = LANG;

    for (const key of keySpl) {

        if (key in finding) {

            const found = finding[key];

            if (typeof found === 'string')
                return template(found, args);

            if (found.embed === true)
                return embedObjStr(found as embedObject, args, id);
                
            finding = found as LangObj;

        } else
            break;
        
    }

    return id;
}

export default {
    setLang,
    get
};

export * from './types';
export * from './util';