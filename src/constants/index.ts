import os from 'os';
import path from 'path';

export const homedir = path.join(os.homedir(), '.s');
export const accessPath = path.join(homedir, 'access.yaml');
