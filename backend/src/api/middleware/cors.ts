import cors, { CorsOptions } from 'cors';

const corsOptions : CorsOptions = {
	origin: process.env.CLIENT_URL,
	credentials: true
}

export const corsMiddleware = cors(corsOptions)