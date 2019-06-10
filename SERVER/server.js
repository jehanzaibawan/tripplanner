import express from "express";
import appRoutes from "./src/routes";
import cors from "cors";
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.send("API Health is OK.");
});

appRoutes(app);

app.listen(process.env.SERVER_PORT || 8080, () => {
  console.log(
    `\n\nSERVER IS NOW RUNNING\n\nPORT:${process.env.SERVER_PORT}\n\nPress Ctrl/Cmd + C to stop the server.`
  );
});
