import path from 'path';
import dotenv from 'dotenv';
import { httpServer } from '.';

const envPath : string = path.resolve(__dirname, `../env/${process.env.NODE_ENV}.env`);
dotenv.config({path: envPath});

const port = process.env.PORT;

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});