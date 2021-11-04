import { Command } from 'commander';
const program = new Command();
import * as constants from '../../constants';
import * as utils from '../../utils';

const description = `You can get accounts.
 
  Example:
    $ s config get
    $ s config get -a demo`;

program
  .name('s config get')
  .usage('[Options]')
  .option(
    '-a, --access [aliasName]',
    'Key pair alia, if the alias is not set, use default instead',
  )
  .description(description)
  .addHelpCommand(false);
program.parse(process.argv);

const res = utils.yamlLoad(constants.accessPath);
utils.logger.output(res);
