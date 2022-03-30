"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedObjEmbed = void 0;
const discord_js_1 = require("discord.js");
const util_1 = require("../../src/util");
/**
 * converts embedObj to Discord.MessageEmbed
 */
function embedObjEmbed(embedObj, args = {}) {
    const embed = new discord_js_1.MessageEmbed(), { author, color, description, fields, footer, image, thumbnail, timestamp, title, url } = embedObj;
    if (author !== undefined) {
        let authorFix;
        if (typeof author === 'string')
            authorFix = {
                name: (0, util_1.template)(author, args)
            };
        else {
            const { name, iconURL, url } = author;
            authorFix = {
                name: (0, util_1.template)(name, args)
            };
            if (iconURL !== undefined)
                authorFix.iconURL = (0, util_1.template)(iconURL, args);
            if (url !== undefined)
                authorFix.url = (0, util_1.template)(url, args);
        }
        embed.setAuthor(authorFix);
    }
    if (footer !== undefined) {
        let footerFix;
        if (typeof footer === 'string') {
            footerFix = {
                text: (0, util_1.template)(footer, args)
            };
        }
        else {
            const { text, iconURL } = footer;
            footerFix = {
                text: (0, util_1.template)(text, args)
            };
            if (iconURL !== undefined)
                footerFix.iconURL = (0, util_1.template)(iconURL, args);
        }
        embed.setFooter(footerFix);
    }
    if (color !== undefined)
        embed.setColor((0, util_1.resolveColor)((0, util_1.template)(color, args)));
    if (description !== undefined)
        embed.setDescription((0, util_1.template)((0, util_1.bigString)(description), args));
    if (image !== undefined)
        embed.setImage((0, util_1.template)(image, args));
    if (thumbnail !== undefined)
        embed.setThumbnail((0, util_1.template)(thumbnail, args));
    if (title !== undefined)
        embed.setTitle((0, util_1.template)(title, args));
    if (url !== undefined)
        embed.setURL((0, util_1.template)(url, args));
    if (timestamp === true)
        embed.setTimestamp();
    else if (typeof timestamp === 'string')
        embed.setTimestamp(new Date((0, util_1.template)(timestamp, args)));
    else if (timestamp !== false)
        embed.setTimestamp(timestamp);
    fields === null || fields === void 0 ? void 0 : fields.forEach(field => {
        embed.addField((0, util_1.template)(field.name, args), (0, util_1.template)((0, util_1.bigString)(field.value), args), field.inline);
    });
    return embed;
}
exports.embedObjEmbed = embedObjEmbed;
