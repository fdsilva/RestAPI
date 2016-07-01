import express from "express";
import consign from "consign";
const PORT = 3000;

const app = express();


//app.set("json spaces", 4);

consign()
  .include("libs/config.js")
  .then("db.js")
  .then("auth.js")
  //.then("models") ver 1
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

//app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));