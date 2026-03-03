import { Command } from "commander";
import { BaseCommand } from "./BaseCommand.js";

export class GreetCommand extends BaseCommand {
    constructor() {
        // We name the command "greet" and add a <name> argument directly in the registration
        super("greet", "Greets the user by name");
    }

    register(program: Command): void {
        program
            .command(`${this.commandName} <name>`)
            .description(this.description)
            .action((name: string) => {
                console.log(`Hello, ${name}! Awesome to meet you.`);
            });
    }
}
