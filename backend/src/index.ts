import { fastify } from "fastify";
import { fastifyStatic } from "@fastify/static";
import { fastifyCookie } from "@fastify/cookie";
import path = require("path");

const server = fastify();
server.register(fastifyStatic, {
  root: path.join(__dirname, "./dist")
});

server.register(fastifyCookie);

server.post("/api", (req, res) => {

})

server.listen(process.env.PORT || 80, "0.0.0.0", (err, addr) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server has started on ${addr}`);
})