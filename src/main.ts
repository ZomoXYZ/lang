
import { authorData, basicObject, basicObjectString, bigStringType, embedObject, footerData } from './types';

/**
 * 
 * @param str 
 * @param args 
 * @returns 
 */
export function template(str: string, args: basicObject): string {

    return str.replace(/{\w+}/g, str => {

        const key = str.substring(1, str.length-1);

        if (key in args)
            return args[key];

        return key;

    });

}

/**
 * converts bigString to string
 */
export function bigString(bigStr: bigStringType): string {
    if (Array.isArray(bigStr))
        return bigStr.join('\n');
    return bigStr;
}


/**
 * converts Hex Color string to an RGB array
 */
export function resolveColor(color: string): [number, number, number] {
    color = color.replace(/[^0-9a-f]/gi, '');

    const colorNum: [number, number, number] = [0, 0, 0];

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

/**
 * converts embedObj to a string if applicable
 * @param fallback the string to use if no valid strings can be found
 */
export function embedObjStr(embedObj: embedObject, args: basicObjectString = {}, fallback = ''): string {

    if (embedObj.content !== undefined)
        return template(bigString(embedObj.content), args);

    if (embedObj.description !== undefined)
        return template(bigString(embedObj.description), args);

    return fallback;
}