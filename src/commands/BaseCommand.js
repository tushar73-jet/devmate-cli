"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const commander_1 = require("commander");
/**
 * BaseCommand is an abstract class to enforce Object-Oriented Programming (OOP) concepts.
 * All specific CLI commands should extend this class and implement the 'register' method.
 */
class BaseCommand {
    commandName;
    description;
    constructor(commandName, description) {
        this.commandName = commandName;
        this.description = description;
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map