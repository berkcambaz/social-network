import { config } from "dotenv";
config();

import { fastify } from "fastify";
import { fastifyStatic } from "@fastify/static";
import { fastifyCookie } from "@fastify/cookie";
import * as path from "path";

import { Api } from "./api";

const server = fastify();
const api = new Api();

server.register(fastifyCookie);
server.register(fastifyStatic, {
  root: path.join(__dirname, "./dist")
});

server.post("/api", (req, res) => {
  api.handle(req, res);
});

server.listen(process.env.PORT || 80, "0.0.0.0", (err, addr) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server has started on ${addr}`);
});