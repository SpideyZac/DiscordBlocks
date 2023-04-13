require("./src/utils/prompt.js");

var toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Discord Blocks",
            "contents": [
                {
                    "kind": "block",
                    "type": "discordblocks_login",
                },
                {
                    "kind": "block",
                    "type": "discordblocks_on_message",
                },
                {
                    "kind": "block",
                    "type": "discordblocks_on_message_nb",
                },
                {
                    "kind": "block",
                    "type": "discordblocks_reply_to_message",
                },
            ],
            "colour": "360",
        },
        {
            "kind": "category",
            "name": "Text",
            "contents": [
                {
                    "kind": "block",
                    "type": "text"
                },
            ],
            "colour": "180",
        },
        {
            "kind": "category",
            "name": "Variables",
            "custom": "VARIABLE",
            "colour": "300",
        },
        {
            "kind": "category",
            "name": "Functions",
            "custom": "PROCEDURE",
            "colour": "270"
        },
    ],
};

var blocklyArea = document.getElementById("blocklyArea");
var blocklyDiv = document.getElementById("blocklyDiv");
var demoWorkspace = Blockly.inject(blocklyDiv,
    {media: "./node_modules/blockly/media/",
    toolbox: toolbox});
    
var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;

    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);

    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + "px";
    blocklyDiv.style.top = y + "px";
    blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
    blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
    Blockly.svgResize(demoWorkspace);
};

window.addEventListener("resize", onresize, false);
onresize();

Blockly.Variables.createVariableButtonHandler(demoWorkspace, null);