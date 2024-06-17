import path from "path";
import dotenv from "dotenv";
import { app } from ".";

const envPath: string = path.resolve(
  __dirname,
  `../env/${process.env.NODE_ENV}.env`,
);
dotenv.config({ path: envPath });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
