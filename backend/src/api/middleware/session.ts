import { PrismaClient } from '@prisma/client';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import session, {SessionOptions} from 'express-session';

const store = new PrismaSessionStore(
 	new PrismaClient(),
  {
    checkPeriod: 2 * 60 * 1000,  //ms
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }
)

const sessionOptions : SessionOptions = {
	secret: process.env.EXPRESS_SESSION_SECRET || 'keyboard cat', 
	cookie: { 
	 maxAge: 1000 * 60 * 30,
	 secure: process.env.NODE_ENV === 'prod' ? true : false,
	 sameSite: process.env.NODE_ENV === 'prod' ? "none": "lax" as boolean | "none" | "lax" | "strict" | undefined
	 },
	resave: false,
	saveUninitialized: true,
	store: store
	}

export const sessionMiddleware = session(sessionOptions);
