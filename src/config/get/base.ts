import Base from '../../utils/base';
import { Command } from 'commander';

class Config extends Base {
  constructor(program: Command) {
    super();
    const description = `Configure venders account, including Alibaba Cloud, Baidu Cloud, Huawei Cloud, Tencent Cloud, etc.\n\n📖 Document: https://github.com/Serverless-Devs/Serverless-Devs/tree/master/docs/zh/command/config.md`;
    program
      .command('config', 'Configure venders account.')
      //   .command('get', 'xx', { executableFile: 'get' })
      .description(description);
  }
}

export default Config;
