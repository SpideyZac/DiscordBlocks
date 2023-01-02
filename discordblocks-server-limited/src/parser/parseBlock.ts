import { Client } from "discord.js";

import Block from "../types/parser/block";
import { Variables } from "../types/parser/parseBlock";

export default async function parseBlock(
    block: Block, client: Client, variables: Variables, ...args: any[]
) {
    switch (block.type) {
        case "event":
            switch (block.id) {
                case "ready":
                    client.on("ready", async () => {
                        for (let b of block.innerBlocks) {
                            await parseBlock(b, client, variables, ...args);
                        }
                    });
            }
    }
};