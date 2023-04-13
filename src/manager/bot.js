const { Client, GatewayIntentBits } = require('discord.js');

function createNewDiscordBlocksBot(token) {
    const bot = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
        ],
    });

    bot.login(token);

    return bot;
}

module.exports = {
    createNewDiscordBlocksBot,
};