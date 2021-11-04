const pkg = require('../../package.json');
import * as core from '@serverless-devs/core';
import * as fs from 'fs-extra';
import * as yaml from 'js-yaml';
export const logger = new core.Logger('xsahxl-ss');

export const yamlLoad = (p: string) => {
  if (fs.existsSync(p)) {
    return yaml.load(fs.readFileSync(p, 'utf-8'));
  }
  logger.debug(`${p} not exist`);
};

export const getVersion = () =>
  `${pkg.name}: ${pkg.version}, ${process.platform}-${process.arch}, node-${process.version}`;
