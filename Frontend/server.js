const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");
// const open = require('open');

const dev = process.env.NODE_ENV !== "localhost";
const app = next({ dev });
const handle = app.getRequestHandler();

// const httpsOptions = {
//   key: fs.readFileSync(path.join(__dirname, './certificates/rishi.key')),
//   cert: fs.readFileSync(path.join(__dirname, './certificates/certificate.crt')),
// };

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;

    console.log("> Server started on https://localhost:3000");
    // open('https://localhost:3000');
  });
});