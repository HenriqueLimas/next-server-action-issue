const express = require('express');
const next = require('next');
const {parse} = require('url');

const app = express();
const port = 3000;
const dev = true;
const hostname = 'localhost';
const nextApp = next({dev, hostname, port});
const handler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.use((req, res, next) => {
    req.on('readable', () => {
      while (req.read() !== null) {
        console.log("READING")
      }
    })
    req.on('end', () => {
      next()
    })
  })
  app.use((req, res) => {
    const parsedUrl = parse(req.url, true);
    handler(req, res, parsedUrl);
  });
  app.listen(port);
});

