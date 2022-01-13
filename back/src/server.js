import express from "express";
import cors from "cors";
import mainRouter from "./router";
import { APP_BASE_URL } from "./constants";

export const createServer = async () => {
  //Initialization de notre server Express
  const server = express();

  //Notre serveur parsera les requête entrante en Json
  server.use(express.json());

  //On rajoute le router à notre server
  //Il sera accessible sur la route APP_BASE_URL, ici -> /api/v1/
  server.use(APP_BASE_URL, mainRouter);
  server.use(express.static("./static"))

  return server;
};
