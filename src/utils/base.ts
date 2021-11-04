import * as fs from 'fs-extra';
import * as constants from '../constants';

class Base {
  constructor() {
    fs.ensureFileSync(constants.accessPath);
  }
}

export default Base;
