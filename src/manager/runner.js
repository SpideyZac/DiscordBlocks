// This file is weird magic using eval
// DBBM is assigned by eval and DiscordBlocksBotManager is used by eval

const { DiscordBlocksBotManager } = require("./src/manager/discordblocks");

var dbbm;

function evaluate(code) {
    if (dbbm) {
        dbbm.bot.destroy();
    }

    eval(code);
}

function runner() {
    evaluate(javascriptGenerator.workspaceToCode(demoWorkspace));
}