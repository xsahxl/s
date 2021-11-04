import { Command } from 'commander';
const program = new Command();

const description = `Configure venders account, including Alibaba Cloud, Baidu Cloud, Huawei Cloud, Tencent Cloud, etc.\n\n📖 Document: https://github.com/Serverless-Devs/Serverless-Devs/tree/master/docs/zh/command/config.md`;

program
  .name('s config')
  .usage('[Options] [Commands]')
  .command('add', 'Add an account')
  .command('get', 'Get accounts')
  .command('delete', 'Delete an account')
  .description(description)
  .addHelpCommand(false);

program.parse(process.argv);
