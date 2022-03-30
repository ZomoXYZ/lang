import { basicObject, basicObjectString, basicObjectStringable, bigStringType, embedObject } from './types';
/**
 *
 * @param str
 * @param args
 * @returns
 */
export declare function template(str: string, args: basicObject): string;
/**
 * converts bigString to string
 */
export declare function bigString(bigStr: bigStringType): string;
/**
 * converts Hex Color string to an RGB array
 */
export declare function resolveColor(color: string): [number, number, number];
/**
 * converts embedObj to a string if applicable
 * @param fallback the string to use if no valid strings can be found
 */
export declare function embedObjStr(embedObj: embedObject, args?: basicObjectString, fallback?: string): string;
export declare function convertBasicObject(obj: basicObjectStringable): basicObjectString;
