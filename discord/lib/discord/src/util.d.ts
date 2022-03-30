import { MessageEmbed } from 'discord.js';
import { embedObject, basicObjectString } from '../../src/types';
/**
 * converts embedObj to Discord.MessageEmbed
 */
export declare function embedObjEmbed(embedObj: embedObject, args?: basicObjectString): MessageEmbed;
