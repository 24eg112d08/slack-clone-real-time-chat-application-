import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port https://localhost:${port}`);
  });
});
