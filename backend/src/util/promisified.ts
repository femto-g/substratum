import crypto from 'crypto';
import util from 'util';

export const cryptoPbkdf2 = util.promisify(crypto.pbkdf2);