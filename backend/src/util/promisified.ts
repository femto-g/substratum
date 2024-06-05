import crypto from "crypto";
import { Request, Response } from "express";
import util from "util";

export const cryptoPbkdf2 = util.promisify(crypto.pbkdf2);
