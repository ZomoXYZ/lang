import { EmbedBuilder } from 'discord.js';
import {
    authorData,
    basicObjectString,
    bigString,
    embedObject,
    footerData,
    resolveColor,
    template,
} from '../..';

/**
 * converts embedObj to Discord.MessageEmbed
 */
export function embedObjEmbed(
    embedObj: embedObject,
    args: basicObjectString = {}
): EmbedBuilder {
    const embed = new EmbedBuilder(),
        {
            author,
            color,
            description,
            fields,
            footer,
            image,
            thumbnail,
            timestamp,
            title,
            url,
        } = embedObj;

    if (author !== undefined) {
        let authorFix: authorData;

        if (typeof author === 'string')
            authorFix = {
                name: template(author, args),
            };
        else {
            const { name, iconURL, url } = author;

            authorFix = {
                name: template(name, args),
            };

            if (iconURL !== undefined)
                authorFix.iconURL = template(iconURL, args);

            if (url !== undefined) authorFix.url = template(url, args);
        }

        embed.setAuthor(authorFix);
    }

    if (footer !== undefined) {
        let footerFix: footerData;

        if (typeof footer === 'string') {
            footerFix = {
                text: template(footer, args),
            };
        } else {
            const { text, iconURL } = footer;

            footerFix = {
                text: template(text, args),
            };

            if (iconURL !== undefined)
                footerFix.iconURL = template(iconURL, args);
        }

        embed.setFooter(footerFix);
    }

    if (color !== undefined)
        embed.setColor(resolveColor(template(color, args)));

    if (description !== undefined)
        embed.setDescription(template(bigString(description), args));

    if (image !== undefined) embed.setImage(template(image, args));

    if (thumbnail !== undefined) embed.setThumbnail(template(thumbnail, args));

    if (title !== undefined) embed.setTitle(template(title, args));

    if (url !== undefined) embed.setURL(template(url, args));

    if (timestamp === true) embed.setTimestamp();
    else if (typeof timestamp === 'string')
        embed.setTimestamp(new Date(template(timestamp, args)));
    else if (timestamp !== false) embed.setTimestamp(timestamp);

    if (fields !== undefined) {
        embed.addFields(
            fields.map((field) => ({
                name: template(field.name, args),
                value: template(bigString(field.value), args),
                inline: field.inline,
            }))
        );
    }

    return embed;
}
