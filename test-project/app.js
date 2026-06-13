import express from "express";
import { getUser } from "./controllers/userController.js";

const app = express();

function startServer() {
  app.get("/user", getUser);
  app.listen(3000, () => {
    console.log("Server running");
  });
}

startServer();