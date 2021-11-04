import { Command } from 'commander';
const program = new Command();
import * as utils from './utils';

program
  .usage('[Options] [Commands]')
  .version(utils.getVersion(), '-v, --version')
  .command('config', 'Configure venders account.')
  .addHelpCommand(false);
program.parse(process.argv);
