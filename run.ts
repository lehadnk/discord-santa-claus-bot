import {config as dotenvInit} from 'dotenv';
import {Client, TextChannel} from "discord.js";
import {Locker} from "./src/Locker";
import {PhrasesGenerator} from "./src/PhrasesGenerator";

dotenvInit();

const locker = new Locker(24 * 60 * 60 * 1000);
const phrasesGenerator = new PhrasesGenerator();

let discordClient = new Client();
discordClient.on("message", async msg => {
    if (msg.channel.type != 'text') {
        return;
    }

    let channel: TextChannel;
    // @ts-ignore
    channel = msg.channel;

    if (msg.content === '!предсказание' && !locker.isLockedForMember(msg.guild.id, msg.author.id)) {
        msg.channel.send("<@"+msg.author.id+"> "+phrasesGenerator.getOne(msg.author.id)).catch(() => {
            console.log("No msg send permissions for "+channel.name+" in "+msg.guild.name);
        });
        msg.delete(0).catch(() => {
            console.log("No msg delete permissions for "+channel.name+" in "+msg.guild.name);
        });
        locker.lockForMember(msg.guild.id, msg.author.id);
    }
});
discordClient.login(process.env.DISCORD_BOT_TOKEN);