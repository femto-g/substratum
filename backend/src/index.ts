import express, { Express, Request, Response } from 'express';
export const app : Express = express();
import http from "http";
export const httpServer = http.createServer(app);
import {router as authRouter} from './api/routes/auth';
import passport from 'passport';
import { sessionMiddleware } from './api/middleware/session';
import { corsMiddleware } from './api/middleware/cors';


if(process.env.NODE_ENV === 'prod'){
	app.set('trust proxy', true);
}

app.use(corsMiddleware);
app.use(express.json());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());


app.use("/", authRouter);


app.use((err: { stack: any; }, req : Request, res : Response, next: any) => {
	console.log(err.stack);
  return res.sendStatus(500);
}) 
