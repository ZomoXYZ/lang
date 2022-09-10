import { EmbedBuilder } from 'discord.js';
import { basicObjectString, embedObject } from '../..';
/**
 * converts embedObj to Discord.MessageEmbed
 */
export declare function embedObjEmbed(embedObj: embedObject, args?: basicObjectString): EmbedBuilder;
