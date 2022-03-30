import { basicObject, basicObjectStringable, embedObject, LangObj } from './types';
import { convertBasicObject, template } from './util';
import { embedDataType } from './discord/types';
import { embedObjEmbed } from './discord/util';
import Lang, { getLang } from '.';

/**
 * reads language json as an object (could be embed or just string)
 * @param id ex: discord.error.noActiveQueue
 * @param argsraw list of key/value pairs to represent template values
 * @param otherOptions values to be passed through to the return value
 * @returns language value, defaults to `id` parameter
 */
function getEmbed(id: string, argsraw: basicObjectStringable = {}, otherOptions: basicObject = {}): embedDataType {

    const args = convertBasicObject(argsraw),
        embedData: embedDataType = {
        ...otherOptions,
        embeds: []
    };
    
    const keySpl = id.split('.').map(k => k.trim()).filter(k => k);

    let finding = getLang();

    for (const key of keySpl) {

        if (key in finding) {

            const found = finding[key];

            if (typeof found === 'string') {
                embedData.content = template(found, args);
                break;
            }

            if (found.embed === true) {
                const embedObj = found as embedObject,
                    {content} = embedObj,
                    embed = embedObjEmbed(embedObj, args);

                embedData.embeds.push(embed);

                if (content !== undefined)
                    embedData.content = content;

                return embedData;
            }
            
            finding = found as LangObj;

        } else
            break;
        
    }

    return embedData;
}

export * from './discord/types';
export * from './discord/util';
export * from '.';

export default {
    ...Lang,
    getEmbed
};