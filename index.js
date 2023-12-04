const express = require('express');
const next = require('next');
const {parse} = require('url');
const multipart = require('kraken-js/middleware/multipart');

const app = express();
const port = 3000;
const dev = true;
const hostname = 'localhost';
const nextApp = next({dev, hostname, port});
const handler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.use(multipart());
  app.use((req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  });
  app.listen(port);
});

