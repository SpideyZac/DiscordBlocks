const { javascriptGenerator } = require("blockly/javascript");

javascriptGenerator["discordblocks_login"] = function(block) {
    const token = javascriptGenerator.valueToCode(block, "TOKEN", javascriptGenerator.ORDER_ATOMIC);
    const code = `dbbm = new DiscordBlocksBotManager(${token});\n`;

    return code;
}

javascriptGenerator["discordblocks_on_message"] = function(block) {
    const varName = javascriptGenerator.nameDB_.getName(block.getFieldValue("VAR"), Blockly.Names.NameType.VARIABLE);
    // Generate code for what the listener should do after boilerplate
    const doCode = javascriptGenerator.statementToCode(block, "DO");
    const code = `dbbm.addMessageListener({
        listener: (${varName}) => {
            ${doCode}
        },
        ignoreBot: false,
    });\n`;

    return code;
}

javascriptGenerator["discordblocks_on_message_nb"] = function(block) {
    const varName = javascriptGenerator.nameDB_.getName(block.getFieldValue("VAR"), Blockly.Names.NameType.VARIABLE);
    // Generate code for what the listener should do after boilerplate
    const doCode = javascriptGenerator.statementToCode(block, "DO");
    const code = `dbbm.addMessageListener({
        listener: (${varName}) => {
            ${doCode}
        },
        ignoreBot: true,
    });\n`;

    return code;
}

javascriptGenerator["discordblocks_reply_to_message"] = function(block) {
    const varName = javascriptGenerator.nameDB_.getName(block.getFieldValue("VAR"), Blockly.Names.NameType.VARIABLE);
    const response = javascriptGenerator.valueToCode(block, "RESPONSE", javascriptGenerator.ORDER_ATOMIC);
    const code = `dbbm.reply(${varName}, ${response})\n`;

    return code;
}