import { Command } from "commander";
/**
 * BaseCommand is an abstract class to enforce Object-Oriented Programming (OOP) concepts.
 * All specific CLI commands should extend this class and implement the 'register' method.
 */
export declare abstract class BaseCommand {
    protected commandName: string;
    protected description: string;
    constructor(commandName: string, description: string);
    /**
     * Abstract method that must be implemented by subclasses to register
     * the command with the Commander program instance.
     * @param program Commander program
     */
    abstract register(program: Command): void;
}
//# sourceMappingURL=BaseCommand.d.ts.map