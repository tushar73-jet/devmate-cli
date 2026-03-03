import { Command } from "commander";
import { BaseCommand } from "./BaseCommand.js";

export class HelloCommand extends BaseCommand {
    constructor() {
        super("hello", "Prints a friendly greeting");
    }

    register(program: Command): void {
        program
            .command(this.commandName)
            .description(this.description)
            .action(() => {
                console.log("Hello, world! Welcome to DevMate CLI.");
            });
    }
}
