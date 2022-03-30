import { basicObjectStringable, LangObj } from './types';
export declare function setLang(lang: LangObj): void;
export declare function getLang(): LangObj;
/**
 * reads language json (just strings)
 * @param id ex: discord.error.noActiveQueue
 * @param argsraw list of key/value pairs to represent template values
 * @returns language value, defaults to `id` parameter
 */
declare function get(id: string, argsraw?: basicObjectStringable): string;
declare const _default: {
    setLang: typeof setLang;
    get: typeof get;
};
export default _default;
export * from './types';
export * from './util';
