const jsonserver = require('json-server');

const server = jsonserver.create();
const router = jsonserver.router('banco.json');

const middle = jsonserver.defaults();

const port = process.env.PORT || 3000;

server.use(middle);
server.use(router);
server.listen(port, ()=> {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
