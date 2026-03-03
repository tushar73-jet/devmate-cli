import { Command } from "commander";
import { BaseCommand } from "./BaseCommand.js";
import fs from "fs";
import path from "path";

export class FileInfoCommand extends BaseCommand {
    constructor() {
        super("fileinfo", "Provides basic information about a given file");
    }

    register(program: Command): void {
        program
            .command(`${this.commandName} <filename>`)
            .description(this.description)
            .action((filename: string) => {
                const filePath = path.resolve(process.cwd(), filename);

                if (!fs.existsSync(filePath)) {
                    console.log(`Error: File '${filename}' does not exist.`);
                    return;
                }

                try {
                    const stats = fs.statSync(filePath);

                    console.log(`\nFile Information for: ${filename}`);
                    console.log(`-----------------------------------`);
                    console.log(`Absolute Path: ${filePath}`);
                    console.log(`Size: ${stats.size} bytes`);
                    console.log(`Created: ${stats.birthtime.toLocaleString()}`);
                    console.log(`Last Modified: ${stats.mtime.toLocaleString()}`);
                    console.log(`Is Directory? ${stats.isDirectory() ? "Yes" : "No"}`);
                } catch (error: any) {
                    console.log(`Failed to retrieve file info: ${error.message}`);
                }
            });
    }
}
