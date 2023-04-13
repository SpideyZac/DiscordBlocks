const Blockly = require("blockly");

Blockly.Blocks["discordblocks_login"] = {
    init: function() {
        this.setColour(360);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setTooltip("Makes your Discord bot loggin to the specific bot token");
        this.appendValueInput("TOKEN")
            .setCheck("String")
            .appendField("login to");
    }
}

Blockly.Blocks["discordblocks_on_message"] = {
    init: function() {
        this.setColour(340);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setTooltip("Calls this event when a new message is created");
        this.appendDummyInput()
            .appendField("on message created");
        this.appendDummyInput()
            .appendField("set")
            .appendField(new Blockly.FieldVariable("message"), "VAR")
            .appendField("to message");
        this.appendStatementInput("DO")
            .appendField("and then");
    }
}

// nb = message reciever will not recieve bot messages
Blockly.Blocks["discordblocks_on_message_nb"] = {
    init: function() {
        this.setColour(340);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setTooltip("Calls this event when a new message not from the bot is created");
        this.appendDummyInput()
            .appendField("on message not from bot created");
        this.appendDummyInput()
            .appendField("set")
            .appendField(new Blockly.FieldVariable("message"), "VAR")
            .appendField("to message");
        this.appendStatementInput("DO")
            .appendField("and then");
    }
}

Blockly.Blocks["discordblocks_reply_to_message"] = {
    init: function () {
        this.setColour(320);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setTooltip("Replies to a message with a string");
        this.appendDummyInput()
            .appendField("reply to message")
            .appendField(new Blockly.FieldVariable("message"), "VAR");
        this.appendValueInput("RESPONSE")
            .appendField("with string")
            .setCheck("String");
    }
}