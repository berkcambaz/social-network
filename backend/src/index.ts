import { config } from "dotenv";

import { fastify } from "fastify";
import { fastifyStatic } from "@fastify/static";
import { fastifyCookie } from "@fastify/cookie";
import * as path from "path";

import { Api } from "./api";
import { DB } from "./db";

async function main() {
  config();
  await DB.init();
  const server = fastify();

  server.register(fastifyCookie);
  server.register(fastifyStatic, {
    root: path.join(__dirname, "./dist")
  });

  server.post("/api", (req, res) => {
    Api.handle(req, res);
  });

  server.listen(process.env.PORT || 80, "0.0.0.0", (err, addr) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log(`Server has started on ${addr}`);
  });
}

main();