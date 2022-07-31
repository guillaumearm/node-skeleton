#!/usr/bin/env node
import { Command } from 'commander';

import * as packageJson from '../package.json';

const program = new Command();

program
  .showHelpAfterError()
  .name(packageJson.cliName)
  .description('CLI skeleton description')
  .version(packageJson.version)
  .argument('<path>', 'new path of the project')
  .argument('[name]', 'project name')
  .option('-t, --type <type>', 'create a new node project', 'base');

program.parse();

const dirPath: string = program.args[0] as string; // because it's mandatory
const projectName: string | undefined = program.args[1];
const projectType = program.opts().type;

console.log('> path:', dirPath);
console.log('> name:', projectName);
console.log('> type:', projectType);
