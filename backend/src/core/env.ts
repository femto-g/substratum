import dotenv from "dotenv";
import path from "path";
const envPath: string = path.resolve(__dirname, `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });
