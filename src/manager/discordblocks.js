const { createNewDiscordBlocksBot } = require("./bot");

class DiscordBlocksBotManager {
    constructor(token) {
        this.bot = createNewDiscordBlocksBot(token);
        this.messageListeners = [];

        this.bot.on("messageCreate", (message) => {
            for (let messageListener of this.messageListeners) {
                // If the user decides that they do not want to recieve bot messages, we check if they are ignoring bot messages and the bot did not send the message
                // otherwise we check to see if the user does not care
                if (messageListener.ignoreBot && !(message.author === this.bot.user)) {
                    messageListener.listener(message);
                } else if (!messageListener.ignoreBot) {
                    messageListener.listener(message);
                }
            }
        });
    }

    addMessageListener(messageListener) {
        this.messageListeners.push(messageListener);
    }

    async reply(message, response) {
        await message.reply(response);
    }
}

module.exports = {
    DiscordBlocksBotManager,
};