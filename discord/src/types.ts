import { EmbedBuilder } from 'discord.js';

/**
 * an object that contains embeds and can be passed directly to methods like `Discord.TextChannel.send()`
 */
export interface embedDataType {
    content?: string;
    embeds: EmbedBuilder[];
}
