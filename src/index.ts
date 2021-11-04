import { Command } from 'commander';
const program = new Command();
import * as utils from './utils';

program.version(utils.getVersion(), '-v, --version');
program.parse(process.argv);
