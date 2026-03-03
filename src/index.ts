#!/usr/bin/env node
import { Command } from "commander";
import { HelloCommand } from "./commands/HelloCommand.js";
import { GreetCommand } from "./commands/GreetCommand.js";

const program = new Command();

program
    .name("devmate")
    .description("A comprehensive CLI tool for SESD Workshop 2")
    .version("1.0.0");

// Register commands
const helloCmd = new HelloCommand();
helloCmd.register(program);

const greetCmd = new GreetCommand();
greetCmd.register(program);

program.parse(process.argv);