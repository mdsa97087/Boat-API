const data = require("./BoatProducts.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3009;

server.use(middlewares);
server.use(router);
server.listen(port, () =>
  console.log(`JSON Server is running on port ${port}`)
);
