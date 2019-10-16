"use strict";
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const fs = require("fs");
const lodash = require("lodash");
// When is a single file
//const router = jsonServer.router(path.join(__dirname, "db.json"));

// Read data asycn for stub/ defined
let data = {};
let files = fs.readdirSync(path.resolve(__dirname, "stub/"));

files.forEach(file => {
    if (file.indexOf(".json") > -1) {
        lodash.extend(data, require(path.resolve(__dirname, "stub/", file)));
    }
});

const router = jsonServer.router(data);

const middlewares = jsonServer.defaults();
const port = 9000;
server.use(middlewares);
server.use(require('./middlewares/singular'));

server.use(require("./json-server-interceptor"));
server.use(jsonServer.rewriter(require('./routes.json')));
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running in port ${port}`);
});
