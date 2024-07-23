import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./src/service/data/dummyData.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);

server.listen(4000, () => {
  console.log('JSON Server running on port 4000');
});
