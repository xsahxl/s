import { Command } from 'commander';
const program = new Command();
import chalk from 'chalk';
import * as core from '@serverless-devs/core';
import { logger } from '../../utils';

const description = `You can add an account

    Example:
        $ s config add
        $ s config add --AccessKey ****** --SecretKey ******
        $ s config add --AccessKeyID ****** --AccessKeySecret ****** --AccountID ****** --SecurityToken ******
        $ s config add --keyList key1,key2,key3 --valueList value1,value2,value3

    Configuration parameters template for vendors:
        alibaba: AccountID, AccessKeyID, AccessKeySecret
        aws: AccessKeyID, SecretAccessKey
        baidu: AccessKeyID, SecretAccessKey
        huawei: AccessKey, SecretKey
        google: PrivateKeyData
        tencent: AccountID, SecretID, SecretKey

How to get the key: ${chalk.underline(
  'https://github.com/Serverless-Devs/docs/tree/master/zh/others/provider-config',
)}`;

program
  .name('s config add')
  .usage('[Options]')
  .option('--AccountID [AccountID]', 'AccountID of key information')
  .option('--AccessKeyID [AccessKeyID]', 'AccessKeyID of key information')
  .option(
    '--AccessKeySecret [AccessKeySecret]',
    'AccessKeySecret of key information',
  )
  .option('--SecurityToken [SecurityToken]', 'SecurityToken of key information')
  .option(
    '--SecretAccessKey [SecretAccessKey]',
    'SecretAccessKey of key information',
  )
  .option('--AccessKey [AccessKey]', 'AccessKey of key information')
  .option('--SecretKey [SecretKey]', 'SecretKey of key information')
  .option('--SecretID [SecretID]', 'SecretID of key information')
  .option(
    '--PrivateKeyData [PrivateKeyData]',
    'PrivateKeyData of key information',
  )
  .option(
    '-kl , --keyList [keyList]',
    'Keys of key information, like: -kl key1,key2,key3',
  )
  .option(
    '-il , --infoList [infoList]',
    'Values of key information, like: -il info1,info2,info3',
  )
  .option(
    '-a , --aliasName [name]',
    'Key pair alias, if the alias is not set, use default instead',
  )
  .option('-f', 'Mandatory overwrite key information')
  .description(description)
  .addHelpCommand(false);
program.parse(process.argv);

const formatArgs = process.argv.map((o) => {
  if (o === '-kl') return '--kl';
  if (o === '-il') return '--il';
  return o;
});

const argv = require('minimist')(formatArgs.slice(2), {
  alias: {
    aliasName: 'a',
    infoList: 'il',
    keyList: 'kl',
  },
  boolean: ['f'],
});

const {
  AccountID,
  AccessKeyID,
  AccessKeySecret,
  SecretAccessKey,
  AccessKey,
  SecretKey,
  PrivateKeyData,
  SecretID,
  keyList,
  infoList,
  aliasName,
  SecurityToken,
  f,
} = argv;
process.env.Temp_Params = JSON.stringify({ f });

const keyInformation: any = {};
if (keyList && infoList) {
  const infoKeyList = keyList.split(',');
  const infoValueList = infoList.split(',');
  if (infoKeyList.length === infoValueList.length) {
    for (let i = 0; i < infoKeyList.length; i++) {
      keyInformation[infoKeyList[i]] = infoValueList[i];
    }
  } else {
    throw logger.error(
      'Please make sure -kl/--keyList is as long as -il/--infoList',
    );
  }
}
if (AccountID) {
  keyInformation['AccountID'] = AccountID;
}
if (AccessKeyID) {
  keyInformation['AccessKeyID'] = AccessKeyID;
}
if (AccessKeySecret) {
  keyInformation['AccessKeySecret'] = AccessKeySecret;
}
if (SecurityToken) {
  keyInformation['SecurityToken'] = SecurityToken;
}
if (SecretAccessKey) {
  keyInformation['SecretAccessKey'] = SecretAccessKey;
}
if (AccessKey) {
  keyInformation['AccessKey'] = AccessKey;
}
if (SecretKey) {
  keyInformation['SecretKey'] = SecretKey;
}
if (SecretKey) {
  keyInformation['SecretKey'] = SecretKey;
}
if (SecretID) {
  keyInformation['SecretID'] = SecretID;
}
if (PrivateKeyData) {
  keyInformation['PrivateKeyData'] = PrivateKeyData;
}
if (Object.keys(keyInformation).length > 0) {
  core.setKnownCredential(keyInformation, aliasName);
} else {
  core.setCredential();
}
