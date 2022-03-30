import { basicObject, basicObjectStringable } from '../..';
import { embedDataType } from './types';
/**
 * reads language json as an object (could be embed or just string)
 * @param id ex: discord.error.noActiveQueue
 * @param argsraw list of key/value pairs to represent template values
 * @param otherOptions values to be passed through to the return value
 * @returns language value, defaults to `id` parameter
 */
declare function getEmbed(id: string, argsraw?: basicObjectStringable, otherOptions?: basicObject): embedDataType;
export * from '../..';
export * from './types';
export * from './util';
declare const _default: {
    getEmbed: typeof getEmbed;
    setLang: typeof import("../..").setLang;
    get: (id: string, argsraw?: basicObjectStringable | undefined) => string;
};
export default _default;
