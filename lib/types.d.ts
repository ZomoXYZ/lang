/**
 * any indexable object
 */
export declare type basicObject = {
    [keys: string]: any;
};
/**
 * any indexable object with string values
 */
export declare type basicObjectStringable = {
    [keys: string]: string | number | boolean | null;
};
export declare type basicObjectString = {
    [keys: string]: string;
};
/**
 * an abstract version of strings
 */
export declare type bigStringType = string | string[];
/**
 * a representation of an author in the LANG object
 *
 * `LANG > Language > Embed > Field`
 */
export interface embedField {
    name: string;
    value: bigStringType;
    inline?: boolean;
}
/**
 * a representation of an author in the LANG object
 *
 * `LANG > Language > Embed > Author`
 */
export interface authorData {
    name: string;
    url?: string;
    iconURL?: string;
}
/**
 * a representation of a footer in the LANG object
 *
 * `LANG > Language > Embed > Footer`
 */
export interface footerData {
    text: string;
    iconURL?: string;
}
/**
 * a representation of an embed in the LANG object
 *
 * `LANG > Language > Embed`
 */
export interface embedObject {
    embed: true;
    content?: string;
    title?: string;
    description?: bigStringType;
    /**
     * URL
     */
    url?: string;
    /**
     * #FFFFFF
     */
    color?: string;
    footer?: string | footerData;
    thumbnail?: string;
    /**
     * URL
     */
    image?: string;
    /**
     * URL
     */
    author?: string | authorData;
    fields?: embedField[];
    timestamp?: boolean | string | number;
}
/**
 * a specific language in the LANG object
 *
 * `LANG > Language`
 */
export declare type LangObj = {
    [keys: string]: LangObj | embedObject | string;
};
